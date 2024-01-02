"use client";
import React, { useState } from "react";

const Contact = () => {
  // State to manage the open/closed state of each FAQ item
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const toggleFaq = (index) => {
    setFaqOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <div className="flex">
      <div className="w-full max-w-sm mx-auto transition-transform transform hover:-translate-y-2 pt-12 ml-20">
        {/* The card styling */}
        <div className="bg-white shadow-md rounded-md p-6 pt-8 hover:shadow-blue transition-shadow">
          <img
            className="mx-auto h-20 w-auto"
            src="https://www.shutterstock.com/image-vector/medicine-logo-600nw-715548160.jpg"
            alt="Your Company"
          />
          <h2 className="mt-4 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact us
          </h2>

          <form className="space-y-6" action="#" method="POST">
            {/* ... (your contact form fields) */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 mt-2"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex-1 ml-4">
        <h3 className="text-xl font-bold mb-5">Frequently Asked Questions</h3>
        <ul>
          <li className="mb-2">
            <button
              onClick={() => toggleFaq(0)}
              className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-md"
            >
              <span>
                What should I do in case of a medical emergency, and how quickly
                can I expect assistance in the Emergency Department?
              </span>
              <span>{faqOpen[0] ? "▲" : "▼"}</span>
            </button>
            {faqOpen[0] && (
              <p className="ml-4 text-gray-700">
                In the event of a medical emergency, please dial 911
                immediately. For non-life-threatening emergencies, you can visit
                our Emergency Department directly. Our team of highly trained
                medical professionals is committed to providing swift and
                efficient care. However, response times may vary based on the
                severity of cases and the current patient load. Rest assured
                that our priority is to attend to patients promptly and
                prioritize critical situations.
              </p>
            )}
          </li>

          <li className="mb-2">
            <button
              onClick={() => toggleFaq(1)}
              className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-md"
            >
              <span>
                How can I schedule a radiology appointment, and what preparation
                is required for diagnostic tests?
              </span>
              <span>{faqOpen[1] ? "▲" : "▼"}</span>
            </button>
            {faqOpen[1] && (
              <p className="ml-4 text-gray-700">
                {" "}
                To schedule a radiology appointment, you can either call our
                Radiology Department directly or use our online appointment
                booking system on the Cura Hospital website. Before certain
                diagnostic tests, specific preparations may be necessary, such
                as fasting or avoiding certain medications. Detailed
                instructions will be provided when scheduling your appointment.
                If you have any concerns or questions about your upcoming
                radiology procedure, feel free to contact our Radiology
                Department for personalized guidance.
              </p>
            )}
          </li>

          <li className="mb-2">
            <button
              onClick={() => toggleFaq(2)}
              className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-md"
            >
              <span>
                Can I access my medical records and radiology reports online,
                and how do I ensure the confidentiality of my health
                information?
              </span>
              <span>{faqOpen[2] ? "▲" : "▼"}</span>
            </button>
            {faqOpen[2] && (
              <p className="ml-4 text-gray-700">
                Yes, Cura Hospital provides a secure online portal where
                patients can access their medical records and radiology reports.
                To ensure the confidentiality of your health information, we
                implement strict security measures, including encryption and
                authentication protocols. Only authorized personnel and you, as
                the patient, have access to your records. It's crucial to keep
                your login credentials confidential and log out of the portal
                after each session. If you have any privacy concerns or need
                assistance navigating the online portal, our dedicated support
                team is available to assist you.
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
