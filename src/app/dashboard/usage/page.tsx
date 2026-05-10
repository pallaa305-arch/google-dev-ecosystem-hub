import { DashboardLayout } from "@/components/DashboardLayout";

export default function UsagePage() {
  const usageData = [
    { name: "AI Builder (Gemini)", used: "45,000", limit: "100,000", percent: 45, icon: "✨" },
    { name: "Code Agent Tasks", used: "123", limit: "500", percent: 24, icon: "💻" },
    { name: "Research Queries", used: "890", limit: "2,000", percent: 44, icon: "🔍" },
    { name: "Design Generations", used: "56", limit: "200", percent: 28, icon: "🎨" },
    { name: "Workflow Executions", used: "2,340", limit: "5,000", percent: 46, icon: "⚙️" },
  ];

  const history = [
    { date: "Today", gemini: "450", research: "45", designs: "8", workflows: "120" },
    { date: "Yesterday", gemini: "520", research: "38", designs: "12", workflows: "95" },
    { date: "Mar 14", gemini: "380", research: "52", designs: "5", workflows: "88" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">📊</span> Usage & Quotas
          </h1>
          <p className="text-sm text-gray-500 mt-1">Monitor your API usage and plan limits.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 w-fit">
          Upgrade Plan
        </button>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Current Usage</h3>
              <div className="space-y-4">
                {usageData.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.used} / {item.limit}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.percent > 80 ? 'bg-red-500' : item.percent > 60 ? 'bg-yellow-500' : 'bg-blue-600'}`} 
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-4">Usage History</h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[500px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">✨ Gemini</th>
                <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">🔍 Research</th>
                <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">🎨 Designs</th>
                <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">⚙️ Workflows</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {history.map((row) => (
                <tr key={row.date}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{row.gemini}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{row.research}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{row.designs}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{row.workflows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-5">
              <h3 className="font-semibold text-blue-900 mb-2">Free Plan</h3>
              <p className="text-sm text-blue-800 mb-4">Great for getting started!</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Used</span>
                  <span className="font-medium text-blue-900">52%</span>
                </div>
                <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "52%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Projects</span>
                  <span className="font-medium text-gray-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total API Calls</span>
                  <span className="font-medium text-gray-900">48,759</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Days Active</span>
                  <span className="font-medium text-gray-900">14</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-green-800">Upgrade to Pro for higher limits, priority support, and advanced features.</p>
              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                View Pro Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}