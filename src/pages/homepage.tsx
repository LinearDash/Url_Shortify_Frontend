import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { Copy } from 'lucide-react';
import { useGetShortenUrl } from "@/hooks/useGetShortenUrl";


export const Homepage = () => {
  const [url, setUrl] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const { data } = useGetShortenUrl(urlInput);

  if (data && !shortenedUrl) {
    setShortenedUrl(`${window.location.origin}/${data}`);
  }
  const handleSubmit = () => {
    if (url.trim()) {
      setShortenedUrl(""); 
      setUrlInput(url);
      setUrl("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
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
            onKeyPress={handleKeyPress}
          />
          <Button className="sm:ml-0" onClick={handleSubmit}>Shorten</Button>
        </div>
        {shortenedUrl && (
            <div className="bg-white p-4 rounded shadow text-center flex-2 flex-row">
            <p className="text-gray-800">Shortened URL:</p>
            <div className="flex items-center justify-center gap-2">
               <a href={shortenedUrl} className="text-blue-600 underline">{shortenedUrl}</a>
               <button onClick={() => navigator.clipboard.writeText(shortenedUrl)}><Copy className="w-5 h-5 cursor-pointer"  /></button>
            </div>
             
            </div>
        )}
      </div>
    </div>
  );
}