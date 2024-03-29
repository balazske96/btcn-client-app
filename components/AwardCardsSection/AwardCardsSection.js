import styles from './AwardCardsSection.module.scss';
import AwardCard from '../AwardCard/AwardCard';
import Loader from "react-loader-spinner";
import React from "react";


export default function AwardCardsSection({ topCasinos }) {

    const renderKeyFeatures = (casino) => {
        let result = new Array();
        result[0] = casino.key_feature_1;
        result[1] = casino.key_feature_2;
        result[2] = casino.key_feature_3;
        return result;
    }

    return (
        <div className={styles.container} id='awards'>
            <div className={styles.textContainer}>
                <h2>Best Bitcoin Gambling Sites - 2020</h2>
                <h3>Best Bitcoin casino sites TOP 3 list</h3>
            </div>
            <div className={styles.cardsContainer}>
                {
                    topCasinos.map((casino, index) => {
                        return (
                            <AwardCard
                                key={index}
                                image={casino.image.url}
                                place={casino.rank}
                                rate={casino.rating}
                                keyFeatures={renderKeyFeatures(casino)}
                                description={casino.bonus}
                                link={casino.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

