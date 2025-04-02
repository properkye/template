"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ProductTextareaProps {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export default function ProductTextarea({
  label,
  name,
  value = "",
  placeholder,
  required = false,
  onChange,
}: ProductTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="resize-none"
      />
    </div>
  );
}
