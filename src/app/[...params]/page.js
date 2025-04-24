"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const { params } = useParams(); // [...params]

  const [
    first, sur, email, role, company, industry, country, city
  ] = params || [];

  return (
    <div className="flex flex-col justify-center items-center space-y-2 pt-50">
      <p><strong>FirstName:</strong> {first}</p>
      <p><strong>SurName:</strong> {sur}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Industry:</strong> {industry}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

export default Page;
