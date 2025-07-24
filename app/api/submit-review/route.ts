import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import adminConfig from '../../../sanity/config/admin-config';

// Simple email sending function (you can replace with your preferred email service)
async function sendConfirmationEmail(email: string, reviewerName: string) {
    try {
        // Check if API key is set
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set in environment variables');
            return false;
        }

        // Send email using Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'reviews@laurynasnakrosis.com',
                to: email,
                subject: 'Review Submitted Successfully',
                html: `
                    <h2>Thank you for your review!</h2>
                    <p>Hi ${reviewerName},</p>
                    <p>We've received your review and it will be published after approval.</p>
                    <p>You'll receive another email once your review is live on the website.</p>
                    <p>Best regards,<br>Laurynas Nakrosis</p>
                `
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Resend API error:', response.status, errorData);
            return false;
        }

        const result = await response.json();
        console.log('Email sent successfully:', result);
        return true;
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return false;
    }
}

// Admin notification function
async function sendAdminNotification(reviewData: any) {
    try {
        const adminEmail = process.env.ADMIN_EMAIL || 'your-email@example.com';
        
        // Check if API key is set
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set in environment variables');
            return false;
        }

        // Send admin notification using Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'reviews@laurynasnakrosis.com',
                to: adminEmail,
                subject: 'New Review Submitted',
                html: `
                    <h2>New Review Received!</h2>
                    <p><strong>Reviewer:</strong> ${reviewData.reviewerName}</p>
                    <p><strong>Email:</strong> ${reviewData.email}</p>
                    <p><strong>Company:</strong> ${reviewData.company || 'N/A'}</p>
                    <p><strong>Project:</strong> ${reviewData.projectType || 'N/A'}</p>
                    <p><strong>Rating:</strong> ${reviewData.rating}/5 stars</p>
                    <p><strong>Review:</strong> ${reviewData.reviewText}</p>
                    <p><strong>Status:</strong> Pending Approval</p>
                    <p><a href="https://w186ajj8.sanity.studio/">Review in Sanity Studio</a></p>
                    <p><em>Remember to approve this review before it appears on your website!</em></p>
                `
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Resend API error (admin):', response.status, errorData);
            return false;
        }

        const result = await response.json();
        console.log('Admin email sent successfully:', result);
        return true;
    } catch (error) {
        console.error('Error sending admin notification:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const reviewerName = formData.get('reviewerName') as string;
        const reviewerRole = formData.get('reviewerRole') as string;
        const company = formData.get('company') as string;
        const reviewText = formData.get('reviewText') as string;
        const rating = parseInt(formData.get('rating') as string);
        const projectType = formData.get('projectType') as string;
        const email = formData.get('email') as string;
        const profileImage = formData.get('profileImage') as File | null;

        // Validation
        if (!reviewerName || !reviewText || !rating || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (reviewText.length < 10 || reviewText.length > 500) {
            return NextResponse.json(
                { error: 'Review text must be between 10 and 500 characters' },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            );
        }

        // Create Sanity client with write permissions
        const client = createClient(adminConfig);

        // Handle profile image upload if provided
        let profileImageAsset = null;
        if (profileImage) {
            try {
                // Convert file to buffer
                const bytes = await profileImage.arrayBuffer();
                const buffer = Buffer.from(bytes);
                
                // Upload to Sanity
                profileImageAsset = await client.assets.upload('image', buffer, {
                    filename: profileImage.name,
                    contentType: profileImage.type,
                });
            } catch (error) {
                console.error('Error uploading image:', error);
                // Continue without image if upload fails
            }
        }

        // Create the review document
        const reviewDoc = {
            _type: 'review',
            reviewerName,
            reviewerRole: reviewerRole || '',
            company: company || '',
            reviewText,
            rating,
            projectType: projectType || '',
            reviewDate: new Date().toISOString().split('T')[0], // Current date
            isApproved: false, // Default to not approved
            isFeatured: false, // Default to not featured
            ...(profileImageAsset && { profileImage: { _type: 'image', asset: { _type: 'reference', _ref: profileImageAsset._id } } })
        };

        // Insert the review into Sanity
        const result = await client.create(reviewDoc);

        // Send confirmation email
        const confirmationSent = await sendConfirmationEmail(email, reviewerName);
        console.log('Confirmation email sent:', confirmationSent);

        // Send admin notification
        const adminSent = await sendAdminNotification(reviewDoc);
        console.log('Admin notification sent:', adminSent);

        return NextResponse.json(
            { 
                success: true, 
                message: 'Review submitted successfully. Check your email for confirmation.',
                reviewId: result._id 
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error submitting review:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 