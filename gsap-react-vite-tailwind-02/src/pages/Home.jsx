import { useEffect, useRef, useState } from 'react';
import { fetchImages } from '../services/unsplashService';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Home() {
  const numOfImg = 24;
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const imgRef = useRef([]);

  // Fetch images
  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const fetchedImages = await fetchImages(numOfImg);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, []);

  // Initialize GSAP animations
  const { contextSafe } = useGSAP(() => {
    if (images.length === 0 || isLoading) return;

    // Set initial clip-path for all slides except the first
    // slidesRef.current.forEach((slide, index) => {
    //     if (slide) {
    //         if (index === 0) {
    //             gsap.set(slide, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', scale: 1 });
    //         } else {
    //             gsap.set(slide, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', scale: 1.1 });
    //         }
    //     }
    // });

    // Set initial thumbnail styles
    imgRef.current.forEach((thumb, i) => {
      const ang = (i / numOfImg) * Math.PI * 2;
      const x = 300 * Math.cos(ang);
      const y = 300 * Math.sin(ang);
      // const cardIndex = i % 20;

      if (thumb) {
        // set position
        // gsap.set(thumb, {
        //   x: 0 * Math.cos(ang),
        //   y: 0 * Math.sin(ang),
        //   scale: 1,
        //   rotation: 0,
        //   transformPerspective: 400,
        //   transformOrigin: "center center",
        // });
        gsap.to(thumb, { x: 0, y: 0 })

        gsap.to(thumb, {
          x,
          y,
          scale: 1,
          rotation: (ang * 180) / Math.PI + 90,
          transformPerspective: 400,
          transformOrigin: "center center"
        });
        
        // gsap.to(".img-wrapper", {
        //   onStart: () => {
        //     gsap.to(thumb, { x: 0, y: 0 })
        //   }
        // });

      }
    });
  }, [images, isLoading]);

  if (isLoading) {
    return <div className="slider-loading">Loading images...</div>;
  }

  if (images.length === 0) {
    return <div className="slider-error">No images available</div>;
  }


  return (
    <div className="h-screen flex justify-center items-center">

      <div className="img-wrapper">
        {images.map((image, index) => (
          <img
            key={image.id}
            className="img-card"
            ref={el => (imgRef.current[index] = el)}
            src={image.thumbUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
