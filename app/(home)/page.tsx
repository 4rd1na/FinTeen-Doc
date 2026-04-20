import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <img src="/images/finteen.png" 
           alt="FinTeen Logo" 
           width={256}
           height={256}
           className="mx-auto mb-8"
      />
      <h1 className="text-5xl font-bold mb-4">Selamat Datang!</h1>
      <h1 className="text-2xl font-bold mb-4">Di Dokumentasi FinTeen | Smart Budgeting for Smarter Future</h1>
      <p>
        You can open{' '}
        <Link href="/id/docs" className="font-medium underline">
          Getting Started
        </Link>{' '}
        and see the documentation.
      </p>
    </div>
  );
}
