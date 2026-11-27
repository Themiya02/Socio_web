import { useState } from "react";
import { Send, MessageSquare, CheckCircle2 } from "lucide-react";

const INQUIRY_OPTIONS = [
  "Warranty & Repair Claim",
  "Order & Delivery Support",
  "Product Consultation",
  "Corporate / B2B Inquiry",
];

export default function DropANoteForm({ defaultInquiry = "Warranty & Repair Claim" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: defaultInquiry,
    orderId: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (name === "fullName" && trimmed.length < 2) {
      return "Please enter your full name.";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return "Please enter a valid email address.";
    }
    if (name === "message" && trimmed.length < 10) {
      return "Please enter at least 10 characters in your message.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    const activeErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, val]) => val !== "")
    );

    setErrors(activeErrors);
    if (Object.keys(activeErrors).length > 0) return;

    console.log("Contact Inquiry Submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      inquiryType: defaultInquiry,
      orderId: "",
      message: "",
    });
  };

  return (
    <div
      id="drop-a-note"
      className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-8 shadow-sm h-full"
    >
      <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
        <MessageSquare size={13} />
        Direct Concierge
      </p>
      <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900">
        Drop a Note
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-slate-500">
        Leave your requirements and our certified engineers will respond within
        2 hours.
      </p>

      {submitted && (
        <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs sm:text-sm font-bold text-emerald-800">
              Message received!
            </p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Our Socio.lk support team will get back to you within 2 hours.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="contact-fullName"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Full Name
            </label>
            <input
              id="contact-fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Ruwan Wickramasinghe"
              className={`w-full rounded-xl border px-3.5 py-2.5 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 ${
                errors.fullName
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-blue-500"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-rose-500 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@company.com"
              className={`w-full rounded-xl border px-3.5 py-2.5 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 ${
                errors.email
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-blue-500"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-rose-500 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Inquiry Type */}
          <div>
            <label
              htmlFor="contact-inquiry"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Inquiry Type
            </label>
            <select
              id="contact-inquiry"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 cursor-pointer"
            >
              {INQUIRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Order ID (Optional) */}
          <div>
            <label
              htmlFor="contact-orderId"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Order ID (Optional)
            </label>
            <input
              id="contact-orderId"
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="e.g. SC-8942-2024"
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Your Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="How can we help your tech setup today? Include device model numbers or serial numbers if applicable."
            className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 resize-none ${
              errors.message
                ? "border-rose-400 focus:border-rose-500"
                : "border-slate-200 focus:border-blue-500"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-rose-500 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <span>Send Message</span>
            <Send size={15} />
          </button>
        </div>
      </form>
    </div>
  );
}