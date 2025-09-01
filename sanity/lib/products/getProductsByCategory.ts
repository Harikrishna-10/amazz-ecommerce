import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
        *[_type == "productType"
        && references(*[_type=="category" && slug.current==$categorySlug]._id)] | order(name asc)`);

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });
    return product.data || [];
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return [];
  }
};
