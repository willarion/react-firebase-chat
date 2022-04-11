import { useState } from "react";

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const useErrors = () => {
  const [errors, setErrors] = useState({
    email: null,
    username: null,
    password: null,
  });

  const handleErrors = (e) => {
    if (e.target.name === "password") {
      if (e.target.value.length < 6) {
        setErrors({ ...errors, password: "Too short!" });
      } else {
        setErrors({ ...errors, password: null });
      }
    }
    if (e.target.name === "username") {
      if (e.target.value.length < 2) {
        setErrors({ ...errors, username: "Too short!" });
      } else {
        setErrors({ ...errors, username: null });
      }
    }
    if (e.target.name === "email") {
      const value = e.target.value;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, email: "Invalid email" });
      } else if (emailPattern.test(value)) {
        setErrors({ ...errors, email: null });
      }
    }
  };

  return { errors, handleErrors };
};
