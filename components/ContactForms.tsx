"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

async function submitForm(type: "contact" | "issue", data: FormState) {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ...data }),
  });

  return response.json();
}

export default function ContactForms() {
  const [contact, setContact] = useState<FormState>(initialState);
  const [issue, setIssue] = useState<FormState>(initialState);
  const [contactStatus, setContactStatus] = useState<string>("");
  const [issueStatus, setIssueStatus] = useState<string>("");
  const [sendingContact, setSendingContact] = useState(false);
  const [sendingIssue, setSendingIssue] = useState(false);

  const sharedInputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring";

  const handleContactSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSendingContact(true);
    setContactStatus("");

    try {
      const result = await submitForm("contact", contact);
      if (result?.ok) {
        setContactStatus("✅ Message sent successfully. Our team will respond soon.");
        setContact(initialState);
      } else {
        setContactStatus("❌ Could not send message. Please try again.");
      }
    } catch {
      setContactStatus("❌ Network error. Please try again.");
    } finally {
      setSendingContact(false);
    }
  };

  const handleIssueSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSendingIssue(true);
    setIssueStatus("");

    try {
      const result = await submitForm("issue", issue);
      if (result?.ok) {
        setIssueStatus("✅ Issue submitted successfully. We will investigate and get back to you.");
        setIssue(initialState);
      } else {
        setIssueStatus("❌ Could not submit issue. Please try again.");
      }
    } catch {
      setIssueStatus("❌ Network error. Please try again.");
    } finally {
      setSendingIssue(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={handleContactSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Contact Form</h2>
        <p className="mt-2 text-sm text-slate-400">Sent to support@jorvea.tech</p>
        <div className="mt-5 space-y-3">
          <input required value={contact.fullName} onChange={(e) => setContact((p) => ({ ...p, fullName: e.target.value }))} className={sharedInputClass} placeholder="Your full name" />
          <input required type="email" value={contact.email} onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))} className={sharedInputClass} placeholder="Your email" />
          <input required value={contact.subject} onChange={(e) => setContact((p) => ({ ...p, subject: e.target.value }))} className={sharedInputClass} placeholder="Subject" />
          <textarea required value={contact.message} onChange={(e) => setContact((p) => ({ ...p, message: e.target.value }))} className={`${sharedInputClass} min-h-32`} placeholder="How can we help you?" />
        </div>
        <button disabled={sendingContact} className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 disabled:opacity-60">
          {sendingContact ? "Sending..." : "Send Message"}
        </button>
        {contactStatus ? <p className="mt-3 text-sm text-slate-200">{contactStatus}</p> : null}
      </form>

      <form onSubmit={handleIssueSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-semibold">Issue Report Form</h2>
        <p className="mt-2 text-sm text-slate-400">Sent to no-reply@jorvea.tech and support@jorvea.tech</p>
        <div className="mt-5 space-y-3">
          <input required value={issue.fullName} onChange={(e) => setIssue((p) => ({ ...p, fullName: e.target.value }))} className={sharedInputClass} placeholder="Your full name" />
          <input required type="email" value={issue.email} onChange={(e) => setIssue((p) => ({ ...p, email: e.target.value }))} className={sharedInputClass} placeholder="Your email" />
          <input required value={issue.subject} onChange={(e) => setIssue((p) => ({ ...p, subject: e.target.value }))} className={sharedInputClass} placeholder="Issue title" />
          <textarea required value={issue.message} onChange={(e) => setIssue((p) => ({ ...p, message: e.target.value }))} className={`${sharedInputClass} min-h-32`} placeholder="Describe steps, expected result, and actual result" />
        </div>
        <button disabled={sendingIssue} className="mt-4 rounded-xl bg-violet-400 px-5 py-3 font-semibold text-slate-950 disabled:opacity-60">
          {sendingIssue ? "Submitting..." : "Submit Issue"}
        </button>
        {issueStatus ? <p className="mt-3 text-sm text-slate-200">{issueStatus}</p> : null}
      </form>
    </div>
  );
}
