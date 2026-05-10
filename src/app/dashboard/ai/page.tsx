"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function AIBuilderPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to AI Builder! I'm powered by Gemini and ready to help you with writing code, drafting PRDs, designing database schemas, and more. What would you like to build today?" }
  ]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("Gemini 2.0 Pro");

  const models = [
    { name: "Gemini 2.0 Pro", status: "Latest", icon: "🌟" },
    { name: "Gemini 1.5 Pro", status: "Default", icon: "✨" },
    { name: "Gemini 1.5 Flash", status: "Fast", icon: "⚡" },
    { name: "Gemini 2.0 Flash", status: "Balanced", icon: "🔄" },
  ];

  const quickActions = [
    { label: "Write Code", prompt: "Write a React component for" },
    { label: "Draft PRD", prompt: "Create a Product Requirements Document for" },
    { label: "Design Schema", prompt: "Design a database schema for" },
    { label: "Brainstorm", prompt: "Brainstorm features for" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm processing your request. In a real implementation, this would call the Gemini API to generate a response based on your input: " + input }]);
    }, 1000);
  };

  const handleQuickAction = (prompt: string) => {
    setInput(prompt + " ");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="border-b pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">✨</span> AI Builder
          </h1>
          <p className="text-sm text-gray-500 mt-1">Chat with Gemini, test prompts, and generate code.</p>
        </div>
        <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 w-fit">
          <span className="text-sm text-gray-600">Model:</span>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="text-sm font-medium text-blue-600 bg-transparent border-none focus:outline-none"
          >
            {models.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
          </select>
        </div>
      </div>

        <div className="flex-1 flex mt-4 gap-4 overflow-hidden flex-col md:flex-row">
          <div className="w-64 border-r pr-4 hidden md:block overflow-y-auto">
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 mb-4">
              + New Chat
            </button>
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Models</h3>
            <div className="space-y-1 mb-4">
              {models.map((model) => (
                <button 
                  key={model.name} 
                  onClick={() => setSelectedModel(model.name)}
                  className={`w-full p-2 rounded cursor-pointer text-sm flex items-center justify-between ${selectedModel === model.name ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{model.icon}</span>
                    <span className="truncate">{model.name}</span>
                  </div>
                  {model.status === "Latest" && <span className="text-xs bg-blue-100 px-1.5 py-0.5 rounded text-blue-700">{model.status}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-white border rounded-lg overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0 ${msg.role === 'assistant' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                    {msg.role === 'assistant' ? '✨' : 'U'}
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-sm font-medium text-gray-900 mb-1">{msg.role === 'assistant' ? 'Gemini Builder' : 'You'}</p>
                    <div className={`p-4 rounded-lg border text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-gray-50">
              <div className="flex gap-2 mb-2 flex-wrap">
                {quickActions.map((action) => (
                  <button 
                    key={action.label}
                    onClick={() => handleQuickAction(action.prompt)}
                    className="text-xs bg-white border px-2 py-1 rounded text-gray-600 hover:bg-gray-50"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600 text-xl p-1">+</button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={handleSend}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}