"use client";

import { useState, useEffect } from 'react';

// Utility function to calculate age
const calculateAge = (birthdate: string) => {
  const birthDate = new Date(birthdate);
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) years--;
  return years;
};

export default function AgeCalculator({ birthdate }: { birthdate: string }) {
  const [age, setAge] = useState(() => calculateAge(birthdate));
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Format the birthdate as '15-June-2005'
    const date = new Date(birthdate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    setFormattedDate(`${day}-${month}-${year}`);

    // Update the age every 24 hours
    const interval = setInterval(() => {
      setAge(calculateAge(birthdate));
    }, 1000 * 60 * 60 * 24); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, [birthdate]);

  return (
    <span>
      {formattedDate}, {age} yrs
    </span>
  );
}