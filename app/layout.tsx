// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { Navigation } from '@/components/Navigation';
// import { Footer } from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Clamat Acoustics - Professional Music Studio in Bangalore',
//   description: 'Professional recording studio, podcast studio, rehearsal space, and music lessons in Bangalore.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navigation />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


//second - adding floating buttons to left from components - FloatingContactButtons.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingContactButtons } from '@/components/FloatingContactButtons'; // 👈 Add this

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clamat Acoustics - Professional Music Studio in Bangalore',
  description: 'Professional recording studio, podcast studio, rehearsal space, and music lessons in Bangalore.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContactButtons /> {/* 👈 Add this here */}
      </body>
    </html>
  );
}
