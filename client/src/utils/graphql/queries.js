import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($catID: ID) {
    products(category: $catID) {
      _id
      name
      description
      image
      quantity
      price
      category {
        name
      }
    }
  }
`;
