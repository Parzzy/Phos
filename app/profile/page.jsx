"use client";
import Image from "next/image";
import Data from "@/components/Data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Profile() {
  // This would normally come from a database/auth
  const mockUserData = {
    name: "Joe Goldberg", // Full name example
    questionsPosted: 15,
    avatarUrl: "/avatarbg.png", // Using the same avatar as in UserAvatar component
  };

  const questions = Data();
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] min-w-[100vw]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-center w-[90%] md:w-[75%] min-h-[50vh] bg-zinc-50 rounded-xl p-2 md:p-16 mt-4 md:mt-0">
        <div className="flex flex-col items-center justify-center w-full md:w-[30%]">
          <Image
            src={mockUserData.avatarUrl}
            alt="Profile Avatar"
            width={128}
            height={128}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            {mockUserData.name}
          </h1>
          <p className="text-zinc-600 mb-4">
            Questions Posted: {mockUserData.questionsPosted}
          </p>
          <button className="p-2 bg-zinc-900 text-zinc-200 rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center w-full md:w-[70%]">
          <h2 className="text-3xl font-bold text-zinc-900 ml-4 md:ml-0">Recent Questions</h2>
          {questions.map((question, index) => (
            <Link
              href={`/question/${question.id}`}
              key={question.id}
              className="border-4 border-transparent hover:border-indigo-500 rounded-2xl transition-colors duration-300 w-full"
            >
              <motion.div
                key={question.id}
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2 p-4 bg-zinc-800 rounded-xl w-full"
              >
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {question.title}
                </h3>
                <p className="text-zinc-400">{question.snippet}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
