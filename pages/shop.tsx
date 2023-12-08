import Head from "next/head";

import Breadcrumb from "@/components/Shop/Breadcrumb";
import Product from "@/components/Shop/Product";
import Layout from "@/layouts/Layout";

const Shop = () => {
  return (
    <Layout>
      <Head>
        <title>KC's Fashion</title>
      </Head>

      {/* Main Start */}
      <Breadcrumb />
      <Product />

      {/*  Main End  */}
    </Layout>
  );
};

export default Shop;
