import { Formik, ErrorMessage, validateYupSchema } from 'formik'
import Link from 'next/link';
import { useRouter } from 'next/router';
import type {RootState} from '../redux/store';
import {append_product} from '../redux_reducer/productsSlice';
import styles from '../styles/upload.module.css'
import * as Yup from 'yup'
import { useState, useContext } from 'react';
import loginContext from '../contexts/loginContext';
import PopupContext from '../contexts/popupContext';
import { Diversity1 } from '@mui/icons-material';
import {useDispatch} from 'react-redux'
import { connect } from "react-redux"

type props = {
    all_items: {id:number, image: string, label: string, title:string, price:string}[],
    append_product: any
}

function getPic(url: string){
    const urlArray = url.split('\\');
   return `/${urlArray[urlArray.length-1]}`;
}
const handleReset = (resetForm: any) => {
    if (window.confirm('Reset?')) {
      resetForm();
    }
  };
  

function Upload({all_items, append_product}: props) {
    interface formValues {
        picture: string,
        description: string,
        category: string,
        size: string,
        color: string,
        sign: string,
        amount: number,
    }
    
    // const [usersInfos, setUsersInfos] = useState<formValues[]>([])
    const {popup, setPopup} = useContext(PopupContext);
    const router = useRouter();
    const {loginStatus, setLoginStatus} = useContext(loginContext);
    const dispatch = useDispatch()

    const categories:string[] = ["Women's Shoes", "Women's Apparel", "Men's Shoes", "Men's Apparel"];
    const sizes:string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL",'7','8','9','10','11','12','13','14'];
    const colors: string[] = ["Blue", "Red", "Green", "White", "Grey", "Purple", "Brown", "Yellow", "Black"];
    const dollar_signs: string[] = ["€","$","￡","￥"];

    const [imgSrc, setImgSrc] = useState<any>("");

    

    const validate = Yup.object({
        description: Yup.string()
            .max(500, 'Must be less than 500 characters')
            .required('Description is require!'),
        category: Yup.string()
            .required("Please select a category")
            .oneOf(categories),
        size: Yup.string()
            .required("Please select a size")
            .oneOf(sizes),
        color: Yup.string()
            .required("Please select a color")
            .oneOf(colors),
        sign:Yup.string()
            .required("Please select a sign")
            .oneOf(dollar_signs),
        amount:Yup.number()
            .required('Amount is require!')
    })

    return (
        <div className={styles.upload__form__wrapper}>
            <div className={styles.form__header}>
                <h1>UPLOAD AN ITEM</h1>
                <p>Please fill in every entry.
                </p>
            </div>

            <Formik<formValues>
                initialValues={{
                    picture:'',
                    description: '',
                    category: '',
                    size: '',
                    color: '',
                    sign: '',
                    amount: 0.00,
                }} onSubmit={async (values: formValues, { resetForm }): Promise<void> => {
                    // setUsersInfos(prev => [...prev, values])
                    resetForm({
                        values: {
                            picture:'',
                            description: '',
                            category: '',
                            size: '',
                            color: '',
                            sign: '',
                            amount: 0.00,
                        }
                    })
                    // const response = await fetch('http://localhost:8081/users', {
                    // method: 'POST',
                    // headers: {
                    //     'Content-Type': 'application/json',
                    // },
                    // body: JSON.stringify({
                    //     // username: values.email,
                    //     // password: values.password,
                    //     }),
                    // });
                    // const data = await response.json();
                    // if (data.succeess) {
                    //     setLoginStatus(true);
                    //     router.replace('/');
                    // }
                    // console.log(data);
                    // props.setFieldValue('picture', e.target.files[0])
                    const picPath = getPic(values.picture);
                    dispatch(append_product({id:new Date().valueOf(), image: picPath, label: values.category
                        , title:values.description, price:`${values.sign}${values.amount}`}));
                    console.log(values);
                }}

                validationSchema={validate}
            >
                {props => (
                    <form className={styles.upload__form} autoComplete='off' onSubmit={props.handleSubmit}>
                        <label>
                            PICTURE
                        </label>
                        <br/>
                        <input
                            type="file"
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            // multiple
                            onChange={(e) => {
                                let reader = new FileReader();
                                if(e.target.files){
                                    reader.readAsDataURL(e.target.files[0]); 
                                    reader.onload = ((e) => {
                                        setImgSrc(e.target?.result)
                                    });
                                    props.handleChange(e);
                                    // props.setFieldValue("picture", `${e.target.value.split('\\')[-1]}`);
                                }
                            }}
                            // onChange={(e)=>{if (e.target.files) {
                            
                              
                            //   let files = e.target.files;
                            //   console.log(files);
                            //   let reader = new FileReader();
                            // //   reader.onload = r => {
                            // //        console.log(r.target.result);
                            // //    };
                            // reader.readAsDataURL(files[0]);
                            
                            // props.setFieldValue("picture", reader);

                            // }
                            onBlur={props.handleBlur}
                            value={props.values.picture}
                            name="picture"
                        />
                        {
                            imgSrc ? (
                                <div className='uploaded-img'>
                                    <img src={imgSrc} alt="" />
                                </div>
                            ) : ""
                        }
                        <div className={styles.error_message}>
                            <ErrorMessage name='picture' />
                        </div>
                        {/* {props.values.picture && <img src={`$../../images/{props.values.picture.split('//')[-1]}`}/>} */}
                        <hr/>
                        <label>
                            DESCRIPTION
                        </label>
                        <br/>
                        <textarea
                            // type="text"
                            cols={80}
                            rows={10}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.description}
                            name="description"
                            className={styles.description}
                        />
                        <div className={styles.error_message}>
                            <ErrorMessage name='description' />
                        </div>
                        <hr/>
                        <label>
                            INFO
                        </label>
                        <br/>
                        <label>
                            Category:
                        </label>
                        <br/>
                        {
                            categories.map((item, i) => <div key={i}><input
                            type="radio"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={item}
                            name="category"
                        />
                        <label htmlFor={item}>{item}</label></div>)
                        }
                        {/* <input
                            type="radio"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.category}
                            name="category"
                        /> */}
                        <div className={styles.error_message}>
                            <ErrorMessage name='category' />
                        </div>
                        <br/>
                        <label>
                            Size:
                        </label>
                        <br/>
                        <select
                            name="size"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur} 
                        >
                            <option value="" label="Select a size">
                            Select a size{" "}
                            </option>
                            {sizes.map((s) => {
                                return (<option value={s} label={s}>
                                       {" "}
                                       {s}
                                       </option>);
                            })}
                        </select>
                        {/* {
                            size.map((item, i) => <span key={i}><input
                            type="radio"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.category}
                            name="size"
                        />
                        <label htmlFor={item}>{item}</label></span>)
                        } */}
                        {/* <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                            autoComplete='off'
                        /> */}
                        <div className={styles.error_message}>
                            <ErrorMessage name='size' />
                        </div>
                        <br/>
                        <label>
                            Color: 
                        </label>
                        <br/>
                        <select
                            name="color"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur} 
                        >
                            <option value="" label="Select a color">
                            Select a color{" "}
                            </option>
                            {colors.map((c) => {
                                return (<option value={c} label={c}>
                                       {" "}
                                       {c}
                                       </option>);
                            })}
                        </select>
                        <div className={styles.error_message}>
                            <ErrorMessage name='color' />
                        </div>
                        <br/>
                        <label>
                            Price:
                        </label>
                        <br/>
                        <select
                            name="sign"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur} 
                        >
                            <option value="" label="Select a sign">
                            Select a sign{" "}
                            </option>
                            {dollar_signs.map((d) => {
                                return (<option value={d} label={d}>
                                       {" "}
                                       {d}
                                       </option>);
                            })}
                        </select>
                        <label>
                            amount:
                        </label>
                        <input
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.amount}
                            name="amount"
                        />
                        <br/>
                        <span className={styles.error_message}>
                            <ErrorMessage name='sign' />
                        </span>
                        <span className={styles.last_error_message}>
                            <ErrorMessage name='amount' />
                        </span>
                        <hr/>
                        <button type="reset" onClick={handleReset.bind(null, props.resetForm)}>Reset</button>  {/* reset picture entry? */}
                        <button type="submit" onClick={()=>{setPopup(true);}}>Upload</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    all_items: state.products.all_products,
});

