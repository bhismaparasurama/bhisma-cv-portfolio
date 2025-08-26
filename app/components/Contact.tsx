"use client";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Pesan berhasil dikirim!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Gagal mengirim pesan.");
    }
  };
  return (
    <div
      id="contact"
      className="scroll-mt-[180px] px-40 flex flex-col mt-60 gap-10 max-[1200px]:px-4 max-[600px]:mt-20"
    >
      <div>
        <h1 className="text-5xl font-semibold text-center max-[600px]:text-3xl">
          CONTACT ME
        </h1>
      </div>
      <div className="flex gap-10 w-full max-[1000px]:flex-col">
        <div className="w-[40%] p-8 flex flex-col gap-10 bg-gray-100 text-black rounded-3xl max-[1000px]:w-full max-[500px]:p-4">
          <div className="flex flex-col gap-2 pb-2 border-b border-b-gray-700 w-full">
            <h1 className="text-2xl font-semibold max-[1000px]:text-xl">
              Addreas
            </h1>
            <span className="text-gray-900 max-[500px]:text-sm">
              Celuk Raya Street, No 7
            </span>
            <span className="text-gray-900 max-[500px]:text-sm">
              Celuk Village, Sukawati, Gianyar
            </span>
          </div>
          <div className="flex flex-col gap-2 pb-2 border-b border-b-gray-700 w-full">
            <h1 className="text-2xl font-semibold max-[1000px]:text-xl">
              Contact
            </h1>
            <span className="text-gray-900 max-[500px]:text-sm">
              Phone : +6281529575490
            </span>
            <span className="text-gray-900 max-[500px]:text-sm">
              Email : bhismaparasurama2023@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-2 pb-2 border-b border-b-gray-700 w-full">
            <h1 className="text-2xl font-semibold max-[1000px]:text-xl">
              Current Focus
            </h1>
            <span className="text-gray-900 max-[500px]:text-sm">
              Currently learning advanced NextJs
            </span>
            <span className="text-gray-900 max-[500px]:text-sm">
              Exploring UI/UX design
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-semibold max-[1000px]:text-xl">
              Stay Conected
            </h1>
            <div className="flex gap-10 items-center max-[1350px]:gap-2">
              <a href="https://github.com/bhismaparasurama">
                <i className="bxl bxl bx-github text-2xl text-white bg-blue-500 p-4 rounded-xl"></i>
              </a>
              <a href="https://x.com/bhismabiskuat?t=mbSP9E3hAdf7BhmHKL4gmA&s=09">
                <i className="bxl bx-twitter-x text-2xl text-white bg-blue-500 p-4 rounded-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/bhisma-parasurama/">
                <i className="bxl bx-linkedin text-2xl text-white bg-blue-500 p-4 rounded-xl"></i>
              </a>
              <a href="https://id.pinterest.com/bhismaparasurama/">
                <i className="bxl bx-pinterest-alt text-2xl text-white bg-blue-500 p-4 rounded-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[calc(60%-2.5rem)] flex flex-col gap-4 max-[1000px]:w-full"
        >
          <div className="w-full flex gap-4 max-[800px]:flex-col">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full py-4 px-8 bg-gray-100 rounded-xl"
                type="text"
                placeholder="Putu Bhisma"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full py-4 px-8 bg-gray-100 rounded-xl"
                type="text"
                placeholder="Parasurama"
              />
            </div>
          </div>
          <div className="w-full flex gap-4 max-[800px]:flex-col">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg">
                Your Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full py-4 px-8 bg-gray-100 rounded-xl"
                type="email"
                placeholder="bhismaparasurama2023@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg">
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full py-4 px-8 bg-gray-100 rounded-xl"
                type="text"
                placeholder="081529575490"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-lg">
              Your Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full py-4 px-8 bg-gray-100 rounded-xl"
              type="text"
              placeholder="Your Subject"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-lg">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full py-4 px-8 bg-gray-100 rounded-xl h-52"
              id=""
              placeholder="Type Here"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex gap-2 w-fit py-3 px-6 bg-blue-500 items-center text-white rounded-full"
          >
            {loading ? "Sending..." : "Send Message"}
            <i className="bx bx-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
