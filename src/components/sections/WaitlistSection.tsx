'use client';
import React, { useState } from 'react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Send email to admin
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-gray-900 text-white text-center border-t border-gray-800"
      >
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-green-900/20 border border-green-500 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-300">
              You've successfully joined our waitlist. We'll keep you updated on Summit Automation's progress and let you know when early access is available.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-teal-400 hover:text-teal-300 underline"
          >
            Join another email?
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-20 bg-gray-900 text-white text-center border-t border-gray-800"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Join the Waitlist</h2>
        <p className="text-lg text-gray-400">
          Be the first to try Summit Automation. Get updates, early access, and behind-the-scenes content.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 w-full sm:w-80 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? "Joining..." : "Join Now"}
          </button>
        </form>
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;