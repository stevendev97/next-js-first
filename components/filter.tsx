import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';

function Filter() {
    const [sizes, setSizes] = useState<string[]>(["XS", "S", "M", "L", "XL", "XXL", "XXXL"])
    const [wheather, setWheather] = useState<string[]>(["Everyday", "Runnung", "Warm Wheather", "Cool Wheather", "Wet Wheather"])
    const [material, setMaterial] = useState<string[]>(["Light & Soft Trino® Jersey", "Cozy & Durable Cotton Blend", "Soft & Breezy Trino®", "Light & Breezy Wool Stretch", "Soft & Sculpting Trino® Stretch", "Soft & Durable Trino Knit", "Soft & Cozy Wool"])
    const [colors, setColors] = useState<string[]>(["Blue", "Red", "Green", "White", "Grey", "Purple", "Brown", "Yellow", "Black"])
    return (
        <div className='filter_container'>
            <div className='filter_title'>
                <h1>Categories</h1>
                <button className='filter_btn'>FILTERS<TuneIcon /></button>
            </div>
            <div className='filter_options'>
                <span>Apparel</span>
                <span>Shoes</span>
            </div>
            <div className='filter_sidebar'>
                <h2>Filter By:</h2>
                <hr />
                <h2>Sizes</h2>
                <p>
                    Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.
                </p>
                <div className="filter_btn_contanier">
                    {
                        sizes.map((size, i) => <button key={i}>{size}</button>)
                    }
                </div>
                <hr />
                <h2>Best For</h2>
                <div className="filter_checkbox_contanier">
                    {
                        wheather.map((item, i) => <span key={i}><input type="checkbox" /><label>{item}</label></span>)
                    }
                </div>
                <hr />
                <h2>Materail</h2>
                <div className="filter_checkbox_contanier">
                    {
                        material.map((item, i) => <span key={i}><input type="checkbox" /><label>{item}</label></span>)
                    }
                </div>
                <hr />
                <h2>HUE</h2>
                <div className="filter_checkbox_contanier">
                    {

                        colors.map((item, i) => <span key={i}><input name='color' id={item} className='radio' type="radio" /><label htmlFor={item}>{item}</label></span>)

                    }
                </div>
            </div>
        </div>
    )
}

export default Filter