import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../../store/actions/user";
import { auth } from "../../../firebase";
import firebase from "firebase/compat/app";

export const useAuth = (loginInput, registerInput) => {
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(signUp(registerInput));
  };

  const handleLogin = () => {
    const method = () => {
      return auth.signInWithEmailAndPassword(
        loginInput?.email,
        loginInput?.password
      );
    };

    dispatch(signIn(method));
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

  return {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleAnonymousLogin,
  };
};
