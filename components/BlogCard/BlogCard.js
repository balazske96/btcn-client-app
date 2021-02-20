import styles from './BlogCard.module.scss';
import { useRouter } from 'next/router';

export default function BlogCard({ image, title, description, slug }) {

    const router = useRouter();

    const handleReadMoreClicked = () => {
        router.push(`/blog/${slug}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.cover} style={{ backgroundImage: `url(${process.env.API_BASE_URL + image})` }} />
                <div className={styles.titleContainer}>
                    <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className={styles.readMoreButtonContainer}>
                    <div className={styles.readMoreButton} onClick={handleReadMoreClicked}>
                        <div className={styles.yellowSquare} />
                        Read more
                    </div>
                </div>
            </div>
        </div>
    )
}