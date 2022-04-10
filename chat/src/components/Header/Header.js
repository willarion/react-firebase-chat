import { SignOut } from "../SignOut";
import { SignIn } from "../SignIn";
import { HeaderGreeting, HeaderStyled } from "./Header.styled";
import { useSelector } from "react-redux";

export const Header = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <HeaderStyled>
      {currentUser.loggedIn ? (
        <>
          <HeaderGreeting>Greetings, {currentUser.username}!</HeaderGreeting>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </HeaderStyled>
  );
};
