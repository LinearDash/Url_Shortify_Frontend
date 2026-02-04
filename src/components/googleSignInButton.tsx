import { Button } from "./ui/button";

import { FcGoogle } from "react-icons/fc"; 

const handleGoogleSignIn = () => {
  window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`; 
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