const mapDispatchToProps = (dispatch: any) => ({
    append_product: append_product
});



export default connect(mapStateToProps, mapDispatchToProps)(Upload);
// import { Formik, ErrorMessage, validateYupSchema } from 'formik'
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import type {RootState} from '../redux/store';
// import {append_product} from '../redux_reducer/productsSlice';
// import styles from '../styles/upload.module.css'
// import * as Yup from 'yup'
// import { useState, useContext } from 'react';
// import loginContext from '../contexts/loginContext';
// import PopupContext from '../contexts/popupContext';
// import { Diversity1 } from '@mui/icons-material';
// import {useDispatch} from 'react-redux'
// import { connect } from "react-redux"

// type props = {
//     all_items: {id:number, image: string, label: string, title:string, price:string}[],
//     append_product: any
// }

// function Upload({all_items, append_product}: props) {
//     interface formValues {
//         picture: string,
//         description: string,
//         category: string,
//         size: string,
//         color: string,
//         sign: string,
//         amount: number,
//     }
    
//     // const [usersInfos, setUsersInfos] = useState<formValues[]>([])
//     const {popup, setPopup} = useContext(PopupContext);
//     const router = useRouter();
//     const {loginStatus, setLoginStatus} = useContext(loginContext);
//     const dispatch = useDispatch()

