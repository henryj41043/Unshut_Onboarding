import React, { useState } from 'react';
import img0 from '../images/flash-of-img/img-0.jpeg';
import img1 from '../images/flash-of-img/img-1.jpeg';
import img2 from '../images/flash-of-img/img-2.jpeg';
import img3 from '../images/flash-of-img/img-3.jpeg';
import img4 from '../images/flash-of-img/img-4.jpeg';
import img5 from '../images/flash-of-img/img-5.jpeg';
import img6 from '../images/flash-of-img/img-6.jpeg';
import img8 from '../images/flash-of-img/img-8.jpeg';
import img9 from '../images/flash-of-img/img-9.jpeg';


export default function FlashOfImages() {
    const [index, setIndex] = useState(0)

    const images = [img0, img1, img2, img3, img4, img5, img6, img8, img9]

    setTimeout(
        () => {
            if (index < images.length) {
                setIndex(index+1)}
            } , 750
    )

    return (
        <div className= "img-container">
            <img className="flash-images" src={images[index]} alt="" />
        </div>
    )
}
