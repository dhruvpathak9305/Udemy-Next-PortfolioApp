import Layout from "../components/Layout";
export default ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not your data: Status Code ${statusCode}`
      : `Cound'nt get that page, sorry`}
  </Layout>
);
