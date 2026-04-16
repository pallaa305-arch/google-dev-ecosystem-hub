"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ResearchPage() {
  const [sources, setSources] = useState([
    { name: "Product Requirements.pdf", type: "PDF", size: "2.4 MB", icon: "📄" },
    { name: "Market Research 2024.docx", type: "DOC", size: "1.1 MB", icon: "📝" },
    { name: "Competitor Analysis.xlsx", type: "XLS", size: "856 KB", icon: "📊" },
  ]);
  const [question, setQuestion] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const recentResearch = [
    { title: "AI Market Trends Summary", date: "2 hours ago" },
    { title: "Competitor Feature Analysis", date: "Yesterday" },
    { title: "User Research Findings", date: "3 days ago" },
  ];

  const handleAsk = () => {
    if (!question.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setQuestion("");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🔍</span> Research Workspace
          </h1>
          <p className="text-sm text-gray-500 mt-1">Upload sources, ask grounded questions, and generate insights.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="text-4xl mb-2">📁</div>
              <p className="text-gray-600 font-medium">Drop files here or click to upload</p>
              <p className="text-sm text-gray-400 mt-1">PDF, DOC, TXT, URLs supported</p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Ask Research Questions</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What are the key trends in the AI market?"
                  className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={handleAsk}
                  disabled={isProcessing}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                >
                  {isProcessing ? "Processing..." : "Ask"}
                </button>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 hover:bg-gray-200">Summarize</button>
                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 hover:bg-gray-200">Generate FAQ</button>
                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 hover:bg-gray-200">Create Brief</button>
                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 hover:bg-gray-200">Extract Insights</button>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Recent Research</h3>
              <div className="space-y-2">
                {recentResearch.map((item, i) => (
                  <div key={i} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Uploaded Sources ({sources.length})</h3>
              <div className="space-y-2">
                {sources.map((source, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{source.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[150px]">{source.name}</p>
                        <p className="text-xs text-gray-400">{source.type} • {source.size}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                + Add More Sources
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">💡 Research Tips</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Upload PDF reports for best results</li>
                <li>• Add URLs for web content analysis</li>
                <li>• Ask specific questions for better answers</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Integration Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Google AI Studio</span>
                  <span className="text-green-600 font-medium">✓ Connected</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Gemini API</span>
                  <span className="text-green-600 font-medium">✓ Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}