"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  title: string;
  url: string;
}

interface Option {
  title: string;
  value: string;
}

interface SecondStepProps {
  selectedCategory: string;
  subcategory: string | null;
  setSubcategory: (value: string) => void;
  setBrand: (value: string) => void; // DODAJ OVO
  setStep: (step: number) => void;
  categories: Category[];
  onNext: () => void;
}

const tractorBrands: Option[] = [
  { title: "Solis", value: "solis" },
  { title: "Carraro", value: "carraro" },
  { title: "Mahindra", value: "mahindra" },
  { title: "John Deere", value: "john-deere" },
  { title: "IMT", value: "imt" },
  { title: "YTO", value: "yto" },
  { title: "Zetor", value: "zetor" },
  { title: "Belarus", value: "belarus" },
];

const attachmentMachineSubcategories: Option[] = [
  { title: "Balirke", value: "balirke" },
  { title: "Kosačice", value: "kosacice" },
  { title: "Sakupljači", value: "sakupljaci" },
  { title: "Utovarivači", value: "utovarivaci" },
  { title: "Freze", value: "freze" },
  { title: "Plugovi", value: "plugovi" },
  { title: "Sejalice", value: "sejalice" },
  { title: "Prskalice", value: "prskalice" },
  { title: "Rasipači", value: "rasipaci" },
  { title: "Setvospremači", value: "setvospremaci" },
  { title: "Atomizeri", value: "atomizeri" },
  { title: "Mulčari", value: "mulcari" },
  { title: "Prikolice", value: "prikolice" },
  { title: "Cisterne", value: "cisterne" },
  { title: "Rasturači", value: "rasturaci" },
];

const sparePartsSubcategories: Option[] = [
  { title: "Traktorski delovi", value: "traktorski-delovi" },
  {
    title: "Delovi za priključne mašine",
    value: "delovi-za-prikljucne-masine",
  },
  { title: "Ostalo", value: "ostalo" },
];

export default function SecondStep({
  selectedCategory,
  subcategory,
  setSubcategory,
  setStep,
  categories,
  onNext,
  setBrand,
}: SecondStepProps) {
  const currentTitle = categories.find(
    (c) => c.url === selectedCategory
  )?.title;

  const options =
    selectedCategory === "traktori"
      ? tractorBrands
      : selectedCategory === "prikljucne-masine"
      ? attachmentMachineSubcategories
      : selectedCategory === "rezervni-delovi"
      ? sparePartsSubcategories
      : [];

  return (
    <div className="flex flex-col gap-6">
      <div onClick={() => setStep(1)} className="cursor-pointer w-fit">
        <ArrowLeft />
      </div>

      <h2 className="text-xl font-bold">Izabrana kategorija:</h2>
      <p className="text-lg border p-4 rounded-md">{currentTitle}</p>

      {options.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Odaberite brend/podkategoriju:</h3>
          <div className="flex flex-wrap gap-4">
            {options.map((opt) => {
              const isSelected = subcategory === opt.value;

              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSubcategory(opt.value);
                    if (selectedCategory === "traktori") {
                      setBrand(opt.value); // 👈 ovo je ključno
                    }
                  }}
                  className={`cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black"
                  }`}
                >
                  {opt.title}
                </button>
              );
            })}
          </div>

          {subcategory && (
            <div className="pt-4 flex flex-col">
              <span className="text-[.8rem]">
                Pritisnite dalje za sledeći korak.
              </span>
              <Button className="w-[250px] mt-4" onClick={onNext}>
                Dalje
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