//     const categories:string[] = ["Women's Shoes", "Women's Apparel", "Men's Shoes", "Men's Apparel"];
//     const sizes:string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
//     const colors: string[] = ["Blue", "Red", "Green", "White", "Grey", "Purple", "Brown", "Yellow", "Black"];
//     const dollar_signs: string[] = ["€","$","￡","￥"];

    

//     const validate = Yup.object({
//         description: Yup.string()
//             .max(500, 'Must be less than 500 characters')
//             .required('Description is require!'),
//         category: Yup.string()
//             .required("Please select a category")
//             .oneOf(categories),
//         size: Yup.string()
//             .required("Please select a size")
//             .oneOf(sizes),
//         color: Yup.string()
//             .required("Please select a color")
//             .oneOf(colors),
//         sign:Yup.string()
//             .required("Please select a sign")
//             .oneOf(dollar_signs),
//         amount:Yup.number()
//             .required('Amount is require!')
//     })

//     return (
//         <div className={styles.upload__form__wrapper}>
//             <div className={styles.form__header}>
//                 <h1>UPLOAD AN ITEM</h1>
//                 <p>Please fill in every entry.
//                 </p>
//             </div>

//             <Formik<formValues>
//                 initialValues={{
//                     picture:'',
//                     description: '',
//                     category: '',
//                     size: '',
//                     color: '',
//                     sign: '',
//                     amount: 0.00,
//                 }} onSubmit={async (values: formValues, { resetForm }): Promise<void> => {
//                     // setUsersInfos(prev => [...prev, values])
//                     resetForm({
//                         values: {
//                             picture:'',
//                             description: '',
//                             category: '',
//                             size: '',
//                             color: '',
//                             sign: '',
//                             amount: 0.00,
//                         }
//                     })
//                     // const response = await fetch('http://localhost:8081/users', {
//                     // method: 'POST',
//                     // headers: {
//                     //     'Content-Type': 'application/json',
//                     // },
//                     // body: JSON.stringify({
//                     //     // username: values.email,
//                     //     // password: values.password,
//                     //     }),
//                     // });
//                     // const data = await response.json();
//                     // if (data.succeess) {
//                     //     setLoginStatus(true);
//                     //     router.replace('/');
//                     // }
//                     // console.log(data);
//                     // props.setFieldValue('picture', e.target.files[0])
//                     dispatch(append_product({id:new Date().valueOf(), image: values.picture, label: values.category
//                         , title:values.description, price:`${values.sign}${values.amount}`}));
//                     console.log(values);
//                 }}

//                 validationSchema={validate}
//             >
//                 {props => (
//                     <form className={styles.upload__form} autoComplete='off' onSubmit={props.handleSubmit}>
//                         <label>
//                             PICTURE
//                         </label>
//                         <br/>
//                         {/* <input type="file"/> */}
//                         <input
//                             type="file"
//                             accept="image/gif,image/jpeg,image/jpg,image/png"
//                             multiple
//                             onChange={props.handleChange}
//                             // onChange={(e)=>{if (e.target.files) {
                            
                              
//                             //   let files = e.target.files;
//                             //   console.log(files);
//                             //   let reader = new FileReader();
//                             // //   reader.onload = r => {
//                             // //        console.log(r.target.result);
//                             // //    };
//                             // reader.readAsDataURL(files[0]);
                            
