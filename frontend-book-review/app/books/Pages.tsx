'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';



type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${id}/`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4">{book.description}</p>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold">Reviews</h2>
      <ReviewList bookId={book.id} />
      <ReviewForm bookId={book.id} />
    </div>
  );
}
