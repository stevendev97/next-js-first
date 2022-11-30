import React from 'react';
import styles from "../styles/photos.module.scss";

type props = {picture:{url: string, label: string, title:string, price:number|null},
    place: string,
    children: React.ReactNode,
};


function PhotoWithButton({picture,place, children}:props){
    return (<div className={place === "main" ? styles.grid_item : styles.seller_grid_item}>
        <img src={picture.url} alt={picture.title} className={styles.img}/>
        {children}
    </div>);
}

export default PhotoWithButton;
