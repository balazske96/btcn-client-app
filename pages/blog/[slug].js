import styles from '../../styles/Blog.module.scss';
import client from '../../utils/axiosConfig';
import convertMarkdownToHtml from '../../utils/markdown';
import EmptyBanner from '../../components/EmptyBanner/EmptyBanner';


export default function Index({ title, text, image }) {
    return (
        <div className={styles.container}>
            <EmptyBanner link='/' linkText='Home' />
            <div className={styles.titleContainer}>
                <h1>
                    {title}
                </h1>
            </div>
            <img className={styles.cover} src={process.env.API_BASE_URL + image} />
            <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(text) }} />
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
            text: blog.text,
            image: blog.cover.url,
        },
        revalidate: 10
    }
}