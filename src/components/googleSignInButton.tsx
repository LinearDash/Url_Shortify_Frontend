import { Button } from "./ui/button";

import { FcGoogle } from "react-icons/fc"; // Uncomment if using react-icons

const handleGoogleSignIn = () => {
  window.location.href = "http://localhost:3000/api/auth/google"; // Change to your actual endpoint if needed
};

export const GoogleSignInButton = () => (
  <Button
    variant="outline"
    className="flex items-center gap-2 px-4 py-2 shadow"
    onClick={handleGoogleSignIn}
  >
    <FcGoogle className="w-5 h-5" />
    Sign in with Google
  </Button>
);

export default GoogleSignInButton;