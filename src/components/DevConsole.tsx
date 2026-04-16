"use client";

import { useState } from "react";

interface ConsoleLog {
  id: number;
  type: "info" | "success" | "warning" | "error";
  message: string;
  timestamp: string;
}

export function DevConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<ConsoleLog[]>([
    { id: 1, type: "info", message: "System initialized", timestamp: "10:30:45" },
    { id: 2, type: "success", message: "Firebase connected: dev-hub-saas-prod", timestamp: "10:30:47" },
    { id: 3, type: "info", message: "Gemini API ready", timestamp: "10:30:48" },
    { id: 4, type: "success", message: "GitHub repository linked: saas-dashboard", timestamp: "10:31:02" },
  ]);

  const addLog = (type: ConsoleLog["type"], message: string) => {
    setLogs([...logs, { id: Date.now(), type, message, timestamp: new Date().toLocaleTimeString() }]);
  };

  const clearLogs = () => setLogs([]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-50"
        title="Developer Console"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-80 bg-gray-900 rounded-lg shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <h3 className="text-white font-medium">Developer Console</h3>
            <div className="flex gap-2">
              <button onClick={clearLogs} className="text-xs text-gray-400 hover:text-white">Clear</button>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">×</button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-2 font-mono text-sm">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-2">
                <span className="text-gray-500">[{log.timestamp}]</span>
                <span className={
                  log.type === "success" ? "text-green-400" : 
                  log.type === "warning" ? "text-yellow-400" : 
                  log.type === "error" ? "text-red-400" : "text-blue-400"
                }>
                  {log.type === "success" ? "✓" : log.type === "warning" ? "⚠" : log.type === "error" ? "✕" : "ℹ"}
                </span>
                <span className="text-gray-300">{log.message}</span>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Run command..."
                className="flex-1 bg-gray-800 text-white px-3 py-1 rounded text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const input = e.currentTarget.value;
                    addLog("info", `> ${input}`);
                    setTimeout(() => {
                      if (input.includes("deploy")) addLog("success", "Deployment started...");
                      else if (input.includes("build")) addLog("success", "Build complete!");
                      else if (input.includes("test")) addLog("success", "All tests passed ✓");
                      else addLog("info", "Command executed");
                    }, 500);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}