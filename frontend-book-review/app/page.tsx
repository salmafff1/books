'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/books/')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">📚 Book List</h1>
      <ul className="space-y-2">
        {books.map(book => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} className="text-blue-600 underline">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
