import Link from "next/link";
import { TopNav } from "@/components/TopNav";

export default function LandingPage() {
  const features = [
    { icon: "✨", title: "AI Builder", desc: "Gemini-powered workspace for brainstorming, PRDs, and code generation" },
    { icon: "🎨", title: "Design Lab", desc: "Generate UI from prompts, export designs for developers" },
    { icon: "🔍", title: "Research Workspace", desc: "Upload sources, ask grounded questions, generate insights" },
    { icon: "💻", title: "Code Agent", desc: "Connect GitHub repos, automate tasks, generate PRs" },
    { icon: "🔥", title: "Firebase Studio", desc: "Auth, database, hosting, and deployment in one place" },
    { icon: "⚙️", title: "Workflow Lab", desc: "No-code automation to build mini-apps and repeatable flows" },
  ];

  const tools = [
    { name: "Google AI Studio", status: "API Ready", icon: "🤖" },
    { name: "Gemini API", status: "API Ready", icon: "🌟" },
    { name: "NotebookLM", status: "Integration", icon: "📚" },
    { name: "Stitch", status: "UI Generation", icon: "✂️" },
    { name: "Jules", status: "GitHub Agent", icon: "🔄" },
    { name: "Firebase", status: "SDK Ready", icon: "🔥" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now with Gemini 2.0 Integration
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Build Smarter with</span>
              <span className="block text-blue-600">Google's Best Tools</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              One unified workspace to design, research, code, automate, and deploy. 
              Turn ideas into production apps using Google's free-tier-friendly ecosystem.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/auth" className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg shadow-lg hover:shadow-xl transition-all">
                Start Building Free
              </Link>
              <Link href="#features" className="rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 shadow-sm ring-1 ring-inset ring-blue-200 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg transition-all">
                Explore Features
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">No credit card required • Free tier friendly</p>
          </div>
        </section>

        <section id="features" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Operating System for Creation</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Everything you need to go from idea to deployed application.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Integrated Google Tools</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">We support three integration modes based on what's available.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white p-5 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-medium text-gray-900">{tool.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${tool.status === 'API Ready' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {tool.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Who's It For?</h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              {["Solo Founders", "Indie Hackers", "Students", "Non-Tech Creators", "Startup Teams", "Developers"].map((role) => (
                <div key={role} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="font-medium text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build?</h2>
            <p className="text-blue-100 text-lg mb-8">Join thousands of builders creating with Google's best tools.</p>
            <Link href="/auth" className="inline-block rounded-md bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-gray-100 transition-colors">
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Google Dev Ecosystem Hub. Powered by Google's Best Tools.</p>
        <p className="mt-2">Not affiliated with Google. Built for developers who want one place to build.</p>
      </footer>
    </div>
  );
}
