import { DashboardLayout } from "@/components/DashboardLayout";

export default function AssetsPage() {
  const assets = [
    { name: "logo-dark.svg", type: "image", size: "12 KB", project: "SaaS Dashboard", date: "2 days ago" },
    { name: "hero-image.png", type: "image", size: "2.4 MB", project: "Marketing Site", date: "1 week ago" },
    { name: "api-docs.pdf", type: "document", size: "1.1 MB", project: "SaaS Dashboard", date: "2 weeks ago" },
    { name: "favicon.ico", type: "icon", size: "4 KB", project: "All Projects", date: "1 month ago" },
    { name: "brand-guidelines.pdf", type: "document", size: "5.6 MB", project: "Company", date: "1 month ago" },
  ];

  const folders = [
    { name: "Images", count: 24, icon: "🖼️" },
    { name: "Documents", count: 12, icon: "📄" },
    { name: "Icons", count: 48, icon: "🏷️" },
    { name: "Videos", count: 3, icon: "🎬" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">📦</span> Assets
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage all your project files, images, and documents.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 w-fit">
          + Upload Files
        </button>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Folders</h3>
              <div className="space-y-2">
                {folders.map((folder) => (
                  <button key={folder.name} className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{folder.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{folder.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{folder.count}</span>
                  </button>
                ))}
              </div>
              <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                + New Folder
              </button>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Storage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Used</span>
                    <span className="font-medium">4.2 GB</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">10 GB total storage</p>
              </div>
            </div>
          </div>

      <div className="lg:col-span-3 space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search assets..."
            className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
            <option>All Projects</option>
            <option>SaaS Dashboard</option>
            <option>Marketing Site</option>
          </select>
        </div>

        {/* Mobile: Cards, Desktop: Table */}
        <div className="sm:hidden space-y-3">
          {assets.map((asset) => (
            <div key={asset.name} className="bg-white border rounded-lg p-3 hover:bg-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{asset.type === 'image' ? '🖼️' : asset.type === 'document' ? '📄' : '🏷️'}</span>
                <span className="text-sm font-medium text-gray-900 truncate">{asset.name}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <span>{asset.type}</span>
                <span>{asset.size}</span>
                <span>{asset.project}</span>
                <span>{asset.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block bg-white border rounded-lg overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Size</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Project</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {assets.map((asset) => (
                <tr key={asset.name} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{asset.type === 'image' ? '🖼️' : asset.type === 'document' ? '📄' : '🏷️'}</span>
                      <span className="text-sm font-medium text-gray-900">{asset.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 capitalize">{asset.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{asset.size}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{asset.project}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{asset.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer">
              <div className="text-4xl mb-2">📁</div>
              <p className="text-gray-600 font-medium">Drop files here or click to upload</p>
              <p className="text-sm text-gray-400 mt-1">PNG, JPG, SVG, PDF, GIF up to 50MB</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}