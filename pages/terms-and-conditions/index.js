import styles from '../../styles/TermsAndConditions.module.scss';
import convertMarkdownToHtml from '../../utils/markdown';
import client from '../../utils/axiosConfig';
import EmptyBanner from '../../components/EmptyBanner/EmptyBanner';

export default function TermsAndConditions({ content }) {
    return (
        <div className={styles.container}>
            <EmptyBanner link='/' linkText='Home' />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }} />
        </div>

    )
}

export async function getStaticProps() {
    const TermsAndConditions = await client(`/terms-and-conditions`).then(res => res.data);

    return {
        props: {
            content: TermsAndConditions.content
        },
        revalidate: 10
    }
}