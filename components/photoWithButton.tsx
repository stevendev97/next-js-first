import React from 'react';
import styles from "../styles/photos.module.scss";

type props = {picture:{id: number, image: string, label: string, title:string, price:string|null},
    place: string,
    children: React.ReactNode,
};


function PhotoWithButton({picture,place, children}:props){
    return (<div className={place === "main" ? styles.grid_item : styles.seller_grid_item}>
        <img src={picture.image} alt={picture.title} className={styles.img}/>
        {children}
    </div>);
}

export default PhotoWithButton;
