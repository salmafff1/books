'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/books/')
      .then((res) => setBooks(res.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>📚 Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
