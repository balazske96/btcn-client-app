import Introduction from '../components/Introduction/Introduction';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.scss';
import AwardCardsSection from '../components/AwardCardsSection/AwardCardsSection';
import CasinosTable from '../components/CasinosTable/CasinosTable';
import client from '../utils/axiosConfig';
import Summaries from '../components/Summaries/Summaries';
import Blogs from '../components/Blogs/Blogs';
import convertMarkdownToHtml from '../utils/markdown';
import BlueBanner from '../components/BlueBanner/BlueBanner';
import Footer from '../components/Footer/Footer';
import SecondIntroduction from '../components/SecondIntroduction/SecondIntroduction';

export default function Home({ casinos, summaries, blogs, blogSectionText, bannerYouTubeLink, secondaryIntroduction }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Introduction videoLink={bannerYouTubeLink} />
      <AwardCardsSection topCasinos={casinos.slice(0, 3)} />
      <CasinosTable />
      <SecondIntroduction text={convertMarkdownToHtml(secondaryIntroduction)} />
      <Summaries summaries={summaries} />
      <BlueBanner />
      <Blogs blogs={blogs} text={convertMarkdownToHtml(blogSectionText)} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const casinos = await client(`/casinos`).then(res => res.data);
  const summaries = await client('/summaries').then(res => res.data);
  const blogs = await client('/blogs').then(res => res.data);

  const homePage = await client('/home').then(res => res.data);

  return {
    props: {
      casinos: casinos,
      summaries: summaries,
      blogs: blogs,
      blogSectionText: homePage.blog_section_text,
      bannerYouTubeLink: homePage.banner_youtube_link,
      secondaryIntroduction: homePage.second_introduction
    },
    revalidate: 10
  }
}
