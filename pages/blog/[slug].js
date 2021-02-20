import styles from '../../styles/Blog.module.scss';
import client from '../../utils/axiosConfig';

export default function Index({ title, text }) {
    return (
        <div className={styles.container}>
            {title}
        </div>
    )
}

export async function getStaticPaths() {
    const slugs = await client(`/blogs`).then(
        res => res.data.map(
            blog => ({ params: { slug: blog.slug } })
        ));

    return {
        paths: slugs,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const blog = await client(`/blogs?slug=${params.slug}`).then(res => res.data[0]);

    return {
        props: {
            title: blog.title,
            text: blog.title,
            image: blog.cover.url,
        },
        revalidate: 10
    }
}