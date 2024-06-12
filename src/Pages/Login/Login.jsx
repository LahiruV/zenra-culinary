import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from 'axios';
import LeftSection from '../../Components/Login/LeftSection';
import RightSection from '../../Components/Login/RightSection';

const defaultTheme = createTheme();

export default function Login() {
    const quotes = [
        "“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.” - Steve Jobs",
        "“Part of being a winner is knowing when enough is enough. Sometimes you have to give up the fight and walk away, and move on to something that’s more productive.” -Donald Trump",
        "“If you are hardworking and determined, you will make it and that’s the bottom line. I don’t believe in an easy way.” -Isabel dos Santos"
    ];
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        let errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address';
            setErrors(errors);
            return;
        }

        if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
            setErrors(errors);
            return;
        }

        let user = { email, password };

        try {
            const response = await axios.post("/user/login", user);

            if (response.data.message === true) {
                sessionStorage.setItem("cusmail", email);

                await Swal.fire({
                    title: "Success!",
                    text: "Login Success",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                });
                window.location.href = "/";
            } else {
                await Swal.fire({
                    title: "Error!",
                    text: "Login Not Successful",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "error"
                });
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
            await Swal.fire({
                title: "Error!",
                text: "Login Not Successful",
                icon: 'error',
                confirmButtonText: "OK",
                type: "error"
            });
            window.location.href = "/";
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <LeftSection quotes={quotes} currentQuoteIndex={currentQuoteIndex} />
                <RightSection handleSubmit={handleSubmit} errors={errors} />
            </Grid>
        </ThemeProvider>
    );
}
