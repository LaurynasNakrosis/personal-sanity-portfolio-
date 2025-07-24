"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Review } from '@/types/Review';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

type Props = {
    reviews: Review[];
};

export default function Reviews({ reviews }: Props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="pb-40 pt-12 min-h-screen relative flex flex-col overflow-hidden text-center max-w-full justify-evenly mx-auto items-center z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
        >
            <h3 className="pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl">
                Reviews
            </h3>

            {/* Reviews Section */}
            <div className="w-full max-w-7xl mx-auto px-4 pt-20 pb-8">
                {(!reviews || reviews.length === 0) ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-20">
                        <p className="text-gray-400 text-lg md:text-xl">
                            No reviews yet
                        </p>
                        <p className="text-gray-500 text-sm md:text-base mb-8">
                            Be the first to leave a review!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
                        {reviews.map((review) => (
                            <ReviewCard key={review._id} review={review} />
                        ))}
                    </div>
                )}
            </div>

            {/* Review Form Section */}
            <div className="w-full max-w-4xl mx-auto px-4 mb-20">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-semibold text-white mb-4">
                        Share Your Experience
                    </h4>
                    <p className="text-gray-400 mb-6">
                        Have you worked with me? I&apos;d love to hear about your experience!
                    </p>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-[#f7ab0a] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#f7ab0a]/80 transition-colors duration-200"
                    >
                        {showForm ? 'Hide Review Form' : 'Leave a Review'}
                    </button>
                </div>

                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ReviewForm onClose={() => setShowForm(false)} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
} 