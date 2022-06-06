import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      About
      <h2>About Me</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
