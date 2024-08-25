// src/app/page.js
import Spreadsheet from '../components/Spreadsheet';  // Relative path to Spreadsheet.js

export const metadata = {
  title: 'Spreadsheet App',
  description: 'Spreadsheet with advanced features using Next.js, Zustand, and Tailwind CSS',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Spreadsheet />
    </main>
  );
}
