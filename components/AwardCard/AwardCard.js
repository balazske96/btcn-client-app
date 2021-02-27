import styles from './AwardCard.module.scss';
import Trophy from '../../public/trophy.svg'
import React from "react";
import ReactStars from "react-rating-stars-component";
import CheckedIcon from "../../assets/check.svg";
import { GoToCasinoButton } from "../CasinosTable/CasinosTable";
import convertMarkdownToHtml from '../../utils/markdown';

export default function AwardCard({ place, image, rate, keyFeatures, description, link }) {
    console.log(keyFeatures)
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <div className={styles.placeContainer}>{place}</div>
                <Trophy className={styles.trophyIcon} />
                <img className={styles.casinoProfilePicture} alt="casino image"
                    src={process.env.API_BASE_URL + image} />
                <div className={styles.starsContainer}>
                    <ReactStars
                        count={5}
                        isHalf={false}
                        value={rate}
                        edit={false}
                        size={30}
                        activeColor="#f99400"
                    />
                </div>
                <div className={styles.keyFeaturesContainer}>
                    {keyFeatures.map(record => (
                        <div className={styles.featureRow}>
                            <CheckedIcon />
                            {record}
                        </div>)
                    )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(description) }} className={styles.bonusTextContainer} />
                <div className={styles.goToButtonContainer}>
                    <GoToCasinoButton website={link} />
                </div>
            </div>
        </div>
    );
}
