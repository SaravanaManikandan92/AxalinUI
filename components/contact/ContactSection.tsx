"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SuccessModal from "../SuccessModal";

export default function ContactSection() {
  const [contactUs, setContactUs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [inValidFields, setInValidFields] = useState<string[]>([]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        ? setInValidFields(inValidFields.filter((item) => item !== name))
        : setInValidFields([...inValidFields, name]);
    }
    if (name === "firstName") {
      value.match(/^[a-zA-Z ]{1,100}$/)
        ? setInValidFields(inValidFields.filter((item) => item !== name))
        : setInValidFields([...inValidFields, name]);
    }
    if (name === "lastName") {
      value.match(/^[a-zA-Z ]{1,100}$/)
        ? setInValidFields(inValidFields.filter((item) => item !== name))
        : setInValidFields([...inValidFields, name]);
    }
    if (name === "company") {
      value.length <= 100
        ? setInValidFields(inValidFields.filter((item) => item !== name))
        : setInValidFields([...inValidFields, name]);
    }
    if ("message" === name) {
      setNumberOfCharacters(value.length);
      value.length <= 255
        ? setInValidFields(inValidFields.filter((item) => item !== name))
        : setInValidFields([...inValidFields, name]);
    }
    setContactUs({
      ...contactUs,
      [name]: value,
    });
  };

  const handleDisplayValidationWarning = (field: string) => {
    if (inValidFields.includes(field)) {
      switch (field) {
        case "firstName":
          return (
            <p className="mt-2 text-xs text-red-500">
              Please enter a valid first name
            </p>
          );
        case "lastName":
          return (
            <p className="mt-2 text-xs text-red-500">
              Please enter a valid last name
            </p>
          );
        case "company":
          return (
            <p className="mt-2 text-xs text-red-500">
              Company name should not exceed more than 100 characters
            </p>
          );
        case "email":
          return (
            <p className="mt-2 text-xs text-red-500">
              Please enter a valid email address
            </p>
          );
        case "message":
          return (
            <p className="mt-2 text-xs text-red-500">
              Message should not exceed more than 255 characters
            </p>
          );
        default:
          return;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: contactUs }),
      });
      if (response.ok) {
        // Reset form fields
        setContactUs({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          company: "",
        });
        setNumberOfCharacters(0);
        setOpen(true);
      } else {
        console.error("Failed to send message:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:pb-12 pb-6">
            <div className=" mx-auto max-w-7xl px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center font-display text-4xl leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-6 max-w-5xl text-center text-xl leading-normal text-gray-600">
                Have a question or ready to start your project? Get in touch
                with our team.
              </p>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                      Get in touch
                    </h2>
                    <p className="mt-4 text-base/7 text-gray-600">
                      Whether you're curious about our services, have a
                      technical question, or ready to start a project, our team
                      is here to help.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-base/7 font-semibold text-gray-900">
                        Email
                      </h3>
                      <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <a
                              href="mailto:info@axalingroup.com"
                              className="font-semibold text-[#08549c]"
                            >
                              info@axalingroup.com
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-base/7 font-semibold text-gray-900">
                        Website
                      </h3>
                      <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <a
                              href="https://axalingroup.com"
                              className="font-semibold text-[#08549c]"
                            >
                              axalingroup.com
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                      Locations
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-base/7 font-semibold text-gray-900">
                        India Office
                      </h3>
                      <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                        <p>#1, Nandanam, 5th Main Road,</p>
                        <p>OMBR Layout, Bangalore-560043</p>
                      </address>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-base/7 font-semibold text-gray-900">
                        USA Office
                      </h3>
                      <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                        <p>#1,Chisholm Trail Rd Ste 450,Round Rock </p>
                        <p>Texas – 78681-5094</p>
                        <p>Phone: +1 (518) 708-8853</p>
                      </address>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-10">
                      <h3 className="text-base/7 font-semibold text-gray-900">
                        Ireland Office
                      </h3>
                      <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                        <p>#6 Fern road, Sandyford, </p>
                        <p>Dublin 18</p>
                        <p>Phone: +353 89 981 1736</p>
                      </address>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3">
                  <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                    Contact Us
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
                  >
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="required block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                          <span className="font-normal text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={contactUs.firstName}
                            onChange={handleChange}
                            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
                          />
                          {handleDisplayValidationWarning("firstName")}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={contactUs.lastName}
                            onChange={handleChange}
                            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
                          />
                          {handleDisplayValidationWarning("lastName")}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactUs.email}
                            onChange={handleChange}
                            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
                          />
                          {handleDisplayValidationWarning("email")}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={contactUs.company}
                            onChange={handleChange}
                            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
                          />
                          {handleDisplayValidationWarning("company")}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={contactUs.message}
                            onChange={handleChange}
                            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
                          />
                          {!inValidFields.includes("message") ? (
                            <p className="mt-2 w-full text-right text-xs">
                              {numberOfCharacters}/255
                            </p>
                          ) : (
                            handleDisplayValidationWarning("message")
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center sm:col-span-2 sm:justify-end">
                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            disabled={
                              inValidFields.length > 0 ||
                              [
                                contactUs.firstName,
                                contactUs.lastName,
                                contactUs.email,
                                contactUs.company,
                                contactUs.message,
                              ].includes("")
                            }
                            className="cursor-pointer inline-flex items-center gap-x-1.5 rounded-md bg-[#08549c] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#08549c] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <PaperAirplaneIcon className="mr-1 h-5 w-5" />
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuccessModal
        open={open}
        onClose={(value) => {
          setOpen(value);
        }}
        title="Message Sent Successfully"
        description="We appreciate that you have taken the time to write us and we'll get back to
        you very soon."
      />
    </>
  );
}
