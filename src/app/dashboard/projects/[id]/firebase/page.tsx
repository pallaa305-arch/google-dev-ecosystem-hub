import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { use } from "react";

export default function FirebaseWorkspace({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const tabs = [
    { name: 'Overview', href: `/dashboard/projects/${id}`, current: false },
    { name: 'AI Builder', href: `/dashboard/projects/${id}/ai`, current: false },
    { name: 'Design', href: `/dashboard/projects/${id}/design`, current: false },
    { name: 'Firebase', href: `/dashboard/projects/${id}/firebase`, current: true },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-[calc(100vh-10rem)]">
        <div>
          <div className="border-b pb-2 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-orange-500">🔥</span> Firebase Workspace
            </h1>
            <div className="flex items-center gap-2">
               <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                 Connected: dev-hub-saas-prod
               </div>
            </div>
          </div>
          <nav className="-mb-px flex space-x-8 border-b" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  ${tab.current ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                  whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium
                `}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Auth Card */}
          <div className="border rounded-lg bg-white p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔐</span>
                <h3 className="font-medium text-gray-900">Authentication</h3>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-medium">Active</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Email/Password and Google Sign-in enabled.</p>
            <div className="space-y-2">
              <div className="text-xs flex justify-between border-b pb-1">
                <span className="text-gray-500">Total Users</span>
                <span className="font-medium">1,204</span>
              </div>
              <div className="text-xs flex justify-between border-b pb-1">
                <span className="text-gray-500">Sign-ins (30d)</span>
                <span className="font-medium">4,592</span>
              </div>
            </div>
            <button className="mt-4 w-full text-xs font-medium text-blue-600 hover:bg-blue-50 py-1.5 rounded border border-blue-100">
              Manage Auth Settings
            </button>
          </div>

          {/* Firestore Card */}
          <div className="border rounded-lg bg-white p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🗄️</span>
                <h3 className="font-medium text-gray-900">Firestore DB</h3>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-medium">Active</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">3 main collections schema active.</p>
            <div className="space-y-2">
              <div className="text-xs flex justify-between border-b pb-1">
                <span className="text-gray-500">Collections</span>
                <span className="font-medium">users, metrics, logs</span>
              </div>
              <div className="text-xs flex justify-between border-b pb-1">
                <span className="text-gray-500">Reads (Today)</span>
                <span className="font-medium">12.4k / 50k</span>
              </div>
            </div>
            <button className="mt-4 w-full text-xs font-medium text-blue-600 hover:bg-blue-50 py-1.5 rounded border border-blue-100">
              Generate Schema with AI
            </button>
          </div>

          {/* Hosting Card */}
          <div className="border rounded-lg bg-white p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <h3 className="font-medium text-gray-900">Hosting</h3>
              </div>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-medium">Setup Needed</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Deploy your Next.js frontend to Firebase Hosting.</p>
            <div className="bg-gray-50 rounded p-3 text-xs text-gray-600 font-mono mb-4">
              firebase init hosting<br/>
              firebase deploy
            </div>
            <button className="w-full text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 py-1.5 rounded shadow-sm">
              Deploy Now
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
