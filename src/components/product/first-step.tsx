"use client";

import { Button } from "@/components/ui/button";
import { Tractor, Settings, Wrench } from "lucide-react";


type Category = {
  title: string;
  url: string;
  icon: React.ElementType;
};

interface FirstStepProps {
  selectedCategory: string | null;
  setSelectedCategory: (url: string) => void;
  onNext: () => void;
}

const categories: Category[] = [
  {
    title: "Traktori",
    url: "traktori",
    icon: Tractor,
  },
  {
    title: "Priključne mašine",
    url: "prikljucne-masine",
    icon: Settings,
  },
  {
    title: "Rezervni delovi",
    url: "rezervni-delovi",
    icon: Wrench,
  },
];

export default function FirstStep({
  selectedCategory,
  setSelectedCategory,
  onNext,
}: FirstStepProps) {
  const handleSelect = (categoryUrl: string) => {
    setSelectedCategory(categoryUrl);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Izaberite kategoriju proizvoda</h2>

      <div className="flex gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.url;

          return (
            <button
              key={cat.url}
              onClick={() => handleSelect(cat.url)}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 ${
                isSelected
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.title}
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <div className="pt-4 flex flex-col">
          <span className="text-[.8rem]">
            Pritisnite dalje za sledeći korak.
          </span>
          <Button
            className="w-[250px] cursor-pointer mt-4"
            onClick={onNext}
          >
            Dalje
          </Button>
        </div>
      )}
    </div>
  );
}
