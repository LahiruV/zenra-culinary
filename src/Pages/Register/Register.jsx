import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../../Components/Register/LeftSection';
import RightSection from '../../Components/Register/RightSection';
import { API_URL } from '../../APIUrl';

const defaultTheme = createTheme();

export default function Register() {
    const quotes = [
        "“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.” - Steve Jobs",
        "“Part of being a winner is knowing when enough is enough. Sometimes you have to give up the fight and walk away, and move on to something that’s more productive.” -Donald Trump",
        "“If you are hardworking and determined, you will make it and that’s the bottom line. I don’t believe in an easy way.” -Isabel dos Santos"
    ];
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const country = data.get('country');
        const city = data.get('city');
        const password = data.get('password');
        let errors = {};

        if (!name || !email || !password || !phone || !country || !city) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            });
            return;
        }

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

        try {
            const user = { email, password, name, phone, country, city};
            const response = await axios.post(`${API_URL}/auth/register`, user);

            if (response.data.message !== 'Email is Already Used') {
                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    type: 'success',
                }).then((okay) => {
                    if (okay) {
                        navigate('/');
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Email Already Taken',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    type: 'error',
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Error!',
                text: 'Registration Not Successful',
                icon: 'error',
                confirmButtonText: 'OK',
                type: 'error',
            });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>                
                <LeftSection quotes={quotes} currentQuoteIndex={currentQuoteIndex} />
                <RightSection handleSubmit={handleSubmit} errors={errors} />
            </Grid>
        </ThemeProvider>
    );
}
