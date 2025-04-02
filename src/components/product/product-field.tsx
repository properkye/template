"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ProductFieldProps {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  onChange: (value: string) => void;
}

export default function ProductField({
  label,
  name,
  value = "",
  placeholder,
  required = false,
  type = "text",
  onChange,
}: ProductFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
