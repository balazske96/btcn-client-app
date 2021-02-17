import client from '../../utils/axiosConfig';
import styles from '../../styles/Summaries.module.scss';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';

export default function Summaries({ summaries }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bitcoin Casinos</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.summaryCardContainer}>
                {
                    summaries.map(summary => (
                        <SummaryCard
                            text={summary.text}
                            title={summary.title}
                            negativums={[summary.negative_1, summary.negative_2, summary.negative_3]}
                            positivums={[summary.positive_1, summary.positive_2, summary.positive_3]}
                            slug={summary.slug}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const summeries = await client('/summaries').then(res => res.data);
    return {
        props: {
            summaries: summeries
        },
        revalidate: 20
    }
}