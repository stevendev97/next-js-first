import { Formik, ErrorMessage } from 'formik'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css'
import * as Yup from 'yup'
import { useState } from 'react';


export default function Register() {
    interface formValues {
        firstName: string,
        lastName: string,
        email: string,
        password: string | number
    }

    const [usersInfos, setUsersInfos] = useState<formValues[]>([])
    const router = useRouter();

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be last than 15 characters')
            .required('Require'),
        lastName: Yup.string()
            .max(25, 'Must be last than 25 characters')
            .required('Require'),
        email: Yup.string()
            .email('This email is invalid')
            .required('Require'),
        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Require'),
    })

    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__header}>
                <h1>CREATE AN ACCOUNT</h1>
                <p>We never save credit card information.</p>
                <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
            </div>

            <Formik<formValues>
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }} onSubmit={(values: formValues, { resetForm }): void => {
                    setUsersInfos(prev => [...prev, values])
                    resetForm({
                        values: {
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        }
                    })
                    router.replace('/')
                }}

                validationSchema={validate}
            >
                {props => (
                    <form className={styles.register__form} autoComplete='off' onSubmit={props.handleSubmit}>
                        <label>
                            First Name
                        </label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.firstName}
                            name="firstName"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='firstName' />
                        </span>
                        <label>
                            Last Name
                        </label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.lastName}
                            name="lastName"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='lastName' />
                        </span>
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                            autoComplete='off'
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='email' />
                        </span>

                        <label>
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='password' />
                        </span>
                        <button type="submit">Register</button>
                        <div className={styles.span__wrapper}>
                            <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>

                            <p>Already have an account? <Link href='/login'>Login</Link></p>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}