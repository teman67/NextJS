"use client";

import { useFormState } from "react-dom";

export default function FormSubmit() {
  const status = useFormState();

  if (status.pending) {
    return <p>Submitting...</p>;
  }

  return (
    <button type="submit" disabled={status === "submitting"}>
      {status === "submitting" ? "Submitting..." : "Submit"}
    </button>
  );
}
