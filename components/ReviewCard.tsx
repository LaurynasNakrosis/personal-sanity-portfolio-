"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Review } from '@/types/Review';
import { urlFor } from "../sanity/config/client-config";
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

type Props = {
    review: Review;
};

export default function ReviewCard({ review }: Props) {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <StarIcon 
                        key={i} 
                        className="h-4 w-4 text-yellow-400" 
                    />
                );
            } else {
                stars.push(
                    <StarOutlineIcon 
                        key={i} 
                        className="h-4 w-4 text-gray-400" 
                    />
                );
            }
        }
        return stars;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#2f2f2f] rounded-lg p-6 max-w-sm mx-auto hover:bg-[#393939] transition-colors duration-200 h-full flex flex-col"
        >
            {/* Star Rating */}
            <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
            </div>

            {/* Review Text */}
            <div className="mb-4 flex-1">
                <blockquote className="text-gray-300 text-sm md:text-base italic break-words leading-relaxed">
                    "{review.reviewText}"
                </blockquote>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center space-x-3 mt-auto">
                {review.profileImage && (
                    <img
                        src={urlFor(review.profileImage).url()}
                        alt={review.reviewerName}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                )}
                <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm md:text-base">
                        {review.reviewerName}
                    </h4>
                    {review.reviewerRole && (
                        <p className="text-gray-400 text-xs md:text-sm">
                            {review.reviewerRole}
                        </p>
                    )}
                    {review.company && (
                        <p className="text-gray-400 text-xs md:text-sm">
                            {review.company}
                        </p>
                    )}
                    {review.projectType && (
                        <p className="text-[#f7ab0a] text-xs md:text-sm font-medium">
                            {review.projectType}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
} 