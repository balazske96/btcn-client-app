import styles from './SecondIntroduction.module.scss';

export default function SecondIntroduction({text}){
    return (
        <div className={styles.container}>
            <div className={styles.blogSectionText} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}