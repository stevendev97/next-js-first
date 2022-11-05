import React from 'react';
import styles from "../styles/photos.module.scss";



function PhotosGrid(){
    const pix: {url: string, id: number, title:string, age:number}[]= [
        {url: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/451706/item/goods_35_451706.jpg?width=750", id: 1, title:"Shop Men", age:20},
        {url:"https://im.uniqlo.com/global-cms/spa/res72e1bb01171b2a38ff292f6dadde0a6ffr.jpg", id:2, title:"Shop Women",age:20},
        {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", id:3, title:"Become Our Member", age:20}
    ]
    return (
        <div className={styles.body}>
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
            return (<div className={styles.grid_item}>
            <img src={pic.url} alt={pic.title} className={styles.img}/>
            {/* <p className={styles.title}>{pic.title}</p>
            <p className={styles.age}>{pic.age}</p> */}
            <button className={styles.buttons}>{pic.title}</button>
        </div>);
        })
        }
        </div>
         </div>
    );
};

export default PhotosGrid;