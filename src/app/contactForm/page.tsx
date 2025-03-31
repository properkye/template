"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // reset error on typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "" ? "Ime je obavezno." : "",
      surname: formData.surname.trim() === "" ? "Prezime je obavezno." : "",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (hasError) return;

    // Submit logic
    console.log("Form data:", formData);
  };

  return (
    <div className="w-[50%] mx-auto my-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Ime</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.name ? "text-red-500 opacity-100" : "opacity-0"
            }`}
          >
            {errors.name || "placeholder"}
          </p>
        </div>


        <div className="grid gap-2">
          <Label htmlFor="surname">Adresa</Label>
          <Input
            id="surname"
            name="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            className={errors.surname ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.surname ? "text-red-500 opacity-100" : "opacity-0"
            }`}
          >
            {errors.surname || "placeholder"}
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="surname">Telefon</Label>
          <Input
            id="surname"
            name="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            className={errors.surname ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.surname ? "text-red-500 opacity-100" : "opacity-0"
            }`}
          >
            {errors.surname || "placeholder"}
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="surname">Adresa</Label>
          <Input
            id="surname"
            name="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            className={errors.surname ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.surname ? "text-red-500 opacity-100" : "opacity-0"
            }`}
          >
            {errors.surname || "placeholder"}
          </p>
        </div>

        <div className="grid gap-2 col-span-2">
          <Label htmlFor="surname">Poruka</Label>
          <Textarea
            placeholder="Type your message here."
            className="resize-none"
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.surname ? "text-red-500 opacity-100" : "opacity-0"
            }`}
          >
            {errors.surname || "placeholder"}
          </p>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            Pošalji upit
          </button>
        </div>
      </form>
    </div>
  );
}
