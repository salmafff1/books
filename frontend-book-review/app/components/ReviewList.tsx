'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Review = {
  id: number;
  rating: number;
  comment: string;
  created_at: string;
};

export default function ReviewList({ bookId }: { bookId: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${bookId}/`)
      .then(res => setReviews(res.data.reviews || []))
      .catch(err => console.error(err));
  }, [bookId]);

  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <ul className="mt-4 space-y-3">
      {reviews.map((review, index) => (
        <li key={index} className="border p-2 rounded">
          <strong>Rating:</strong> {review.rating}/10
          <p>{review.comment}</p>
          <small className="text-gray-500">{new Date(review.created_at).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
}
