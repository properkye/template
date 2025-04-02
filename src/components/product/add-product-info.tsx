"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProductField from "./product-field";
import ProductWrapper from "./product-wrapper";
import ProductTextarea from "./product-textarea";

interface ProductData {
  category: string | null;
  subcategory: string | null;
  brand: string | null;
  // kasnije: name, price, images, itd.
}

interface AddProductInfoProps {
  productData: ProductData;
  setStep: (step: number) => void;
}

export default function AddProductInfo({
  productData,
  setStep,
}: AddProductInfoProps) {
  useEffect(() => {
    console.log("Product data:", productData);
  }, [productData]);

  const [form, setForm] = useState({
    title: "",
    small_desc: "",
    large_desc: "",
    // ovde kasnije dodaješ price, description, images itd.
  });

  const handleBack = () => {
    if (productData.category === "traktori") {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div onClick={handleBack} className="cursor-pointer w-fit">
        <ArrowLeft />
      </div>

      <h2 className="text-2xl font-bold">Unos detalja za novi proizvod</h2>

      {/* levi deo */}

      <ProductWrapper>
        {/* levi deo */}
        <div className="flex flex-col gap-8">
          <ProductField
            label="Ime proizvoda"
            name="title"
            value={form.title}
            onChange={(val) => setForm((prev) => ({ ...prev, title: val }))}
            required
          />

          <ProductField
            label="Manji opis proizvoda"
            name="small_desc"
            value={form.small_desc}
            onChange={(val) =>
              setForm((prev) => ({ ...prev, small_desc: val }))
            }
            required
          />

          <ProductTextarea
            label="Opis proizvoda"
            name="large_desc"
            value={form.large_desc}
            onChange={(val) =>
              setForm((prev) => ({ ...prev, large_desc: val }))
            }
            required
          />

          <div className="grid grid-cols-2 gap-8">
            <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
            <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
              <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
              <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
              <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
              <ProductField
              label="Manji opis proizvoda"
              name="small_desc"
              value={form.small_desc}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, small_desc: val }))
              }
              required
            />
          </div>
        </div>

        {/* desni deo tek */}
        <div className="grid grid-cols-2 border border-red-500"></div>
      </ProductWrapper>

      {/* OVDE DOLAZI FORMA ZA NAZIV, OPIS, CENU, SLIKE... */}
    </div>
  );
}
