import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { appleImg, blueImg, heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const WaitList = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('reisze', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    }, [])

    return (
        <section className="w-full h-screen flex   relative justify-center items-center">
            <div className=" w-1/3">
                <p className="text-black text-center text-2xl font-bold font-serif">Join the waitlist</p>
            </div>
            <div className=" w-1/3">
                <img className="w-full h-50 object-cover" src={blueImg} alt="Image" />
            </div>
            <div className=" w-1/3">
                <p className="text-black text-center text-2xl font-bold font-serif">Join the waitlist</p>
            </div>
        </section>
    )
}

export default WaitList