import styles from "./main.module.css";

import { Input } from "../input";
import { useState } from "react";

export const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);

      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Form is not valid");
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.headings}>
            <span>Newslleter</span>
            <p>Get news about articles and updates in your inbox.</p>
          </div>

          <div className={styles.inputBox}>
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={onChange}
              type="text"
              error={errors.name}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={onChange}
              type="email"
              error={errors.email}
            />
            <Input
              label="Message"
              name="message"
              value={formData.message}
              onChange={onChange}
              type="text"
              error={errors.message}
            />
          </div>
        </div>
        <div className={styles.submit}>
          <div className={styles.get}>GET</div>
          <div className={styles.touch}>IN TOUCH</div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
