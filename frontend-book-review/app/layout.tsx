// app/layout.tsx

import { ReactNode } from "react";
import "./globals.css"; // Make sure the CSS path is correct

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
