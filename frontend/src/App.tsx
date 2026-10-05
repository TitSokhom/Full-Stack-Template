import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5001/api/health")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900">
          English AI Tutor
        </h1>

        <p className="mt-3 text-gray-600">
          V3.1 Real AI Learning Platform
        </p>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Backend Status
          </p>

          <p className="mt-1 font-medium text-green-600">
            {message}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;