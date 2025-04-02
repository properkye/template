"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Selection {
  title: string;
  value: string;
}

interface ThirdStepProps {
  category: string;
  subcategory: string;
  brand: string | null;
  setBrand: (brand: string) => void;
  setStep: (step: number) => void;
  onNext: () => void;
  categories: { title: string; url: string }[];
}

const getSelections = (subcategory: string): Selection[] => {
  const categories: Record<string, Selection[]> = {
    // Priključne mašine
    balirke: [
      { title: "Metal-Fach", value: "metal-fach" },
      { title: "Ursus", value: "ursus" },
    ],
    utovarivaci: [{ title: "Ferocoop", value: "ferocoop" }],
    kosacice: [
      { title: "Čelmak", value: "celmak" },
      { title: "Minos Agri", value: "minos-agri" },
      { title: "FPM Agromehanika", value: "fpm-agromehanika" },
    ],
    sakupljaci: [{ title: "Termometal", value: "termometal" }],
    freze: [{ title: "FPM Agromehanika", value: "fpm-agromehanika" }],
    plugovi: [{ title: "Bell Impex", value: "bell-impex" }],
    sejalice: [{ title: "Majevica", value: "majevica" }],
    prskalice: [
      { title: "Agromehanika Kranj", value: "agromehanika-kranj" },
      { title: "Majevica", value: "majevica" },
      { title: "Gumaplast Rau", value: "gumaplast-rau" },
    ],
    rasipaci: [
      { title: "Minos Agri", value: "minos-agri" },
      { title: "Majevica", value: "majevica" },
      { title: "Ferocoop", value: "ferocoop" },
    ],
    setvospremaci: [
      { title: "Gorenc", value: "gorenc" },
      { title: "Majevica", value: "majevica" },
    ],
    atomizeri: [
      { title: "Agromehanika Kranj", value: "agromehanika-kranj" },
      { title: "Morava", value: "morava" },
    ],
    mulcari: [
      { title: "INO Brežice", value: "ino-brezice" },
      { title: "Mega Metal", value: "mega-metal" },
      { title: "FPM Agromehanika", value: "fpm-agromehanika" },
    ],
    cisterne: [{ title: "Majevica", value: "majevica" }],
    rasturaci: [{ title: "Majevica", value: "majevica" }],
    prikolice: [
      { title: "Majevica", value: "majevica" },
      { title: "Čelmak", value: "celmak" },
    ],

    // Rezervni delovi - podkategorije
    "traktorski-delovi": [
      { title: "Massey Ferguson", value: "massey-ferguson" },
      { title: "Landini", value: "landini" },
      { title: "Tafe/IMT", value: "tafe-imt" },
      { title: "Solis", value: "solis" },
      { title: "YTO", value: "yto" },
    ],

    "delovi-za-prikljucne-masine": [
      { title: "SIP Šempeter Slovenija", value: "sip-sempeter-slovenija" },
      { title: "Rotaciona kosa Poljska", value: "rotaciona-kosa-poljska" },
      { title: "Agromehanika Kranj", value: "agromehanika-kranj-slovenija" },
      { title: "Majevica", value: "majevica" },
      { title: "FPM Agromehanika", value: "fpm-agromehanika" },
      { title: "INO Brežice Slovenija", value: "ino-brezice-slovenija" },
    ],

    ostalo: [
      { title: "Kardani", value: "kardani" },
      { title: "Ulja i maziva", value: "ulja-i-maziva" },
      { title: "Hladnjaci", value: "hladnjaci" },
      { title: "Trimeri", value: "trimeri" },
      { title: "Spoljne gume", value: "spoljne-gume" },
      { title: "Razno", value: "razno" },
    ],
  };

  return categories[subcategory] || [];
};

export default function ThirdStep({
  subcategory,
  setStep,
  onNext,
  brand,
  category,
  categories,
  setBrand,
}: ThirdStepProps) {
  const options = getSelections(subcategory);
  const currentCategoryTitle = categories.find(
    (c) => c.url === category
  )?.title;

  const formatTitle = (text: string) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex flex-col gap-6">
      <div onClick={() => setStep(2)} className="cursor-pointer w-fit">
        <ArrowLeft />
      </div>

      <h2 className="text-xl font-bold">Izabrana kategorija:</h2>
      <p className="text-lg border p-4 rounded-md">
        {currentCategoryTitle} – {formatTitle(subcategory)}
      </p>

      {options.length > 0 ? (
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Dodatni izbor:</h3>
          <div className="flex flex-wrap gap-4">
            {options.map((opt) => {
              const isSelected = brand === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setBrand(opt.value)}
                  className={`cursor-pointer px-4 py-2 border rounded-lg transition-all duration-300 ${
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
        </div>
      ) : (
        <p className="text-muted-foreground">
          Još uvek nema dodatnih opcija za ovu podkategoriju.
        </p>
      )}

      {brand && (
        <div className="pt-4 flex flex-col">
          <span className="text-[.8rem]">
            Pritisnite dalje za sledeći korak.
          </span>
          <Button onClick={onNext} className="w-[250px] mt-4">
            Dalje
          </Button>
        </div>
      )}
    </div>
  );
}
