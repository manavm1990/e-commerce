import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@app/utils/graphql/queries.js";
import { Footer, Header } from "components/layout";
import { List } from "components/product";
import React from "react";

function HomeView() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading... ⏳</p>;

  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <List products={data.products} />
      </main>
      <Footer />
    </>
  );
}

export default HomeView;
