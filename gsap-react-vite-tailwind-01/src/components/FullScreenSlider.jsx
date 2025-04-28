import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { fetchImages } from '../services/unsplashService'; // Adjust path as needed

const FullScreenSlider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);
    const numRef = useRef([]);
    const numOfImg = 8; // Number of images to fetch

    // Initialize GSAP animations
    const { contextSafe } = useGSAP(() => {
        if (images.length === 0 || isLoading) return;

        // Set initial clip-path for all slides except the first
        slidesRef.current.forEach((slide, index) => {
            if (slide) {
                if (index === 0) {
                    gsap.set(slide, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
                } else {
                    gsap.set(slide, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });
                }
            }
        });
    }, [images, isLoading]);

    // Fetch images from Unsplash API
    useEffect(() => {
        const loadImages = async () => {
            try {
                setIsLoading(true);
                const fetchedImages = await fetchImages(numOfImg);
                setImages(fetchedImages);
            } catch (error) {
                console.error('Error in component:', error);
                // You might want to set some error state here
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    const animateWithClipPath = contextSafe((direction) => {
        const nextIndex = direction === 'next'
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;

        const currentSlide = slidesRef.current[currentIndex];
        const nextSlide = slidesRef.current[nextIndex];

        if (!currentSlide || !nextSlide) return;

        const tl = gsap.timeline();

        // Animate current slide out
        tl.to(currentSlide, {
            clipPath: direction === 'next'
                ? 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'  // Slide up
                : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // Slide down
            duration: 0.8,
            ease: 'power2.inOut'
        });

        // Animate next slide in
        tl.to(nextSlide, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => setCurrentIndex(nextIndex)
        }, '-=0.6'); // Overlap animations

        // Number animation
        const t2 = gsap.timeline();
        t2.to('.num-c', {
            duration: 0.8,
            y: (currentIndex >= 0) ? -(nextIndex * 25) : (nextIndex * 25),
            ease: 'power2.inOut'
        })
        const t3 = gsap.timeline();
        t3.to('.title-c', {
            duration: 0.8,
            y: 0,
            ease: 'power2.inOut'
        });
    });

    const goNext = () => animateWithClipPath('next');
    const goPrev = () => animateWithClipPath('prev');

    if (isLoading) {
        return <div className="w-screen h-screen flex justify-center items-center">Loading images...</div>;
    }

    if (images.length === 0) {
        return <div className="w-screen h-screen flex justify-center items-center">No images available</div>;
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
            <div ref={numRef} className="absolute top-0 left-0 w-screen h-screen z-10">
                <div className="flex p-4 justify-center flex-row items-center gap-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className='w-[400px] overflow-hidden'>
                        <div className='title-c'>
                            {images.map((_, index) => (
                                <div key={index} className='flex justify-center items-center w-[400px] overflow-hidden'>
                                    <span>{_.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="prev h-screen w-[50%] absolute top-0 left-0 text-white text-4xl font-semibold z-10000" onClick={goPrev}>
                    +
                </button>
                <button className="next h-screen w-[50%] absolute top-0 right-0 text-white text-4xl font-semibold z-10000" onClick={goNext}>
                    +
                </button>
                <div className="flex p-4 justify-center flex-row items-center gap-0 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className='w-[25px] h-[25px] overflow-hidden'>
                        <div className='num-c'>
                            {images.map((_, index) => (
                                <div key={index} className='flex justify-center items-center w-[25px] h-[25px] overflow-hidden'>
                                    <span>{index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className='text-white font-semibold w-[25px] h-[25px]'>| {images.length}</span>
                </div>
            </div>
            <div className="full-screen z-0" ref={sliderRef}>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="slide"
                        ref={el => (slidesRef.current[index] = el)}
                    >
                        <h1 className='title text-white text-center text-4xl font-semibold'>{image.title}</h1>
                        <img src={image.url} alt={image.alt} className='opacity-50'/>
                    </div>
                ))}
                <div className='absolute bottom-4 left-0 flex flex-row justify-end items-center w-screen  z-10'>
                    {images.map((image, index) => (
                        <div className='w-[75px] h-[50px] overflow-hidden'>
                            <img src={image.thumbUrl} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullScreenSlider;