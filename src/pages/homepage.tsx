import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";

export const Homepage = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    console.log(url);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Welcome to URL Shortify</h1>
          <p className="text-gray-600 text-lg">
            Shorten your long URLs into memorable, easy-to-share links instantly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Input 
            placeholder="Enter your long URL" 
            className="flex-1 sm:max-w-md"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button className="sm:ml-0" onClick={handleSubmit}>Shorten</Button>
        </div>
      </div>
    </div>
  );
}