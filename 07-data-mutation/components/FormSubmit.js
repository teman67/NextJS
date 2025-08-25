"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      <button type="reset" disabled={pending}>
        Reset
      </button>
      <button type="submit" disabled={pending}>
        {pending ? "Creating Post..." : "Create Post"}
      </button>
    </>
  );
}
