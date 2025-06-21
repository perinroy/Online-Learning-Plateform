import React from "react";
import { useNavigate } from "react-router-dom";

const Interview = () => {
  const interviewData = [
    {
      date: "2024-12-10",
      type: "Technical",
      question: "Explain the difference between var, let, and const.",
      partner: "John Doe",
      feedback: "View Feedback",
    },
    {
      date: "2024-12-11",
      type: "Behavioral",
      question: "Describe a challenging project you worked on.",
      partner: "Jane Smith",
      feedback: "View Feedback",
    },
    {
      date: "2024-12-12",
      type: "Case Study",
      question: "Design a system for a food delivery app.",
      partner: "Alex Johnson",
      feedback: "View Feedback",
    },
    {
      date: "2024-12-13",
      type: "Technical",
      question: "What is the difference between async/await and promises?",
      partner: "Emily Davis",
      feedback: "View Feedback",
    },
  ];

  const upcomingInterviewData = [
    {
      date: "2024-12-15",
      type: "Behavioral",
      question: "How do you handle tight deadlines?",
      partner: "Mark Wilson",
      feedback: "Schedule Feedback",
    },
    {
      date: "2024-12-16",
      type: "Technical",
      question: "Explain closures in JavaScript.",
      partner: "Sarah Lee",
      feedback: "Schedule Feedback",
    },
  ];

  const navigate = useNavigate();

  const InterviewTable = ({ data }) => (
    <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
      <thead className="bg-gray-800 dark:bg-gray-700">
        <tr>
          <th className="border border-gray-300 px-4 py-2 dark:text-gray-200">Date</th>
          <th className="border border-gray-300 px-4 py-2 dark:text-gray-200">Type</th>
          <th className="border border-gray-300 px-4 py-2 dark:text-gray-200">Question</th>
          <th className="border border-gray-300 px-4 py-2 dark:text-gray-200">Partner</th>
          <th className="border border-gray-300 px-4 py-2 dark:text-gray-200"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-600 dark:hover:bg-gray-800 transition"
          >
            <td className="border border-gray-300 px-4 py-2 dark:text-gray-300">
              {item.date}
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:text-gray-300">
              {item.type}
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:text-gray-300">
              {item.question}
            </td>
            <td className="border border-gray-300 px-4 py-2 dark:text-gray-300">
              {item.partner}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-blue-600 dark:text-blue-400 underline">
              <button onClick={() => alert(item.feedback)}>
                {item.feedback}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100">
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-10">
        {/* Left Section */}
        <div className="col-span-1 lg:col-span-6 space-y-6">
          <h1 className="text-4xl font-extrabold text-white">
            Practice mock interviews with peers
          </h1>
          <p className="text-gray-400">
            Join thousands of tech candidates practicing interviews to land
            jobs. Practice real questions over video chat in a collaborative
            environment and get helpful feedback.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
            onClick={() => navigate("/peertopeer")}
          >
            Schedule Practice Session
          </button>
        </div>

        {/* Right Section */}
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full h-80 bg-gray-800 rounded-xl flex items-center justify-center">
            <video className="w-full h-full rounded-xl" controls />
          </div>
        </div>
      </div>

      {/* Upcoming Interviews Section */}
      <div className="p-10 mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Upcoming Interviews
        </h2>
        <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-lg">
          <InterviewTable data={upcomingInterviewData} />
        </div>
      </div>

      {/* Past Interviews Section */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Past Interviews
        </h2>
        <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-lg">
          <InterviewTable data={interviewData} />
        </div>
      </div>
    </div>
  );
};

export default Interview;
