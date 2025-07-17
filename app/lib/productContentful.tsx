import { fetchGraphQL } from "./contentful";

export async function getAllProducts() {
  const entries = await fetchGraphQL(
    `query {
  dairyProductCollection{
    items{
      name
      description
      price
      quantity
      benifits
      image{
        url
      }
    }
  }

}`
  );
  return entries?.data?.dairyProductCollection?.items || [];
}