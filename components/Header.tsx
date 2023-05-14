import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow fixed top-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex-1 flex justify-around">
          <Link href="/" className="-m-1.5 p-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <span className="text-cyan-500">Byte</span>{" "}
              <span className="text-amber-500">Bunch</span>
            </h1>
            <span className="sr-only">Byte Bunch</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
