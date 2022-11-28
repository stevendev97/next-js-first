import React, { useState } from 'react';
import styles from "../styles/photos.module.scss";
import PhotoWithButton from "./photoWithButton";
import { useRouter } from "next/router";

type props = {
    pix: {url: string, label: string, title:string, age:number}[];
};

function PhotosGrid({pix}:props){
    const router = useRouter();
    const [cur_label, setCur_label] = useState('MEN');
    const labels: string[] = ["MEN", "WOMEN", "SIGN UP"]
    return (
        <div className="photoGrid_wrapper">
        <div className={styles.choice_labels}>
        {labels.map((label)=>{return <>
        {label === cur_label ? <button className={styles.choice_underlined} 
        onClick={()=>{setCur_label(label);}}>{label}</button> 
        : <button className={styles.choice} 
        onClick={()=>{setCur_label(label);}}>{label}</button>}
        </>})}
        </div>
        <br/>
        {pix.filter((pic)=>{return pic.label === cur_label}).map((pic)=>{
            return (<PhotoWithButton picture={pic}>
            <button className={styles.buttons} onClick={()=>{
                if(pic.title === "Become Our Member"){
                    router.push('/register')
                } else{
                    router.push(`/${pic.title.split(" ")[1].toLowerCase()}`)
                }
                }}>
            {pic.title}
            </button>
            </PhotoWithButton>
            );
        })
        }
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
            return (<PhotoWithButton picture={pic}>
            <button className={styles.buttons} onClick={()=>{
                if(pic.title === "Become Our Member"){
                    router.push('/register')
                } else{
                    router.push(`/${pic.title.split(" ")[1].toLowerCase()}`)
                }
                }}>
            {pic.title}
            </button>
            </PhotoWithButton>);
        })
        }
        </div>
        </div>
    );
};

export default PhotosGrid;