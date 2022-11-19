import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper
} from "@mui/material";
import { styled } from '@mui/system'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Style from '../componentsType/customInputStyle';
import { useRouter } from "next/router";
import { RouterRounded } from "@mui/icons-material";
import Link from 'next/link';

const StyledPaper = styled(Paper, {})(Style.paper)

const StyledButton = styled(Button, {})(Style.btn)
const StyledTextField = styled(TextField, {})(Style.TextField)

function Login() {
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loginFailed, setLoginFailed] = useState(false);
    const router = useRouter();

    return (
        <div className="login_wrapper">
            <StyledPaper className="login_form">
                <Typography variant="h4" sx={{ textAlign: "center", margin: [1, 0, 3], fontWeight: 'medium'}} color="black">
                    Log In
                </Typography>
                <form onSubmit={async (e) => {
                        e.preventDefault()
                        let formData = new FormData();
                        formData.append('username', `${name}`);
                        formData.append('password', `${password}`);
                        const response = await fetch('http://localhost:8081/login', {
                            method: 'POST',
                            body: formData,
                        })
                        const data = await response.json()
                
                        if (data.succeess) {
                            setLoginFailed(false);
                            router.replace('/');
                        }else{
                            setLoginFailed(true);
                            setName('');
                            setPassword('');
                        }
                        console.log(data)
                        }}>
                    <StyledTextField
                        variant="outlined"
                        margin="normal"
                        label="UserName"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                        required
                    />
                    <StyledTextField
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                        required
                    />
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Log In
                    </StyledButton>
                    {loginFailed && 
                    <Typography sx={{ fontSize: 16, textAlign: "center", fontWeight: 'light'}} color="red">
                        * Username or Password is not correct. Please try again.
                    </Typography>
                    }
                </form>
                <p>Don't have an account yet? <Link href='/register'>Register</Link></p>
            </StyledPaper>
        </div>

    );

};

export default Login;