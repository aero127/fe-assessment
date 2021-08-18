import React, {useState} from 'react';
import styles from "./ProductComponent.module.css"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs"

const ProductComponent = ({product}) => {
    const[current, setCurrent] = useState(0);
    const length = product.images.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if (!Array.isArray(product.images) || length <= 0 ) {
        return null;
    }

    return (
        <div className={styles["products-map-container"]}>
            <div className={styles["products-container"]}>
            {length > 1 ?
            <section className={styles["slider"]}>
                {current === 0 ?
                    <BsChevronLeft color="grey" className={styles["left-arrow"]}/>
                    :
                <BsChevronLeft color="black" className={styles["left-arrow"]} onClick={prevSlide}/>}
                {product.images.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.preview} alt="preview" className="image"/>)}
                        </div>
                    )
                })}
                {current === length -1 ?
                    <BsChevronRight color="grey" className={styles["right-arrow"]}/>
                :
                <BsChevronRight color="black" className={styles["right-arrow"]} onClick={nextSlide}/>}
            </section>
            :
            <section className={styles["single-image"]}>
                <img src={product.images[0].preview}/>
            </section>}
            </div>
        </div>
    );
}

export default ProductComponent;