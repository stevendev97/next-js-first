import React from 'react';
import Filter from '../../components/filter';
import DetailPhotosGrid from '../../components/detailPhotosGrid';

function Women(){
return <div className="detailed_pix_wrapper">
    <Filter/>
    <div className="detail_pix_grid">
    <DetailPhotosGrid/>
    </div>
    </div>
}

export default Women;