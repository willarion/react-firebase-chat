import Button from "@mui/material/Button";
import { auth } from "../../firebase";

export const SignOut = () => {
  const handleSignOut = () => auth.signOut();

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};
