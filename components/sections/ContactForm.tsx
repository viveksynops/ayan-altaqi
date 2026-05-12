"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded border border-outline-variant bg-white px-md py-sm font-body text-on-surface outline-none transition-all duration-300 placeholder:text-secondary/60 focus:border-primary focus:shadow-glow";

export function ContactForm({ career = false }: { career?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <motion.form
      className="glass-panel rounded-xl bg-white/80 p-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-md md:grid-cols-2">
        <input className={inputClass} name="name" placeholder="Full name" required />
        <input className={inputClass} name="email" placeholder="Email address" type="email" required />
        <input className={inputClass} name="phone" placeholder="Phone number" />
        <select className={inputClass} name="category" defaultValue="">
          <option value="" disabled>{career ? "Preferred position" : "Inquiry category"}</option>
          <option>General Contracting</option>
          <option>Material Trading</option>
          <option>Equipment Rental</option>
          <option>Manpower Support</option>
          <option>Careers</option>
        </select>
      </div>
      {career ? <input className={`${inputClass} mt-md`} name="portfolio" placeholder="LinkedIn or portfolio URL" /> : null}
      <textarea className={`${inputClass} mt-md min-h-36 resize-y`} name="message" placeholder={career ? "Tell us about your experience" : "Project details"} required />
      <div className="mt-md flex flex-col items-start gap-sm sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">{career ? "Submit Application" : "Send Inquiry"}</Button>
        {sent ? <p className="font-body text-sm text-primary">Thank you. This demo form is ready for backend integration.</p> : null}
      </div>
    </motion.form>
  );
}
