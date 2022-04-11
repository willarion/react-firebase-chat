import { useCallback, useState } from "react";

export const useSignInForm = () => {
  const [userInput, setUserInput] = useState({});
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleChange = useCallback(
    (e) => {
      setUserInput({ ...userInput, [e.target.name]: e.target.value });
    },
    [userInput]
  );

  return { userInput, handleChange, toggleShowSignUp, showSignUp };
};
