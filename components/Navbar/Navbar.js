import styles from './Navbar.module.scss';
import React from 'react';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import Link from 'next/link';
import BitcoinLogo from '../../public/bitcoin.svg';
import useWindowSize from "../../utils/useWindowSize";
import Drawer from '@material-ui/core/Drawer';


export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const { isMobileView } = useWindowSize();

    const commonMenuContent = (
        <ul>
            <Link href="#blog"><li>BLOG</li></Link>
            <Link href="#casinos"><li>CASINOS</li></Link>
            <Link href="#reviews"><li className={styles.buttonListElement}>REVIEW</li></Link>
        </ul>
    )

    if (isMobileView)
        return (
            <div className={styles.mobileContainer}>
                <div className={styles.hamburgerIconContainer}>
                    <div onClick={() => setIsMobileMenuOpen(true)}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <BitcoinLogo className={styles.bitcoinLogo} />
                </div>
                <Drawer open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    <div className={styles.mobileMenu}>
                        {commonMenuContent}
                    </div>
                </Drawer>
            </div>
        )

    return (
        <div className={styles.desktopContainer} id='navbar-desktop'>
            <div className={styles.upperRow}>
                <div className={styles.textContainer}>
                    <Link href='/'>
                        <a>Help</a>
                    </Link>
                    <VerticalDivider color='#F99400' />
                    <Link href='/terms-and-conditions   '>
                        <a>Terms and conditions</a>
                    </Link>
                </div>
            </div>
            <div className={styles.lowerRow}>
                <div className={styles.logo}>
                    <div className={styles.imageContainer}>
                        <BitcoinLogo className={styles.bitcoinLogo} />
                    </div>
                    <VerticalDivider color='#98A0A7' />
                    <div className={styles.logoName}>BITCOINCASINOLISTS</div>
                </div>
                <div className={styles.desktopMenu}>
                    {commonMenuContent}
                </div>
            </div>
        </div>
    )
}
