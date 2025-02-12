import { Heading } from "@aws-amplify/ui-react";
import { Link} from "react-router-dom";

function Instructions() {
  return (
    <div>
      <Heading>Instructions</Heading>
      <nav>
          
          <li>
            <Link to="linux-skills">Linux Skills</Link>
          </li>
          <li>
            <Link to="Kali-Top-10">Kali Top 10</Link>
          </li>
          <li>
            <Link to="windows-defense">Windows Defense</Link>
          </li>
          <li>
            <Link to="purple-team">Purple Team</Link>
          </li>
        
      </nav>
    </div>
    
  );
}
export default Instructions;

