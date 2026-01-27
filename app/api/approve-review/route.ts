import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import adminConfig from '../../../sanity/config/admin-config';

// Function to send approval notification email
async function sendApprovalEmail(email: string, reviewerName: string) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set in environment variables');
            return false;
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'reviews@laurynasnakrosis.com',
                to: email,
                subject: 'Your Review is Now Live!',
                html: `
                    <h2>Great news!</h2>
                    <p>Hi ${reviewerName},</p>
                    <p>Your review has been approved and is now live on our website!</p>
                    <p>Thank you for taking the time to share your feedback.</p>
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
        console.log('Approval email sent successfully:', result);
        return true;
    } catch (error) {
        console.error('Error sending approval email:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const { reviewId, action } = await request.json();

        if (!reviewId || !action) {
            return NextResponse.json(
                { error: 'Missing reviewId or action' },
                { status: 400 }
            );
        }

        if (action !== 'approve' && action !== 'reject') {
            return NextResponse.json(
                { error: 'Action must be either "approve" or "reject"' },
                { status: 400 }
            );
        }

        // Create Sanity client with write permissions
        const client = createClient(adminConfig);

        if (action === 'approve') {
            // Get the review to find the reviewer's email
            const review = await client.getDocument(reviewId);
            
            if (!review) {
                return NextResponse.json(
                    { error: 'Review not found' },
                    { status: 404 }
                );
            }
            
            // Update the review to mark it as approved
            await client.patch(reviewId).set({ isApproved: true }).commit();

            // Send approval email if we have the reviewer's email
            if (review.email) {
                await sendApprovalEmail(review.email, review.reviewerName);
            }

            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Review approved successfully',
                    reviewId 
                },
                { status: 200 }
            );
        } else {
            // For rejection, you might want to delete the review or mark it differently
            // For now, we'll just delete it
            await client.delete(reviewId);

            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Review rejected and deleted',
                    reviewId 
                },
                { status: 200 }
            );
        }

    } catch (error) {
        console.error('Error processing review approval:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 