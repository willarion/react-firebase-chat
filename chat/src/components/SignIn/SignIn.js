import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../store/actions/user";
import { TextField } from "@mui/material";
import { useState } from "react";
import { SignInSpan, SignInStyled, SignInWrapper } from "./SignIn.styled";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({});

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const method = () => {
      return auth.signInWithEmailAndPassword(
        userInput?.email,
        userInput?.password
      );
    };

    dispatch(signIn(method));
  };

  const handleRegister = () => {
    dispatch(signUp(userInput));
  };

  const handleGoogleLogin = () => {
    const method = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      return auth.signInWithPopup(provider);
    };

    dispatch(signIn(method));
  };

  const handleAnonymousLogin = () => {
    const method = () => {
      return auth.signInAnonymously();
    };

    dispatch(signIn(method));
  };

  return (
    <SignInStyled>
      <SignInWrapper>
        <TextField
          placeholder="Enter your email..."
          type="text"
          value={userInput?.email || ""}
          name="email"
          onChange={handleChange}
        />
        <TextField
          placeholder="Enter your password..."
          type="text"
          value={userInput?.password || ""}
          name="password"
          onChange={handleChange}
        />
        <Button type="button" onClick={handleLogin}>
          Sign In
        </Button>
        <SignInSpan>Don't have account?</SignInSpan>
        <TextField
          placeholder="Enter your username..."
          type="text"
          value={userInput?.username || ""}
          name="username"
          onChange={handleChange}
        />
        <TextField
          placeholder="Enter your email..."
          type="text"
          value={userInput?.email || ""}
          name="email"
          onChange={handleChange}
        />
        <TextField
          placeholder="Enter your password..."
          type="text"
          value={userInput?.password || ""}
          name="password"
          onChange={handleChange}
        />
        <Button type="button" onClick={handleRegister}>
          Sign Up
        </Button>
      </SignInWrapper>
      <SignInWrapper>
        <SignInSpan>or</SignInSpan>
        <Button type="button" onClick={handleGoogleLogin}>
          Sign In with Google
        </Button>
        <Button type="button" onClick={handleAnonymousLogin}>
          Sign In Anonymously
        </Button>
      </SignInWrapper>
    </SignInStyled>
  );
};
