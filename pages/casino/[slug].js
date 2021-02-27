import styles from '../../styles/Casino.module.scss';
import client from '../../utils/axiosConfig';
import EmptyBanner from '../../components/EmptyBanner/EmptyBanner';
import convertMarkdownToHtml from '../../utils/markdown';

export default function Casino({ name, rank, rating, image, review }) {
    return (
        <div className={styles.container}>
            <EmptyBanner link='/' linkText='Home' />
            <div className={styles.contentContainer} dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(review) }} />
        </div>
    )
}

export async function getStaticPaths() {

    const slugs = await client(`/casinos`).then(
        res => res.data.map(
            casino => ({ params: { slug: casino.slug } })
        ));

    return {
        paths: slugs,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const casino = await client(`/casinos?slug=${params.slug}`).then(res => res.data[0]);

    return {
        props: {
            name: casino.name,
            rank: casino.rank,
            rating: casino.rating,
            image: casino.image.url,
            review: casino.review
        },
        revalidate: 10
    }
}