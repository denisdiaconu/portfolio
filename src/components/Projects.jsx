import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/denisdiaconu/fit-wave"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/fit-wave.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Fit Wave</h3>
          <p>
            A responsive fitness landing page built with React and TypeScript,
            featuring smooth scroll and a clean, mobile-friendly design.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Typescript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/denisdiaconu/travista"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/travista-home.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Travista</h3>
          <p>
            A modern travel site built with Next.js and Tailwind CSS, designed
            to showcase destinations with fast, responsive layouts.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Typescript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/denisdiaconu/food-landing-page"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/food-landing-page.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Food Landing Page</h3>
          <p>
            A sleek landing page for a food brand, crafted with Next.js and
            Tailwind CSS for performance and visual appeal.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
        <motion.a
          href="https://github.com/denisdiaconu/product-landing-page"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/product-landing-page.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Product Landing Page</h3>
          <p>
            A modern product landing page built with Next.js and Tailwind CSS,
            featuring a responsive layout and streamlined user interface.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;