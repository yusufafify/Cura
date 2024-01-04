// Import required modules
"use client"
// Import necessary modules
import React, { useState } from "react";

// Your Question component
const Question = () => {
  // State to manage the open/closed state of each FAQ item
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  // Function to toggle FAQ item
  const toggleFaq = (index) => {
    setFaqOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4">
        <h1 className="text-5xl font-bold text-blue-800 mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <ul>
          {/* FAQ items */}
          {faqData.map((faq, index) => (
            <li key={index} className="mb-8">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-md"
              >
                <span>{faq.question}</span>
                <span>{faqOpen[index] ? "▲" : "▼"}</span>
              </button>
              {faqOpen[index] && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// FAQ data (replace with your actual data)
const faqData = [
  {
    question:
      "What should I do in case of a medical emergency, and how quickly can I expect assistance in the Emergency Department?",
    answer:
      "In the event of a medical emergency, please dial 911 immediately. For non-life-threatening emergencies, you can visit our Emergency Department directly. Our team of highly trained medical professionals is committed to providing swift and efficient care. However, response times may vary based on the severity of cases and the current patient load. Rest assured that our priority is to attend to patients promptly and prioritize critical situations.",
  },
  {
    question:
      "How can I schedule a radiology appointment, and what preparation is required for diagnostic tests?",
    answer:
      "To schedule a radiology appointment, you can either call our Radiology Department directly or use our online appointment booking system on the Cura Hospital website. Before certain diagnostic tests, specific preparations may be necessary, such as fasting or avoiding certain medications. Detailed instructions will be provided when scheduling your appointment. If you have any concerns or questions about your upcoming radiology procedure, feel free to contact our Radiology Department for personalized guidance.",
  },
  {
    question:
      "Can I access my medical records and radiology reports online, and how do I ensure the confidentiality of my health information?",
    answer:
      "Yes, Cura Hospital provides a secure online portal where patients can access their medical records and radiology reports. To ensure the confidentiality of your health information, we implement strict security measures, including encryption and authentication protocols. Only authorized personnel and you, as the patient, have access to your records. It's crucial to keep your login credentials confidential and log out of the portal after each session. If you have any privacy concerns or need assistance navigating the online portal, our dedicated support team is available to assist you.",
  },
];

export default Question;
