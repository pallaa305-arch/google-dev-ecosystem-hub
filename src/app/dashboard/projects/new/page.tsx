import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function NewProjectPage() {
  const projectTypes = [
    { name: "SaaS App", icon: "🚀", popular: true },
    { name: "AI Chatbot", icon: "🤖", popular: false },
    { name: "Mobile App", icon: "📱", popular: false },
    { name: "E-commerce", icon: "🛒", popular: false },
    { name: "Internal Tool", icon: "⚙️", popular: false },
    { name: "Portfolio", icon: "🎨", popular: false },
  ];

  const features = [
    { name: "User Auth", icon: "🔐", included: true },
    { name: "Database", icon: "🗄️", included: true },
    { name: "Hosting", icon: "🌐", included: true },
    { name: "AI Features", icon: "✨", included: false },
    { name: "Payments", icon: "💳", included: false },
    { name: "Analytics", icon: "📊", included: false },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link href="/dashboard/projects" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
          <p className="text-gray-500 mt-1">Start building with our guided project creation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">1. Project Type</h2>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.name}
                    className={`p-4 border rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-all ${type.popular ? 'border-blue-500 bg-blue-50' : ''}`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-medium text-gray-900">{type.name}</div>
                    {type.popular && <span className="text-xs text-blue-600">Most Popular</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">2. Project Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                  <input type="text" placeholder="My Awesome Project" className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea placeholder="What does your project do?" rows={3} className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">3. Features</h2>
              <div className="space-y-3">
                {features.map((feature) => (
                  <label key={feature.name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                    </div>
                    <input type="checkbox" defaultChecked={feature.included} className="rounded text-blue-600 focus:ring-blue-500" />
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">4. Integration</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Firebase</div>
                      <div className="text-xs text-gray-500">Auth, Database, Hosting</div>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Recommended</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg opacity-60">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🟢</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Supabase</div>
                      <div className="text-xs text-gray-500">PostgreSQL, Auth</div>
                    </div>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">Optional</span>
                </div>
              </div>
            </div>

            <Link href="/dashboard" className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700">
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
