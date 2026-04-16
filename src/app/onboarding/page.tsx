import Link from "next/link";
import { TopNav } from "@/components/TopNav";

export default function OnboardingPage() {
  const projectTypes = [
    { name: "SaaS App", icon: "🚀", desc: "Subscription-based web application" },
    { name: "AI Chatbot", icon: "🤖", desc: "AI-powered conversational interface" },
    { name: "Mobile App", icon: "📱", desc: "iOS and Android application" },
    { name: "E-commerce", icon: "🛒", desc: "Online store with payments" },
    { name: "Internal Tool", icon: "⚙️", desc: "Business productivity tool" },
    { name: "Learning Platform", icon: "🎓", desc: "Course and content platform" },
  ];

  const features = [
    "User Authentication",
    "Database (Firestore)",
    "Hosting & Deployment",
    "AI Integration",
    "Payment Processing",
    "Analytics",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TopNav />
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Step 1 of 3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What do you want to build?</h2>
            <p className="mt-2 text-gray-600">Choose your project type to get personalized templates.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {projectTypes.map((type) => (
              <button
                key={type.name}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">{type.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{type.desc}</p>
              </button>
            ))}
          </div>

          <div className="bg-white border rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What features do you need?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.map((feature) => (
                <label key={feature} className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Choose your tech stack</h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "Firebase", "Tailwind CSS", "TypeScript", "Gemini API"].map((tech) => (
                <button
                  key={tech}
                  className="px-4 py-2 border rounded-full text-sm font-medium hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button className="px-6 py-2 text-gray-500 hover:text-gray-700 font-medium">
              Skip for now
            </button>
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}