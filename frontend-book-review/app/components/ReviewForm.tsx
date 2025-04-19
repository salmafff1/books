'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ bookId }: { bookId: number }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const submitReview = async () => {
    try {
      await axios.post(`http://localhost:8000/books/${bookId}/reviews/`, {
        rating,
        comment
      });
      setRating(5);
      setComment('');
      alert('Review added!');
    } catch (err) {
      console.error(err);
      alert('Failed to submit review.');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Add a Review</h3>
      <div className="space-y-2">
        <input type="number" min="1" max="10" value={rating} onChange={e => setRating(+e.target.value)} className="border p-1 w-20" />
        <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-full border p-2" placeholder="Write your thoughts..." />
        <button onClick={submitReview} className="bg-blue-600 text-white px-4 py-1 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
