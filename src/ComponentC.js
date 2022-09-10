import { Link } from "react-router-dom";

const ComponentC = () => {
  return (
    <div>
      ComponentC
       <Link to="/componentb" >ComponentBへ移動</Link>
    </div>
  );
};

export default ComponentC