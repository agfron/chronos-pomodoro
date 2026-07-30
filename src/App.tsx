import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";

export default function App() {
  console.log("Oi");
  return ( 
    <>
      <Heading />
      <p>
        Todo texto tem que ter alguns aspectos formais...
      </p>
    </>
  );
}
