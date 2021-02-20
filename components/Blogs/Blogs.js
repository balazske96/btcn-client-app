import React from 'react';
import BitcoinLogo from '../../public/bitcoin.svg';
import BlogCard from '../BlogCard/BlogCard';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import styles from './Blogs.module.scss';
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Blogs({ blogs }) {

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
        <div className={styles.container}>
            <div className={styles.headerBanner}>
                <div className={styles.logo}>
                    <div className={styles.imageContainer}>
                        <BitcoinLogo className={styles.bitcoinLogo} />
                    </div>
                    <VerticalDivider color='#98A0A7' />
                    <div className={styles.logoName}>BITCOINCASINOLISTS</div>
                </div>
            </div>
            <div className={styles.textTitleContainer}>
                <h2>
                    Header
                </h2>
            </div>
            <p className={styles.text}>
                Proin a nulla arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pretium mauris id mauris pellentesque, eget facilisis purus feugiat. Suspendisse potenti. Nam tempor blandit ornare. Suspendisse porttitor velit ex, nec elementum eros consequat non. Fusce at mauris eget lacus tempus posuere ac placerat eros. Praesent et laoreet quam. Proin et felis sodales felis porta congue ut a dolor. Quisque vel commodo neque, et pulvinar dolor.
                <br />
                <br />
                Proin a nulla arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pretium mauris id mauris pellentesque, eget facilisis purus feugiat. Suspendisse potenti. Nam tempor blandit ornare. Suspendisse porttitor velit ex, nec elementum eros consequat non. Fusce at mauris eget lacus tempus posuere ac placerat eros. Praesent et laoreet quam. Proin et felis sodales felis porta congue ut a dolor. Quisque vel commodo neque, et pulvinar dolor.ű
                <br />
                <br />
                <br />
                Proin a nulla arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pretium mauris id mauris pellentesque, eget facilisis purus feugiat. Suspendisse potenti. Nam tempor blandit ornare. Suspendisse porttitor velit ex, nec elementum eros consequat non. Fusce at mauris eget lacus tempus posuere ac placerat eros. Praesent et laoreet quam. Proin et felis sodales felis porta congue ut a dolor. Quisque vel commodo neque, et pulvinar dolor.
            </p>
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