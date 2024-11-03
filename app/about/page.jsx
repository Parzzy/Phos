"use client";
import { motion } from "framer-motion";
export default function About() {
  const headerStyle = "text-3xl font-bold mb-4";
  const paragraphStyle = "text-zinc-800 mb-4";
  const sectionStyle = "mb-8";

  return (
    <div className="min-h-screen mx-4 md:mx-20 md:mb-16 py-8">
      <motion.header 
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold mt-4">About Us</h1>
        <small className="text-zinc-500">
          Learn more about our platform and mission
        </small>
      </motion.header>

      <motion.section 
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={sectionStyle}>
        <h2 className={headerStyle}>Our Mission</h2>
        <p className={paragraphStyle}>
          We are dedicated to creating a collaborative space for smartphone users to share, solve, and learn from common device issues. Our platform aims to foster a community where people of all technical levels can find solutions to their smartphone problems and help others along the way.
        </p>
      </motion.section>

      <motion.section 
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={sectionStyle}>
        <h2 className={headerStyle}>What We Offer</h2>
        <ul className="list-disc list-inside text-zinc-800 mb-4">
          <li>A curated collection of smartphone-related questions and solutions</li>
          <li>User-friendly interface for browsing and searching common issues</li>
          <li>Ability to ask your own questions and share solutions</li>
          <li>Community-driven problem-solving and discussions</li>
        </ul>
      </motion.section>

      <motion.section 
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={sectionStyle}>
        <h2 className={headerStyle}>Our Approach</h2>
        <p className={paragraphStyle}>
          Our platform brings together smartphone users, tech enthusiasts, and experts to address a wide range of device issues. From software glitches to hardware problems, we cover various brands and models to ensure comprehensive support for our community.
        </p>
      </motion.section>

      <motion.section 
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={sectionStyle}>
        <h2 className={headerStyle}>Join Our Community</h2>
        <p className={paragraphStyle}>
          Whether you&apos;re a tech-savvy individual or someone who struggles with smartphone basics, there&apos;s a place for you here. Sign up today to start exploring solutions, sharing your knowledge, and connecting with fellow smartphone users from around the world.
        </p>
      </motion.section>
    </div>
  );
}
