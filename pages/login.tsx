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


const StyledPaper = styled(Paper, {})(Style.paper)

const StyledButton = styled(Button, {})(Style.btn)

function Login() {
    const [name, setName] = useState<string>('admin');
    const [password, setPassword] = useState<string>('admin123');
    const router = useRouter();

    return (
        <div className="login_wrapper">
            <StyledPaper className="login_form">
                <Typography variant="h4" sx={{ textAlign: "center", margin: [1, 0, 3] }}>
                    Log In
                </Typography>
                <form onSubmit={(e) => {
                        e.preventDefault()
                            if (name === 'admin' && password === 'admin123') {
                                router.replace('/')
                            }
                        }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="UserName"
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        type="password"
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
                </form>
            </StyledPaper>
        </div>

    );

};

export default Login;