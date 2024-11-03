"use client";
import Data from "../../components/Data";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Questions() {
  const data = Data();

  return (
    <div className="min-h-screen mx-4 md:mx-40 md:mb-16">
      <header className="flex flex-col gap-2 ml-4 mt-4">
        <h1 className="text-4xl font-bold">All Questions</h1>
        <small className="text-zinc-500">
          Browse all available questions and their solutions
        </small>
      </header>
      <section className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-4 w-full">
          {data.map((question) => (
            <Link
              href={`/question/${question.id}`}
              key={question.id}
              className="border-4 border-transparent hover:border-indigo-500 rounded-2xl transition-colors duration-300"
            >
              <motion.div className="flex flex-col gap-2 p-4 bg-zinc-800 rounded-xl"
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-zinc-200">
                  {question.title}
                </h3>
                <p className="text-zinc-400">Snippet: {question.snippet}</p>
                <p className="text-zinc-400">Description: {question.description}</p>
                {question.solved && <p className="text-zinc-400">Solution: {question.solution}</p>}
                <small className="text-zinc-500">Date: {question.date}</small>
                <div className="flex justify-end">
                  <small
                    className={`${
                      question.solved ? "bg-green-500" : "bg-red-500"
                    } p-1 rounded-md text-zinc-200 w-fit`}
                  >
                    Solved: {question.solved ? "Yes" : "No"}
                  </small>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
