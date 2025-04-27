import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const ststicImg = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1743485237407-e00bfb75163e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Image 1',
        alt: 'Description 1'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1744429523595-2c06b8611242?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Image 2',
        alt: 'Description 2'
    },
    {
        id: 3,
        url: 'https://plus.unsplash.com/premium_photo-1671221672998-bab0510cfa57?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Image 3',
        alt: 'Description 3'
    },
]

const Slider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);

    // Fetch images from Unsplash API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?count=5&client_id="vCptQPrXejSAM_Ef5tmQyTB6DgvYF1dLhdK0QLA5-L0"`
                );
                const data = await response.json();
                console.log('Data:', data);

                // setImages(data.map(img => ({
                //     id: img.id,
                //     url: img.urls.regular,
                //     alt: img.alt_description || 'Unsplash image'
                // })));
                setImages(ststicImg);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Initialize slider animations when images load
    useEffect(() => {
        if (images.length === 0 || isLoading) return;

        // Hide all slides except the first one
        slidesRef.current.forEach((slide, index) => {
            if (index !== 0 && slide) {
                gsap.set(slide, { opacity: 0, scale: 0.8 });
            }
        });
    }, [images, isLoading]);

    const goToSlide = (index) => {
        if (index === currentIndex || index < 0 || index >= images.length) return;

        const currentSlide = slidesRef.current[currentIndex];
        const nextSlide = slidesRef.current[index];

        // Animation timeline
        const tl = gsap.timeline();

        tl.to(currentSlide, {
            opacity: 0,
            // scale: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        })
            .to(nextSlide, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => setCurrentIndex(index)
            }, '<0.3'); // Overlap animations slightly
    };

    const goNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        goToSlide(nextIndex);
    };

    const goPrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(prevIndex);
    };

    if (isLoading) {
        return <div className="slider-loading">Loading images...</div>;
    }

    if (images.length === 0) {
        return <div className="slider-error">No images available</div>;
    }

    return (
        <div className="slider-container">
            <div className="slider-content">
                <div className="slide-number">
                    {images.map((_, index) => (
                        <span className={`number ${index === currentIndex ? 'active' : ''}`}>{index}</span>
                    ))}
                </div>
                <button className="slider-button prev" onClick={goPrev}>
                    PREV
                </button>
                <button className="slider-button next" onClick={goNext}>
                    NEXT
                </button>

                <div className="slider-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="slider" ref={sliderRef}>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        ref={el => (slidesRef.current[index] = el)}
                    >
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Slider;