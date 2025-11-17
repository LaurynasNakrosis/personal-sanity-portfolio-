"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

type ReviewFormData = {
    reviewerName: string;
    reviewerRole: string;
    company: string;
    companyUrl: string;
    reviewText: string;
    rating: number;
    projectType: string;
    email: string;
    profileImage?: File;
};

type Props = {
    onClose?: () => void;
};

export default function ReviewForm({ onClose }: Props) {
    const [formData, setFormData] = useState<ReviewFormData>({
        reviewerName: '',
        reviewerRole: '',
        company: '',
        companyUrl: '',
        reviewText: '',
        rating: 0,
        projectType: '',
        email: '',
        profileImage: undefined
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                profileImage: file
            }));
        }
    };

    const handleRatingClick = (rating: number) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const renderStars = (rating: number, isInteractive: boolean = false) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const isFilled = isInteractive ? i <= hoveredRating || i <= rating : i <= rating;
            const StarComponent = isFilled ? StarIcon : StarOutlineIcon;
            
            stars.push(
                <StarComponent
                    key={i}
                    className={`h-6 w-6 cursor-pointer transition-colors ${
                        isFilled ? 'text-yellow-400' : 'text-gray-400'
                    } ${isInteractive ? 'hover:text-yellow-300' : ''}`}
                    onClick={isInteractive ? () => handleRatingClick(i) : undefined}
                    onMouseEnter={isInteractive ? () => setHoveredRating(i) : undefined}
                    onMouseLeave={isInteractive ? () => setHoveredRating(0) : undefined}
                />
            );
        }
        return stars;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.rating === 0) {
            alert('Please select a rating');
            return;
        }

        if (formData.reviewText.length < 10) {
            alert('Review must be at least 10 characters long');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Create FormData for file upload
            const submitFormData = new FormData();
            submitFormData.append('reviewerName', formData.reviewerName);
            submitFormData.append('reviewerRole', formData.reviewerRole);
            submitFormData.append('company', formData.company);
            submitFormData.append('companyUrl', formData.companyUrl);
            submitFormData.append('reviewText', formData.reviewText);
            submitFormData.append('rating', formData.rating.toString());
            submitFormData.append('projectType', formData.projectType);
            submitFormData.append('email', formData.email);
            
            if (formData.profileImage) {
                submitFormData.append('profileImage', formData.profileImage);
            }

            const response = await fetch('/api/submit-review', {
                method: 'POST',
                body: submitFormData,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    reviewerName: '',
                    reviewerRole: '',
                    company: '',
                    companyUrl: '',
                    reviewText: '',
                    rating: 0,
                    projectType: '',
                    email: '',
                    profileImage: undefined
                });
                
                // Close the form after 2 seconds
                setTimeout(() => {
                    if (onClose) {
                        onClose();
                    }
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#2f2f2f] rounded-lg p-6 max-w-md mx-auto"
        >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Leave a Review
            </h3>

            {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
                    Thank you for your review! It will be published after approval.
                    <br />
                    <span className="text-sm">Check your email for confirmation.</span>
                    <br />
                    <span className="text-sm">Form will close automatically...</span>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
                    There was an error submitting your review. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Name *
                    </label>
                    <input
                        type="text"
                        name="reviewerName"
                        value={formData.reviewerName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Profile Image */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Profile Photo (Optional)
                    </label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f7ab0a] file:text-black hover:file:bg-[#f7ab0a]/80"
                    />
                    {formData.profileImage && (
                        <p className="text-green-400 text-xs mt-1">
                            ✓ {formData.profileImage.name} selected
                        </p>
                    )}
                </div>

                {/* Role */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Role
                    </label>
                    <input
                        type="text"
                        name="reviewerRole"
                        value={formData.reviewerRole}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                        placeholder="e.g., Project Manager, CEO"
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                        placeholder="Enter company name"
                    />
                </div>

                {/* Company URL */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company Website (Optional)
                    </label>
                    <input
                        type="url"
                        name="companyUrl"
                        value={formData.companyUrl}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                        placeholder="https://example.com"
                    />
                </div>

                {/* Project Type */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Project Type
                    </label>
                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a]"
                    >
                        <option value="">Select project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Consulting">Consulting</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Rating *
                    </label>
                    <div className="flex justify-center space-x-1">
                        {renderStars(formData.rating, true)}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-1">
                        {formData.rating > 0 ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'Click to rate'}
                    </p>
                </div>

                {/* Review Text */}
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Review *
                    </label>
                    <textarea
                        name="reviewText"
                        value={formData.reviewText}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        maxLength={500}
                        className="w-full px-3 py-2 bg-[#393939] border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#f7ab0a] resize-none"
                        placeholder="Share your experience working with me (10-500 characters)"
                    />
                    <p className="text-right text-gray-400 text-xs mt-1">
                        {formData.reviewText.length}/500
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f7ab0a] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#f7ab0a]/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </motion.div>
    );
} 