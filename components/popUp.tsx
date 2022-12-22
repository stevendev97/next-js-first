import React, {useContext} from 'react';
import { useRouter } from 'next/router';
import PopupContext from '../contexts/popupContext';

function PopUp(){
const router = useRouter();
const {popup, setPopup} = useContext(PopupContext);
return (<div className="pop_up_wrapper">
    <div className="pop_up">
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/party-popper_1f389.png"/>
<h3>You've successfully added an item into your selling list!</h3>
<button className="continue-btn" onClick={()=>{
    setPopup(false);
    // router.replace('/seller/upload');
    }}>Continue to add</button>
<button className="all-items-btn" onClick={()=>{router.replace('/seller');}}>See all</button>
</div>
</div>)
}

export default PopUp;