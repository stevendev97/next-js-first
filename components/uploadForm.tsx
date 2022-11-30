import { Formik, ErrorMessage } from 'formik'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/upload.module.css'
import * as Yup from 'yup'
import { useState, useContext } from 'react';
import loginContext from '../contexts/loginContext';
import PopupContext from '../contexts/popupContext';
import { Diversity1 } from '@mui/icons-material';


export default function Upload() {
    interface formValues {
        picture: string,
        description: string,
        category: string,
        size: string,
        color: string,
        sign: string,
        amount: number,
    }

    const [usersInfos, setUsersInfos] = useState<formValues[]>([])
    const {popup, setPopup} = useContext(PopupContext);
    const router = useRouter();
    const {loginStatus, setLoginStatus} = useContext(loginContext);

    const categories:string[] = ["Women's Shoes", "Women's Apparel", "Men's Shoes", "Men's Apparel"];
    const sizes:string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    const colors: string[] = ["Blue", "Red", "Green", "White", "Grey", "Purple", "Brown", "Yellow", "Black"];
    const dollar_signs: string[] = ["€","$","￡","￥"];

    

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
                    setUsersInfos(prev => [...prev, values])
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
                    const response = await fetch('http://localhost:8081/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // username: values.email,
                        // password: values.password,
                        }),
                    });
                    const data = await response.json();
                    if (data.succeess) {
                        setLoginStatus(true);
                        router.replace('/');
                    }
                    console.log(data);
                }}

                validationSchema={validate}
            >
                {props => (
                    <form className={styles.upload__form} autoComplete='off' onSubmit={props.handleSubmit}>
                        <label>
                            PICTURE
                        </label>
                        <br/>
                        {/* <input type="file"/> */}
                        <input
                            type="file"
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            multiple
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.picture}
                            name="picture"
                        />
                        <div className={styles.error_message}>
                            <ErrorMessage name='picture' />
                        </div>
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
                        <button type="reset">Reset</button>
                        <button type="submit" onClick={()=>{setPopup(true);}}>Upload</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}