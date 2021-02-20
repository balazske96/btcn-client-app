import styles from './SummaryCard.module.scss';
import BitcoinLogo from '../../public/bitcoin.svg';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import PlusIcon from '../../public/plus.svg';
import MinusIcon from '../../public/minus.svg';
import { useRouter } from 'next/router'

export default function SummaryCard({ title, text, positivums, negativums, slug }) {

    const router = useRouter()

    const readMoreClicked = () => router.push(`/casino/${slug}`);

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles.imageContainer}>
                            <BitcoinLogo className={styles.bitcoinLogo} />
                        </div>
                        <VerticalDivider color='#98A0A7' />
                        <div className={styles.logoName}>BITCOINCASINOLISTS</div>
                    </div>
                </div>
                <h3>{title}</h3>
                <div className={styles.proContraContainer}>
                    <div className={styles.proColumn}>
                        <PlusIcon />
                        <ul>
                            {positivums.map(positive => (
                                <li className={styles.comparisonRow}>
                                    {positive}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.contraColumn}>
                        <MinusIcon />
                        <ul>
                            {negativums.map(negative => (
                                <li className={styles.comparisonRow}>
                                    {negative}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p>{text}</p>
                <div className={styles.readMoreButton} onClick={readMoreClicked}>
                    <div className={styles.horizontalDivider} />
                    read more
                </div>
            </div>
        </div>
    )
}