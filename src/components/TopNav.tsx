import Link from "next/link";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
            GDE
          </div>
          <span className="text-lg font-bold text-gray-900 hidden sm:inline-block">
            Dev Ecosystem Hub
          </span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md hidden md:block">
          <input
            type="search"
            placeholder="Search projects, templates, or help..."
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-700 p-1">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Link href="/auth" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
          Sign In
        </Link>
        <Link
          href="/onboarding"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
        >
          Get Started
        </Link>
        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
           <div className="h-full w-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs">
             U
           </div>
        </div>
      </div>
    </header>
  );
}
