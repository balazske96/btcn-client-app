import styles from '../../styles/Casino.module.scss';
import client from '../../utils/axiosConfig';

export default function Casino({ name, rank, rating, image }) {
    return (
        <div className={styles.container}>
            {name}<br />
            {rank}<br />
            {rating}<br />
            {image}<br />
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
            image: casino.image.url
        },
        revalidate: 10
    }
}