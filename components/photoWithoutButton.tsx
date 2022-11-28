import React from 'react';
import styles from "../styles/productPhoto2.module.scss";

type props = {pic:
    {url: string, id: number, title:string, age:string},
    children: React.ReactNode,
};

function PhotoWithoutButton({pic, children}: props){
    const colors: string[] = ["red", 'green', 'black', "white", "pink", "brown"];
    return (<>
        <div className={styles.grid_item}>
        <img src={pic.url} alt={pic.title} className={styles.img}/>
        <p className={styles.title}>{pic.title}</p>
        <p className={styles.age}>{pic.age}</p>
        <div className={styles.color_grid}>
           {colors.map((color)=>{return <div className={styles.square} style={{backgroundColor: `${color}`}}></div>})}
        </div>
        </div>
        {children}
        </>);
}

export default PhotoWithoutButton;