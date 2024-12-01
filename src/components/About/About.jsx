import { Link } from "react-router-dom";
import css from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={css.aboutMe}>
      <div className={css.unicornInfo}>
        <div className={css.textContainer}>
          <h1 className={css.titleAbout}>Welcome to My Portfolio</h1>
          <h2 className={css.unicornName}>
            <strong> &#34;My name is Kateryna Frolova</strong>,
          </h2>
          <p className={css.descriptionText}>
            and I&apos;m passionate about technology and personal development.
            Over the past few years, I&apos;ve transitioned through several
            careers, which has helped me adapt to new challenges and acquire
            valuable skills. Currently, I&apos;m growing in web development and
            building a portfolio that showcases my progress and ambitions.
            <span className={css.unicornName}>&#34;</span>
          </p>
        </div>
        <img
          className={css.unicorn}
          src="https://cdn-icons-png.flaticon.com/512/3468/3468306.png"
          alt="unicorn"
          width="300"
          height="200"
        />
      </div>

      <div className={css.listContainer}>
        <h2 className={css.listTitle}>My Strengths</h2>
        <ul className={css.list}>
          <li className={css.listItem}>
            I have built and deployed several websites, including personal
            projects and collaborations, using tools like React, JavaScript, and
            CSS.
          </li>
          <li className={css.listItem}>
            I am proficient in version control systems like Git – collaborating
            on team projects and managing code efficiently is one of my
            strengths.
          </li>
          <li className={css.listItem}>
            I have a deep understanding of web accessibility and always ensure
            the websites I create are accessible to everyone.
          </li>
          <li className={css.listItem}>
            I am always exploring new frameworks and libraries to broaden my
            skills – currently learning [specific tech or framework].
          </li>
        </ul>
      </div>

      <Link className={css.viewProjects} to="/projects">
        View Projects
      </Link>
    </section>
  );
};

export default About;
