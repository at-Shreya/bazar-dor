import Link from "next/link";

// হোম › চাল › বাটাম সাইজ চাল
export default function ProductBreadcrumbs({ product }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs text-sm text-base-content/70">
      <ul>
        <li>
          <Link href="/" className="hover:text-primary">
            হোম
          </Link>
        </li>
        <li>
          <Link href={`/category/${product.category}`} className="hover:text-primary">
            {product.categoryNameBn}
          </Link>
        </li>
        <li aria-current="page" className="font-medium text-base-content">
          {product.nameBn}
        </li>
      </ul>
    </nav>
  );
}