import { Link } from "react-router-dom";
import css from "./About.module.css";

const About = () => {
  return (
    <section className={css.aboutMe}>
      <div className={css.unicornInfo}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          &#34;My name is Kateryna, and I&apos;m passionate about technology and
          personal development. Over the past few years, I&apos;ve transitioned
          through several careers, which has helped me adapt to new challenges
          and acquire valuable skills. Currently, I&apos;m growing in web
          development and building a portfolio that showcases my progress and
          ambitions.&#34;
        </p>
      </div>
      <ul>
        <li>
          I have built and deployed several websites, including personal
          projects and collaborations, using tools like React, JavaScript, and
          CSS.
        </li>
        <li>
          I am proficient in version control systems like Git – collaborating on
          team projects and managing code efficiently is one of my strengths.
        </li>
        <li>
          I have a deep understanding of web accessibility and always ensure the
          websites I create are accessible to everyone.
        </li>
        <li>
          I am always exploring new frameworks and libraries to broaden my
          skills – currently learning [specific tech or framework].
        </li>
      </ul>

      <Link to="/projects">View Projects</Link>
    </section>
  );
};

export default About;
