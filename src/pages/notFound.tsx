
import { Link } from "react-router-dom";
import { Link2, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <Link2 className="w-20 h-20 text-slate-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-blue-600">404</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Page Not Found
                </h1>

                <p className="text-lg text-slate-600 mb-8">
                    Oops! Looks like this link is broken. The page you're looking for doesn't exist.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/">
                        <Button className="w-full sm:w-auto flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                </div>

                <p className="mt-12 text-sm text-slate-500">
                    Lost? Try creating a new shortened URL from the homepage.
                </p>
            </div>
        </div>
    );
};
