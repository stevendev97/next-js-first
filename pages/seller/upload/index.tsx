import React, {useState} from 'react';
import Upload from '../../../components/uploadForm';
import SellerSidebar from '../../../components/seller_sidebar';
import PopUp from '../../../components/popUp';
import PopupContext from '../../../contexts/popupContext';


export default function UploadPage() {
    const [popup, setPopup] = useState<boolean>(false);
    return <div className="upload_page_wrapper">
        <PopupContext.Provider value={{popup, setPopup}}>
        <SellerSidebar/>
        <div className="uploading_form">
        <Upload itemId={undefined}/>
        </div>
        {popup && <PopUp/>}
        </PopupContext.Provider>
        </div>
}