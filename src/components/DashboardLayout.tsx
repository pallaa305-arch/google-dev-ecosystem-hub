import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-white m-4 rounded-lg shadow-sm border border-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
