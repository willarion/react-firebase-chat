import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/user";

export const SignOut = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};
