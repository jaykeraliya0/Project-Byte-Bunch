import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow fixed top-0 w-full z-50">
      <nav
        className="relative mx-auto flex max-w-7xl items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="absolute flex items-center">
          <Link
            href="/"
            className="text-cyan-500 hover:text-cyan-600 transition-all duration-300"
          >
            <span className="sr-only">Back to home</span>
            <svg
              className="h-10 w-10"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 254.182 254.182"
              xmlSpace="preserve"
            >
              <g>
                <path d="M211.655,137.102c-4.143,0-7.5,3.358-7.5,7.5v77.064h-41.373v-77.064c0-4.142-3.357-7.5-7.5-7.5H98.903 c-4.143,0-7.5,3.358-7.5,7.5v77.064H50.026v-77.064c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v84.564 c0,4.142,3.357,7.5,7.5,7.5h56.377h56.379h56.373c4.143,0,7.5-3.358,7.5-7.5v-84.564 C219.155,140.46,215.797,137.102,211.655,137.102z M106.403,221.666v-69.564h41.379v69.564H106.403z" />
                <path d="M251.985,139.298L132.389,19.712c-2.928-2.929-7.677-2.928-10.607,0L2.197,139.298c-2.929,2.929-2.929,7.678,0,10.606 c2.93,2.929,7.678,2.929,10.607,0L127.086,35.622l114.293,114.283c1.464,1.464,3.384,2.196,5.303,2.196 c1.919,0,3.839-0.732,5.304-2.197C254.914,146.976,254.914,142.227,251.985,139.298z" />
              </g>
            </svg>
          </Link>
        </div>
        <div className="flex-1 flex justify-around">
          <div className="-m-1.5 p-1.5 cursor-pointer">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <span className="text-cyan-500">Byte</span>{" "}
              <span className="text-amber-500">Bunch</span>
            </h1>
            <span className="sr-only">Byte Bunch</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
