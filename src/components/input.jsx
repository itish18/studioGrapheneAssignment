import styles from "./input.module.css";

import { useState } from "react";

export const Input = ({ label, name, type, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`${styles.customInput} ${
        isFocused || value ? styles.focused : ""
      }`}
    >
      <input
        type={type || "text"}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        className={styles.inputField}
        value={value}
        autoComplete="off"
      />
      <label className={styles.inputLabel} onClick={handleFocus}>
        {label}
      </label>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
