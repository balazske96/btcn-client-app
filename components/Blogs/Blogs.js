import React from 'react';
import BitcoinLogo from '../../public/bitcoin.svg';
import BlogCard from '../BlogCard/BlogCard';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import styles from './Blogs.module.scss';
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Blogs({ blogs, text }) {

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };

    const sliderRef = React.useRef(null);

    const rightArrowClicked = () => {
        sliderRef.current.slickNext();
    }

    const leftArrowClicked = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className={styles.container} id="blog">
            <div className={styles.headerBanner}>
                <div className={styles.logo}>
                    <div className={styles.imageContainer}>
                        <BitcoinLogo className={styles.bitcoinLogo} />
                    </div>
                    <VerticalDivider color='#98A0A7' />
                    <div className={styles.logoName}>BITCOINCASINOLISTS</div>
                </div>
            </div>
            <div className={styles.blogSectionText} dangerouslySetInnerHTML={{ __html: text }} />
            <div className={styles.carouselContainer}>
                <div className={styles.leftArrow} onClick={leftArrowClicked}>
                    <ArrowBackIosIcon />
                </div>
                <Slider ref={sliderRef} {...carouselSettings}>
                    {
                        blogs.map(blog => (
                            <BlogCard
                                title={blog.title}
                                image={blog.cover.url}
                                description={blog.description}
                                text={blog.text}
                                slug={blog.slug}
                            />
                        ))
                    }
                </Slider>
                <div className={styles.rightArrow} onClick={rightArrowClicked}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}