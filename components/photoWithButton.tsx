import React from 'react';
import styles from "../styles/photos.module.scss";
import { useRouter } from "next/router";


type props = {
    picture: { id: number, image: string, label: string, title: string, price: string | null },
    place: string,
    children: React.ReactNode,
};


function PhotoWithButton({ picture, place, children }: props) {
    const router = useRouter();

    return (<>
    {place === "main" ?
        <div className={styles.grid_item}>
            <img src={picture.image} alt={picture.title} className={styles.img} />
            {children}
        </div>
    :
        <div className={styles.seller_grid_item}>
            <img src={picture.image} alt={picture.title} className={styles.img} onClick={() => router.push(`/seller/upload/${picture.id}`)}/>
            {children}
        </div>
    }
    </>
    );
}

export default PhotoWithButton;
