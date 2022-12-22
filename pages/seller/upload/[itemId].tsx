import React, {useState} from 'react';
import Upload from '../../../components/uploadForm';
import SellerSidebar from '../../../components/seller_sidebar';
import PopUp from '../../../components/popUp';
import PopupContext from '../../../contexts/popupContext';
import {useRouter} from 'next/router';
import getProductId from '../../../lib/util/getProductId';
import type {RootState} from '../../../redux/store';
import { connect } from "react-redux";

type props = {
    all_items: {id:number, image: string, label: string, title:string, price:string}[],
}

function itemDetail({all_items}: props) {
    const router = useRouter();
    const itemId = getProductId(router.query.itemId);
    const [popup, setPopup] = useState<boolean>(false);

    return <div className="upload_page_wrapper">
        <PopupContext.Provider value={{popup, setPopup}}>
        <SellerSidebar/>
        <div className="uploading_form">
        <Upload itemId={itemId}/>
        </div>
        {popup && <PopUp/>}
        </PopupContext.Provider>
        </div>
};

const mapStateToProps = (state: RootState) => ({
    all_items: state.products.all_products,
});

export default connect(mapStateToProps)(itemDetail);