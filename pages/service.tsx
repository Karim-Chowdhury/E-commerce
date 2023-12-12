import Head from "next/head";
import Service from "@/components/Service/service";

import Layout from "@/layouts/Layout";

const ServicePage = () => {
  return (
    <Layout>
      <Head>
        <title>KC's Fashion</title>
      </Head>

      {/* Main Start */}
      
      < Service/>

      {/*  Main End  */}
    </Layout>
  );
};

export default ServicePage;