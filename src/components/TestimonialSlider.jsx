// TestimonialSlider.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    linkedin: "",
    feedback: "",
    stars: 5,
    picture: "",
  });

  const addTestimonial = () => {
    setTestimonials((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "", linkedin: "", feedback: "", stars: 5, picture: "" });
  };

  const removeTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="mt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Live Feedback</h2>

      {/* Add Testimonial */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          className="p-3 rounded border"
          value={form.linkedin}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
        />
        <input
          type="text"
          placeholder="Picture URL"
          className="p-3 rounded border"
          value={form.picture}
          onChange={(e) => setForm({ ...form, picture: e.target.value })}
        />
        <textarea
          placeholder="Feedback"
          rows="3"
          className="p-3 rounded border md:col-span-2"
          value={form.feedback}
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />
        <select
          className="p-3 rounded border"
          value={form.stars}
          onChange={(e) => setForm({ ...form, stars: parseInt(e.target.value) })}
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 && "s"}
            </option>
          ))}
        </select>
        <button
          className="p-3 bg-black text-white rounded hover:bg-gray-800 transition md:col-span-1"
          onClick={addTestimonial}
        >
          Add Feedback
        </button>
      </div>

      {/* Display Testimonials */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-[#1a1a1a] rounded-xl p-5 shadow-md border dark:border-gray-700 relative"
          >
            {t.picture && (
              <img
                src={t.picture}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border mb-4"
              />
            )}
            <h3 className="text-lg font-bold">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{t.feedback}</p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <FaEnvelope className="text-gray-400" />
              <span>{t.email}</span>
            </div>
            <div className="flex gap-2 items-center text-sm mt-1">
              <FaLinkedin className="text-blue-500" />
              <a href={t.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="mt-2 text-yellow-400 text-sm">
              {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
            </div>
            <button
              onClick={() => removeTestimonial(t.id)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-600"
              title="Delete"
            >
              <FaTrash />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
