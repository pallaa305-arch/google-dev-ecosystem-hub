import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function HelpPage() {
  const categories = [
    { name: "Getting Started", icon: "🚀", articles: 12, desc: "Learn the basics and get up to speed" },
    { name: "AI Builder", icon: "✨", articles: 8, desc: "Learn about Gemini and AI features" },
    { name: "Firebase Setup", icon: "🔥", articles: 10, desc: "Auth, database, and hosting guides" },
    { name: "Code Agent", icon: "💻", articles: 6, desc: "GitHub integration and automation" },
    { name: "Billing & Pricing", icon: "💳", articles: 5, desc: "Plans, quotas, and payments" },
    { name: "Account Settings", icon: "⚙️", articles: 7, desc: "Profile, security, and preferences" },
  ];

  const popularArticles = [
    { title: "How to connect your GitHub repository", views: "2.4k" },
    { title: "Setting up Firebase authentication", views: "1.8k" },
    { title: "Using Gemini for code generation", views: "1.5k" },
    { title: "Deploying your first app", views: "1.2k" },
    { title: "Understanding API quotas", views: "980" },
  ];

  const faqs = [
    { q: "Is this free to use?", a: "Yes! We have a generous free tier with no credit card required." },
    { q: "Do I need a Google account?", a: "Yes, Google Sign-In is required to authenticate and access Google tools." },
    { q: "Can I connect my own GitHub repo?", a: "Absolutely! Go to Code Agent and click 'Connect Repository'." },
    { q: "How does billing work?", a: "We offer free and paid plans. Upgrade anytime for higher quotas." },
    { q: "Is my data secure?", a: "Yes, we use industry-standard encryption and never share your data." },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="text-center py-8 bg-gradient-to-b from-blue-50 to-white rounded-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Help Center</h1>
          <p className="text-gray-600 mb-6">Find answers, learn new features, and get the most out of the platform.</p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="search"
              placeholder="Search for help articles..."
              className="w-full border rounded-lg px-4 py-3 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} href="#" className="bg-white border rounded-xl p-5 hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl">{cat.icon}</div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{cat.articles} articles</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Popular Articles</h2>
            <div className="space-y-3">
              {popularArticles.map((article) => (
                <Link key={article.title} href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 hover:text-blue-600">{article.title}</span>
                  <span className="text-xs text-gray-400">{article.views} views</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none p-2 rounded hover:bg-gray-50">
                    <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-2 pl-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-blue-900 mb-2">Still need help?</h3>
          <p className="text-sm text-blue-800 mb-4">Our team is here to help you succeed.</p>
          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              Contact Support
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg text-sm font-medium hover:bg-blue-50">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}