import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-400 text-center py-3 space-x-4 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About Page</Link>
    </header>
  );
};

export default Header;
