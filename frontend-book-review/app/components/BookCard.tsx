'use client';

import React from 'react';
import Link from 'next/link';

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
};

type BookCardProps = {
  book: Book;
  onClick?: () => void; // Optional: for handling click actions
};

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-4 border rounded-2xl shadow-md hover:shadow-xl transition duration-200 bg-white cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
      <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
      <p className="text-gray-700 text-sm">
        {book.description.length > 150
          ? `${book.description.slice(0, 150)}...`
          : book.description}
      </p>
      <Link href={`/books/${book.id}`} className="text-blue-500 text-sm mt-2 block">
        Read more...
      </Link>
    </div>
  );
};

export default BookCard;
