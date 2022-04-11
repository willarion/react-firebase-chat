import { TextField } from "@mui/material";
import { SignInFormStyled } from "./SignInForm.styled";
import { useErrors } from "./hooks";

export const SignInForm = ({ userInput, onChange, isRegistered }) => {
  const { errors, handleErrors } = useErrors();

  const handleChange = (e) => {
    onChange(e);
    handleErrors(e);
  };

  return (
    <SignInFormStyled>
      {!isRegistered && (
        <TextField
          error={!!errors.username}
          placeholder="Enter your username..."
          type="text"
          value={userInput?.username || ""}
          name="username"
          onChange={handleChange}
          helperText={errors.username && errors.username}
        />
      )}
      <TextField
        error={!!errors.email}
        placeholder="Enter your email..."
        type="email"
        value={userInput?.email || ""}
        name="email"
        onChange={handleChange}
        helperText={errors.email && errors.email}
      />
      <TextField
        error={!!errors.password}
        placeholder="Enter your password..."
        type="password"
        value={userInput?.password || ""}
        name="password"
        onChange={handleChange}
        helperText={errors.password && errors.password}
      />
    </SignInFormStyled>
  );
};
