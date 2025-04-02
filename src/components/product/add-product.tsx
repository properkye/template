"use client";

import { useState } from "react";
import { Tractor, Settings, Wrench } from "lucide-react";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import AddProductInfo from "./add-product-info";
import ThirdStep from "./third-step";

const categories = [
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

type ProductData = {
  category: string | null;
  subcategory: string | null;
  brand: string | null;
};

export default function AddProduct() {
  const [step, setStep] = useState(1);
  const [productData, setProductData] = useState<ProductData>({
    category: null,
    subcategory: null,
    brand: null,
  });

  return (
    <div className="">
      {step === 1 && (
        <FirstStep
          selectedCategory={productData.category}
          setSelectedCategory={(cat) =>
            setProductData((prev) => ({ ...prev, category: cat }))
          }
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && productData.category && (
        <SecondStep
          selectedCategory={productData.category}
          subcategory={productData.subcategory}
          setSubcategory={(sub) =>
            setProductData((prev) => ({
              ...prev,
              subcategory: sub,
              brand: productData.category === "traktori" ? sub : prev.brand, // 👈 ovde auto-set brand za traktore
            }))
          }
          setBrand={
            (brand) => setProductData((prev) => ({ ...prev, brand })) // fallback ako ti zatreba dalje
          }
          setStep={setStep}
          categories={categories}
          onNext={() => {
            if (productData.category === "traktori") {
              setStep(4);
            } else {
              setStep(3);
            }
          }}
        />
      )}

      {step === 3 && (
        <ThirdStep
          category={productData.category!}
          subcategory={productData.subcategory!}
          brand={productData.brand}
          setBrand={(brand) => setProductData((prev) => ({ ...prev, brand }))}
          setStep={setStep}
          onNext={() => setStep(4)}
          categories={categories}
        />
      )}

      {step === 4 && (
        <AddProductInfo productData={productData} setStep={setStep} />
      )}
    </div>
  );
}
