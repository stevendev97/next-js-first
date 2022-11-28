import React from 'react';
import styles from "../styles/photos.module.scss";

type props = {picture:{url: string, label: string, title:string, age:number},
    children: React.ReactNode,
};


function PhotoWithButton({picture,children}:props){
    return (<div className={styles.grid_item}>
        <img src={picture.url} alt={picture.title} className={styles.img}/>
        {children}
    </div>);
}

export default PhotoWithButton;
