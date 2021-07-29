import React from 'react'
import bgvideo from '../videos/tv-static.mp4'

export default function Video() {
    return (
        <video className="bg-video" autoPlay muted loop>
            <source src={bgvideo} type="video/mp4" />
        </video>
    )
}
