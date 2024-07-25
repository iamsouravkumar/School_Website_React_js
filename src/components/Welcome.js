import { ReactTyped } from "react-typed";

const Welcome = () => {
  return (
    <div>
      <h1  style={{backgroundColor:"rgba(255, 127, 80, 0.884)", color:"black", fontSize:"1.2rem", fontFamily:"cursive", textAlign:"center", width:"100%", padding:"1rem 0"}}>
        Welcome to{" "}
        <ReactTyped strings={["Springdale Public School, where we nurture young minds for a brighter future."]} typeSpeed={100} backSpeed={80} loop />
      </h1>
    </div>
  );
};

export default Welcome;