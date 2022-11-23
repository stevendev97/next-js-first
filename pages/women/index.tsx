import React, {useState} from 'react';
import styles from "../../styles/productPhoto2.module.scss";



function PhotosGrid(){
    // const [hover, setHover] = useState<any>();
    // const pix: {url: string, id: number, title:string, age:number}[]= [
    //     {url: "https://i.scdn.co/image/ab6761610000e5eb7ac3385e1033229ea480dc9d", id: 1, title:"Mickey", age:20},
    //     {url:"https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_minnie_ddt-16970_3_4a2aa999.jpeg", id:2, title:"Minnie",age:20},
    //     {url:"https://nationaltoday.com/wp-content/uploads/2021/06/donald_duck.jpg", id:3, title:"Donald", age:20},
    //     {url: "https://ih1.redbubble.net/image.753369908.3683/flat,750x1000,075,f.u1.jpg", id:4, title:"Daisy", age:20},
    //     {url: "https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_goofy_ddt-16970_5d1d64dc.jpeg", id:5, title:'Goofy', age:20},
    //     {url:"https://static.wikia.nocookie.net/scrooge-mcduck/images/b/b6/Pluto_the_Pup.png", id:6, title:"Pluto", age:11}
    // ];
    const pix: {url: string, id: number, title:string, age:number}[]= [
        {url: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id: 1, title:"Mickey", age:20},
        {url:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:2, title:"Minnie",age:20},
        {url:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:3, title:"Donald", age:20},
        {url: "https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:4, title:"Daisy", age:20},
        {url: "https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:5, title:'Goofy', age:20},
        {url:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:6, title:"Pluto", age:11}
    ];
    const colors: string[] = ["red", 'green', 'black', "white", "pink", "brown"];
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

    let i = 0;

    return (
        <div className={styles.body}>
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
            return (
            <div className={styles.grid_extension}>
            <div className={styles.grid_item}>
            <img src={pic.url} alt={pic.title} className={styles.img}/>
            <p className={styles.title}>{pic.title}</p>
            <p className={styles.age}>{pic.age}</p>
           
            <div className={styles.color_grid}>
               {colors.map((color)=>{return <div className={styles.square} style={{backgroundColor: `${color}`}}></div>})}
            </div>
            {/* <div className={hover[pic.title] ? styles.size_section : styles.hide}> */}
            </div>
            <div className={styles.size_section}>
               <p>Quick Add</p>
               <div className={styles.size_grid}>
               {sizes.map((size)=>{return <div className={styles.square}>{size}</div>})}
               </div>
            </div>
        </div>);
        })
        }
        </div>

        
         </div>
    );
};

export default PhotosGrid;