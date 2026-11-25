// Sri Lankan mobile numbers (+94 77 123 4567 or 0771234567)
const SL_PHONE_REGEX = /^(?:\+94|0)?7[01245678]\d{7}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z\s'-]{2,}$/;

export function validateSignupField(name, value, formData = {}) {
  const trimmed = typeof value === "string" ? value.trim() : value;

  switch (name) {
    case "firstName":
      if (!trimmed) return "First name is required.";
      if (!NAME_REGEX.test(trimmed)) return "Enter a valid first name (min. 2 letters).";
      return "";

    case "lastName":
      if (!trimmed) return "Last name is required.";
      if (!NAME_REGEX.test(trimmed)) return "Enter a valid last name (min. 2 letters).";
      return "";

    case "phone": {
      if (!trimmed) return "Phone number is required.";
      const cleanedPhone = trimmed.replace(/[\s-]/g, "");
      if (!SL_PHONE_REGEX.test(cleanedPhone)) {
        return "Enter a valid Sri Lankan mobile number (e.g., +94 77 123 4567).";
      }
      return "";
    }

    case "email":
      if (!trimmed) return "Email address is required.";
      if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
      return "";

    case "password":
      if (!value) return "Password is required.";
      if (value.length < 8) return "Password must be at least 8 characters.";
      if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
        return "Include at least one letter and one number.";
      }
      return "";

    case "confirmPassword":
      if (!value) return "Please confirm your password.";
      if (value !== formData.password) return "Passwords do not match.";
      return "";

    case "agreeTerms":
      if (!value) return "You must agree to the Terms & Conditions.";
      return "";

    default:
      return "";
  }
}

export function validateSignupForm(formData) {
  const errors = {};
  const fields = [
    "firstName",
    "lastName",
    "phone",
    "email",
    "password",
    "confirmPassword",
    "agreeTerms",
  ];

  fields.forEach((field) => {
    const error = validateSignupField(field, formData[field], formData);
    if (error) errors[field] = error;
  });

  return errors;
}

export function validateLoginField(name, value) {
  const trimmed = typeof value === "string" ? value.trim() : value;

  switch (name) {
    case "email":
      if (!trimmed) return "Email address is required.";
      if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
      return "";

    case "password":
      if (!value) return "Password is required.";
      if (value.length < 8) return "Password must be at least 8 characters.";
      return "";

    default:
      return "";
  }
}

export function validateLoginForm(formData) {
  const errors = {};
  ["email", "password"].forEach((field) => {
    const error = validateLoginField(field, formData[field]);
    if (error) errors[field] = error;
  });
  return errors;
}