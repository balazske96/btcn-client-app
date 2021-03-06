import client from '../../utils/axiosConfig';
import styles from './Summaries.module.scss';
import SummaryCard from '../SummaryCard/SummaryCard';
import React from 'react';

export default function Summaries({ summaries }) {

    const [moreSummariesOpened, setMoreSummariesOpened] = React.useState(false);
    const defaultNumberOfRenderedSummaries = 4;


    const renderSummaries = () => {

        if (moreSummariesOpened) {
            return summaries.map(summary => (
                <SummaryCard
                    text={summary.text}
                    title={summary.title}
                    negativums={[summary.negative_1, summary.negative_2, summary.negative_3]}
                    positivums={[summary.positive_1, summary.positive_2, summary.positive_3]}
                    slug={summary.link}
                />
            ))
        }

        return summaries.map((summary, index) => {

            if (index >= defaultNumberOfRenderedSummaries)
                return;
            return (
                <SummaryCard
                    text={summary.text}
                    title={summary.title}
                    negativums={[summary.negative_1, summary.negative_2, summary.negative_3]}
                    positivums={[summary.positive_1, summary.positive_2, summary.positive_3]}
                    slug={summary.link}
                />
            )
        })

    }

    return (
        <div className={styles.container} id='reviews'>
            <div className={styles.titleContainer}>
                <h2>Short casino summaries</h2>
            </div>
            <div className={styles.summaryCardContainer}>
                {
                    renderSummaries()
                }
            </div>
            {!moreSummariesOpened && summaries.length > defaultNumberOfRenderedSummaries &&
                <div className={styles.moreButtonContainer}>
                    <button onClick={() => setMoreSummariesOpened(true)}>Show More</button>
                </div>
            }
        </div>
    )
}
