import styles from './Introduction.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Introduction({ videoLink }) {

    const goToId = (id) => {
        location.hash = "#" + id;
    }

    return (
        <div className={styles.container} id='introduction'>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h2>Your Complete Bitcoin Casino Guide </h2>
                    {/* <h4>Your guide to crypto casino sites!</h4> */}
                    <p>Find the best and most trusted bitcoin casinos,
                        and the best bitcoin casino bonus offers, reviewed and listed.
                        Our Bitcoin Casino Lists will give you all the information needed
                        to start your journey into this fast growing market of crypto currency entertainment!
                    </p>
                </div>
            </div>
            <div className={styles.mediaContainer}>
                <iframe src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.arrowContainer} onClick={() => goToId('casinos')}>
                <p>VIEW LIST</p>
                <div className={styles.arrow}>
                    <ExpandMoreIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}
