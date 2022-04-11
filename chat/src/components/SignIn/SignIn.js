import Button from "@mui/material/Button";
import {
  SignInActionSpan,
  SignInHeader,
  SignInSpan,
  SignInStyled,
  SignInWrapper,
} from "./SignIn.styled";
import { SignInForm } from "./components/SignInForm";
import { useSignInForm } from "./components/SignInForm/hooks";
import { useAuth } from "./hooks";

export const SignIn = () => {
  const { userInput: loginInput, handleChange: loginDataChange } =
    useSignInForm();
  const {
    userInput: registerInput,
    handleChange: registerDataChange,
    toggleShowSignUp,
    showSignUp,
  } = useSignInForm();

  const {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleAnonymousLogin,
  } = useAuth(loginInput, registerInput);

  return (
    <SignInStyled>
      <SignInHeader>Hello, Stranger! </SignInHeader>
      <SignInSpan>welcome to the Chat:</SignInSpan>
      <SignInWrapper>
        {showSignUp ? (
          <>
            <SignInForm
              isRegistered={false}
              userInput={registerInput}
              onChange={registerDataChange}
            />
            <Button type="button" onClick={handleRegister}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <SignInForm
              isRegistered={true}
              userInput={loginInput}
              onChange={loginDataChange}
            />
            <Button type="button" onClick={handleLogin}>
              Sign In
            </Button>
          </>
        )}
        {!showSignUp ? (
          <>
            <SignInSpan>
              Don't have account?{" "}
              <SignInActionSpan onClick={toggleShowSignUp}>
                Sign Up
              </SignInActionSpan>
            </SignInSpan>
          </>
        ) : (
          <>
            <SignInSpan>
              Already have account?{" "}
              <SignInActionSpan onClick={toggleShowSignUp}>
                Sign In
              </SignInActionSpan>
            </SignInSpan>
          </>
        )}
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
