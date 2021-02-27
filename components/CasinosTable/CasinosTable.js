import styles from './CasinosTable.module.scss';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import client from '../../utils/axiosConfig';
import ReactStars from "react-rating-stars-component/dist/react-stars";
import CheckedIcon from '../../assets/check.svg';
import convertMarkdownToHtml from '../../utils/markdown';


export default function CasinosTable() {

    const [casinos, setCasinos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const loaderColor = "#162738";

    // Fetch casinos and stop loading
    React.useEffect(() => {
        client(`/casinos`)
            .then(res => {
                setCasinos(res.data);
            })
        setIsLoading(true);
    }, [])

    // Stop loading
    React.useEffect(() => {
        if (isLoading)
            setIsLoading(false)
    }, [casinos])

    return (
        <div className={styles.container} id="casinos">
            <h2>Best Bitcoin casino sites TOP 50 list</h2>
            <div className={styles.tableContainer}>
                {
                    isLoading ? (
                        <Loader type="ThreeDots" color={loaderColor} height={80} width={80} />
                    ) :
                        (

                            <div className={styles.table}>
                                <div className={styles.tableHeaderRow}>
                                    <div className={styles.tableHeaderCell}>Casino</div>
                                    <div className={styles.tableHeaderCell}>Rating</div>
                                    <div className={styles.tableHeaderCell}>Key Features</div>
                                    <div className={styles.tableHeaderCell}>Welcome Bonus</div>
                                    <div className={styles.tableHeaderCell}>Website</div>
                                </div>

                                {
                                    casinos.map(casino => (
                                        <div className={styles.tableRow}>

                                            <div className={styles.tableRankContainer}>
                                                {casino.rank}
                                            </div>

                                            <div className={styles.tableCell}>
                                                <img className={styles.casinoProfilePicture} alt="casino image"
                                                    src={process.env.API_BASE_URL + casino.image.formats.thumbnail.url} />
                                            </div>
                                            <div className={`${styles.tableCell} ${styles.starsContainer}`}>
                                                <ReactStars
                                                    count={5}
                                                    isHalf={false}
                                                    value={casino.rating}
                                                    edit={false}
                                                    size={30}
                                                    activeColor="#f99400"
                                                />
                                            </div>
                                            <div className={`${styles.tableCell} ${styles.keyFeaturesRowsContainer}`}>
                                                {
                                                    [casino.key_feature_1, casino.key_feature_2, casino.key_feature_3].map(record => (
                                                        <div className={styles.featureRow}>
                                                            <CheckedIcon />
                                                            {record}
                                                        </div>)
                                                    )}
                                            </div>
                                            <div className={styles.tableCell}>
                                                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(casino.bonus) }} className={styles.bonusTextContainer} />
                                            </div>
                                            <div className={styles.tableCell}>
                                                <GoToCasinoButton website={casino.link} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export function GoToCasinoButton({ website }) {
    return (
        <a href={website} target="_blank" rel="external">
            <div className={styles.goToCasinoButton}>
                <div>
                    visit site
                </div>
                <ExpandMoreIcon fontSize='small' />
            </div>
        </a>
    )
}
