import Head from 'next/head';
import Introduction from '../components/Introduction/Introduction';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.scss';
import AwardCardsSection from '../components/AwardCardsSection/AwardCardsSection';
import CasinosTable from '../components/CasinosTable/CasinosTable';
import client from '../utils/axiosConfig';
import Summaries from '../components/Summaries/Summaries';
import Blogs from '../components/Blogs/Blogs';

export default function Home({ casinos, summaries, blogs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin Casinos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Introduction />
      <AwardCardsSection topCasinos={casinos.slice(0, 3)} />
      <CasinosTable />
      <Summaries summaries={summaries} />
      <Blogs blogs={blogs} />
    </div>
  )
}

export async function getStaticProps() {
  const casinos = await client(`/casinos`).then(res => res.data);
  const summaries = await client('/summaries').then(res => res.data);
  const blogs = await client('/blogs').then(res => res.data);

  return {
    props: {
      casinos: casinos,
      summaries: summaries,
      blogs: blogs
    },
    revalidate: 10
  }
}
