"use client";
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  FirstName: z.string().min(3, "First Name must be at least 3 characters").max(20,"First Name must be max at least 20 characters"),
  SurName: z.string().min(3, "Surname must be at least 3 characters"),
  Email: z.string().email("Invalid email format"),
  Role: z.string().min(1, "Role is required"),
  CompanyName: z.string().min(1, "Company Name is required"),
  Industry: z.string().min(1, "Industry is required"),
  Country: z.string().min(1, "Country is required"),
  City: z.string().min(1, "City is required"),
  Password: z.string().min(6, "Password must be at least 6 characters"),
  ConfirmPassword: z.string().min(6, "Confirm Password is required"),
});

const ZodOnlyForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    SurName: "",
    Email: "",
    Role: "",
    CompanyName: "",
    Industry: "",
    Country: "",
    City: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      if (formData.Password !== formData.ConfirmPassword) {
        setErrors({ ConfirmPassword: "Passwords do not match" });
        return;
      }

      setErrors({});
      console.log("Valid Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        FirstName: "",
        SurName: "",
        Email: "",
        Role: "",
        CompanyName: "",
        Industry: "",
        Country: "",
        City: "",
        Password: "",
        ConfirmPassword: "",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Zod Only Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          "FirstName",
          "SurName",
          "Email",
          "Role",
          "CompanyName",
          "Industry",
          "Country",
          "City",
          "Password",
          "ConfirmPassword",
        ].map((field) => (
          <div key={field}>
            <label className="block font-medium">
              {field.replace(/([A-Z])/g, " $1")}*
            </label>
            <input
              type={
                field.toLowerCase().includes("password") ? "password" : "text"
              }
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder={`Enter ${field}`}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ZodOnlyForm;