//                             // // props.setFieldValue("picture", reader);

//                             // }
                            
//                             onBlur={props.handleBlur}
//                             value={props.values.picture}
//                             name="picture"
//                         />
//                         <div className={styles.error_message}>
//                             <ErrorMessage name='picture' />
//                         </div>
//                         {/* {props.values.picture && <img src={`$../../images/{props.values.picture.split('//')[-1]}`}/>} */}
//                         <hr/>
//                         <label>
//                             DESCRIPTION
//                         </label>
//                         <br/>
//                         <textarea
//                             // type="text"
//                             cols={80}
//                             rows={10}
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.description}
//                             name="description"
//                             className={styles.description}
//                         />
//                         <div className={styles.error_message}>
//                             <ErrorMessage name='description' />
//                         </div>
//                         <hr/>
//                         <label>
//                             INFO
//                         </label>
//                         <br/>
//                         <label>
//                             Category:
//                         </label>
//                         <br/>
//                         {
//                             categories.map((item, i) => <div key={i}><input
//                             type="radio"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={item}
//                             name="category"
//                         />
//                         <label htmlFor={item}>{item}</label></div>)
//                         }
//                         {/* <input
//                             type="radio"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.category}
//                             name="category"
//                         /> */}
//                         <div className={styles.error_message}>
//                             <ErrorMessage name='category' />
//                         </div>
//                         <br/>
//                         <label>
//                             Size:
//                         </label>
//                         <br/>
//                         <select
//                             name="size"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur} 
//                         >
//                             <option value="" label="Select a size">
//                             Select a size{" "}
//                             </option>
//                             {sizes.map((s) => {
//                                 return (<option value={s} label={s}>
//                                        {" "}
//                                        {s}
//                                        </option>);
//                             })}
//                         </select>
//                         {/* {
//                             size.map((item, i) => <span key={i}><input
//                             type="radio"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.category}
//                             name="size"
//                         />
//                         <label htmlFor={item}>{item}</label></span>)
//                         } */}
//                         {/* <input
//                             type="text"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.email}
//                             name="email"
//                             autoComplete='off'
//                         /> */}
//                         <div className={styles.error_message}>
//                             <ErrorMessage name='size' />
//                         </div>
//                         <br/>
//                         <label>
//                             Color: 
//                         </label>
//                         <br/>
//                         <select
//                             name="color"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur} 
//                         >
//                             <option value="" label="Select a color">
//                             Select a color{" "}
//                             </option>
//                             {colors.map((c) => {
//                                 return (<option value={c} label={c}>
//                                        {" "}
//                                        {c}
//                                        </option>);
//                             })}
//                         </select>
//                         <div className={styles.error_message}>
//                             <ErrorMessage name='color' />
//                         </div>
//                         <br/>
//                         <label>
//                             Price:
//                         </label>
//                         <br/>
//                         <select
//                             name="sign"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur} 
//                         >
//                             <option value="" label="Select a sign">
//                             Select a sign{" "}
//                             </option>
//                             {dollar_signs.map((d) => {
//                                 return (<option value={d} label={d}>
//                                        {" "}
//                                        {d}
//                                        </option>);
//                             })}
//                         </select>
//                         <label>
//                             amount:
//                         </label>
//                         <input
//                             type="number"
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.amount}
//                             name="amount"
//                         />
//                         <br/>
//                         <span className={styles.error_message}>
//                             <ErrorMessage name='sign' />
//                         </span>
//                         <span className={styles.last_error_message}>
//                             <ErrorMessage name='amount' />
//                         </span>
//                         <hr/>
//                         <button type="reset">Reset</button>
//                         <button type="submit" onClick={()=>{setPopup(true);}}>Upload</button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// const mapStateToProps = (state: RootState) => ({
//     all_items: state.products.all_products,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//     append_product: append_product
// });



// export default connect(mapStateToProps, mapDispatchToProps)(Upload);