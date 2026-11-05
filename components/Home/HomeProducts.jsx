import { connection } from "next/server";
import { getProducts } from "@/lib/api";
import { toBnNumber } from "@/lib/format";
import { getTopFallers, getTopRisers } from "@/lib/products";
import ProductSection from "./ProductSection";

export default async function HomeProducts() {
  await connection();

  const products = await getProducts({ cache: "no-store" });

  const risers = getTopRisers(products);
  const fallers = getTopFallers(products);

  return (
    <>
      {/* Increase price */}
      <ProductSection
        title="আজ দাম বেড়েছে"
        icon={<span className="text-error" aria-hidden="true">▲</span>}
        products={risers}
      />

      {/* Decrease price */}
      <ProductSection
        title="আজ দাম কমেছে"
        icon={<span className="text-success" aria-hidden="true">▼</span>}
        products={fallers}
      />

      {/* All products */}
      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle={`মোট ${toBnNumber(products.length)}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
    </>
  );
}