"use server";

import { redirect } from "next/navigation";

export const formAction = async (formData) => {
  const fir = formData.get("Type:");
  const first = formData.get("FirstName:");
  const sur = formData.get("SurName:");
  const email = formData.get("Email:");
  const role = formData.get("Role:");
  const company = formData.get("CompanyName:");
  const industry = formData.get("Industry:");
  const country = formData.get("Country:");
  const city = formData.get("City:");

  redirect(
    `/${first}/${sur}/${email}/${role}/${company}/${industry}/${country}/${city}`
  );
};


 