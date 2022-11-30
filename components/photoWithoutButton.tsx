import React, {useState} from 'react';
import styles from "../styles/productPhoto2.module.scss";

type props = {pic:
    {url: string, id: number, title:string, price:string},
};

function PhotoWithoutButton({pic}: props){
    const [clickedColor, setClickedColor] = useState<string>('');
    const [clickedSize, setClickedSize] = useState<string>('');
    const colors: string[] = ["blue", "red", 'green', 'white', 'grey', 'purple', "brown", 'yellow', 'black', "pink"];
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    return (<>
        <div className={styles.grid_item}>
        <img src={pic.url} alt={pic.title} className={styles.img}/>
        <p className={styles.title}>{pic.title}</p>
        <p className={styles.age}>{pic.price}</p>
        <div className={styles.color_grid}>
           {colors.map((color)=>{return <div className={color === clickedColor ? styles.clicked_square 
            : styles.square} style={{backgroundColor: `${color}`}} onClick={()=>{setClickedColor(color)}}></div>})}
        </div>
        </div>
        <div className={styles.size_section}>
               <p>Quick Add</p>
               <div className={styles.size_grid}>
               {sizes.map((size)=>{return <div className={size === clickedSize ? styles.clicked_square 
                : styles.square} onClick={()=>{setClickedSize(size)}}>{size}</div>})}
               </div>
            </div>
        </>);
}

export default PhotoWithoutButton;