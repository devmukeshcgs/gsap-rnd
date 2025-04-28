import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

// LocalStorage keys
const UNSPLASH_CACHE_KEY = 'unsplash_photos_cache';
const CACHE_EXPIRY_KEY = 'unsplash_cache_expiry';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours cache

const Slider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);
    const numRef = useRef([]);
    const numOfImg = 8; // Number of images to fetch

    // Fetch images from Unsplash API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Check if cached data exists and is still valid
                const cachedData = localStorage.getItem(UNSPLASH_CACHE_KEY);
                const cacheExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
                const now = new Date().getTime();

                if (cachedData && cacheExpiry && now < parseInt(cacheExpiry)) {
                    // Use cached data
                    setImages(JSON.parse(cachedData));
                    setIsLoading(false);
                    return;
                }

                const response = await fetch(
                    `https://api.unsplash.com/photos/random?count=${numOfImg}&client_id=vCptQPrXejSAM_Ef5tmQyTB6DgvYF1dLhdK0QLA5-L0`
                );
                const data = await response.json();
                console.log('Response Data :', data);
                const photosData = data.map(img => ({
                    id: img.id,
                    url: img.urls.regular,
                    alt: img.alt_description || 'Unsplash image'
                }))

                setImages(data.map(img => ({
                    id: img.id,
                    url: img.urls.regular,
                    alt: img.alt_description || 'Unsplash image'
                })));
                // STATIC Img
                // setImages(ststicImg);

                // Save to cache with expiry time
                localStorage.setItem(UNSPLASH_CACHE_KEY, JSON.stringify(photosData));
                localStorage.setItem(CACHE_EXPIRY_KEY, (now + CACHE_DURATION_MS).toString());

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                setIsLoading(false);
            }
        };
        fetchImages();
    }, []);


    // Initialize slider with clip-path animations
    useEffect(() => {
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


    const animateWithClipPath = (direction) => {
        const nextIndex = direction === 'next'
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;

        const currentSlide = slidesRef.current[currentIndex]; numRef
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
        //////////////////////////////////////////////////
        const curInd = currentIndex + 1;
        console.log(currentIndex, nextIndex);
        // Animate current slide out
        const t2 = gsap.timeline();
        t2.to('.num-c', {
            duration: 0.8,
            // y: direction === 'next' ? -(nextIndex * 50) : direction === 'prev' ? (curInd * 50) : 0,
            y: (currentIndex >= 0) ? -(nextIndex * 25) : (nextIndex * 25),
            ease: 'power2.inOut'
        }).to('.title-c', {
            duration: 0.8,
            y: 0,
            ease: 'power2.inOut'
        });

    };

    const goNext = () => animateWithClipPath('next');
    const goPrev = () => animateWithClipPath('prev');

    if (isLoading) {
        return <div className="slider-loading">Loading images...</div>;
    }

    if (images.length === 0) {
        return <div className="slider-error">No images available</div>;
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
            <div ref={numRef} className="absolute top-0 left-0 w-screen h-screen z-10">
                <div  className="flex  p-4 justify-center flex-row items-center gap-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className=' w-[400px] h-[125px] overflow-hidden'>
                        <div className='title-c '>
                            {images.map((_, index) => (
                                <div className='flex justify-center items-center   w-[400px] h-[125px] overflow-hidden'>
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
                <div   className="flex  p-4 justify-center flex-row items-center gap-0 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className=' w-[25px] h-[25px] overflow-hidden'>
                        <div className='num-c '>
                            {images.map((_, index) => (
                                <div className='flex justify-center items-center   w-[25px] h-[25px] overflow-hidden'>
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
                        <h1 className='title text-white text-center text-4xl font-semibold' >{image.title}</h1>
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
