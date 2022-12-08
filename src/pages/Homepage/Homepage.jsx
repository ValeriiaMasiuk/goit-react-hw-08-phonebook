import { ImWink } from "react-icons/im";
import { Home } from "./Homepage.styled";

const Homepage = () => {
  return (
    <Home>
      <h1>
        Welcome! Here you can create your phonebook! Please, login to use all the benefits <ImWink/>
      </h1>
    </Home>
  );
}

export default Homepage