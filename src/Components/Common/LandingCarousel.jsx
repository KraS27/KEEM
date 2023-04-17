import React from 'react';
import {Carousel} from "react-bootstrap";
import globe from "../../static/img/globe.jpg"
import miniGlobe from "../../static/img/miniglobe.jpg"
import windmills from "../../static/img/windmills.jpg"
import styles from "./LandingCarousel.module.css"

const LandingCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${styles.carouselImg}`}
                    src={globe}
                    alt="globe"
                />
                <Carousel.Caption>
                    <p className={styles.carouselCaptionText}>Управління відходами</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${styles.carouselImg}`}
                    src={miniGlobe}
                    alt="miniGlobe"
                />
                <Carousel.Caption>
                    <p className={styles.carouselCaptionText}>Охорона земель</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${styles.carouselImg}`}
                    src={windmills}
                    alt="windmills"
                />
                <Carousel.Caption>
                    <p className={styles.carouselCaptionText}>Атмосферне повітря</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default LandingCarousel;