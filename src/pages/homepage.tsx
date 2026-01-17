import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { Copy } from 'lucide-react';
import { useGetShortenUrl } from "@/hooks/useGetShortenUrl";
import toast from "react-hot-toast";

export const Homepage = () => {
  const [url, setUrl] = useState("");
  const { mutate, data, isPending } = useGetShortenUrl();

  const shortenedUrl = data ? `${window.location.origin}/${data}` : '';

  const handleSubmit = () => {
    if (url.trim()) {
      mutate(url, {
        onSuccess: () => {
          toast.success("URL shortened successfully!");
          setUrl("");
        },
        onError: (err: Error) => {
          toast.error(err.message || "Failed to shorten URL. Please try again.");
        }
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      toast.success("Shortened URL copied to clipboard!");
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
            disabled={isPending}
          />
          <Button 
            className="sm:ml-0" 
            onClick={handleSubmit}
            disabled={isPending || !url.trim()}
          >
            {isPending ? "Shortening..." : "Shorten"}
          </Button>
        </div>
        {isPending && (
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              <p className="text-gray-800">Shortening your URL...</p>
            </div>
          </div>
        )}
        {shortenedUrl && (
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-gray-800 mb-2">Shortened URL:</p>
            <div className="flex items-center justify-center gap-2">
              <a 
                href={shortenedUrl} 
                className="text-blue-600 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortenedUrl}
              </a>
              <button 
                onClick={handleCopy}
                className="hover:opacity-70 transition-opacity"
              >
                <Copy className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}