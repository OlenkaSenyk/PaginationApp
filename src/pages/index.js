import Head from "next/head";
import {Cards} from "@/components/cards";
import {getPhones} from "@/pages/api/getData";

export async function getServerSideProps() {
  const data = await getPhones()
  const phones = data.phone
  return {
    props: { phones }
  }
}

export default function Home({ phones }) {
  return (
    <>
      <Head>
        <title>PaginationApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Cards phones={phones}/>
      </main>
    </>
  );
}
