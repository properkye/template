"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "" ? "Ime je obavezno." : "",
      email: formData.email.trim() === "" ? "Email je obavezan." : "",
      phone: formData.phone.trim() === "" ? "Telefon je obavezan." : "",
      address: formData.address.trim() === "" ? "Adresa je obavezna." : "",
      message: formData.message.trim() === "" ? "Poruka je obavezna." : "",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (hasError) {
      toast.error("Greška u formi", {
        description: "Molimo popunite sva obavezna polja.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Uspešno poslato", {
          description: "Hvala na poruci, javljamo se uskoro!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        toast.error("Greška", {
          description: "Poruka nije poslata. Pokušajte ponovo.",
        });
      }
    } catch (error) {
      toast.error("Greška na mreži", {
        description: "Nešto je pošlo po zlu. Pokušajte kasnije.",
      });
      console.error("FETCH ERROR:", error);
    }
  };

  return (
    <div className="w-[50%] mx-auto my-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-6">
        {/* Ime */}
        <div className="grid gap-2">
          <Label htmlFor="name">Ime</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.name ? "text-red-500" : "opacity-0"
            }`}
          >
            {errors.name || "placeholder"}
          </p>
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.email ? "text-red-500" : "opacity-0"
            }`}
          >
            {errors.email || "placeholder"}
          </p>
        </div>

        {/* Telefon */}
        <div className="grid gap-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"
            pattern="[0-9+\-\s]*"
            value={formData.phone}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/[^0-9+\-\s]/g, "");
              setFormData((prev) => ({ ...prev, phone: cleaned }));
              setErrors((prev) => ({ ...prev, phone: "" }));
            }}
            className={errors.phone ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.phone ? "text-red-500" : "opacity-0"
            }`}
          >
            {errors.phone || "placeholder"}
          </p>
        </div>

        {/* Adresa */}
        <div className="grid gap-2">
          <Label htmlFor="address">Adresa</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "border-red-500" : ""}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.address ? "text-red-500" : "opacity-0"
            }`}
          >
            {errors.address || "placeholder"}
          </p>
        </div>

        {/* Poruka */}
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="message">Poruka</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`resize-none ${errors.message ? "border-red-500" : ""}`}
          />
          <p
            className={`text-sm mt-1 h-4 ${
              errors.message ? "text-red-500" : "opacity-0"
            }`}
          >
            {errors.message || "placeholder"}
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
