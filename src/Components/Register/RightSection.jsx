import React, { useState, useEffect } from 'react';
import { Avatar, Button, TextField, Paper, Box, Grid, Typography, Autocomplete } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RightSection({ handleSubmit, errors }) {
    const defaultTheme = createTheme();
=======
import axios from 'axios';

export default function RightSection({ handleSubmit, errors }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [countries, setCountries] = useState([]);

    const handleSelectChange = (event, newValue) => {
        setSelectedOption(newValue);
    };

    const loadCountries = async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode');
            setCountries(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadCountries();
    }, []);

>>>>>>> c8a1233ed989d1cc2c36adc16af737b6a0002614
    return (
        <ThemeProvider theme={defaultTheme}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: { xs: 6, md: 14 },
                    mx: { xs: 4, md: 8 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4">
                    <b>Register</b>
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        required
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => `${option.name}`}
                        onChange={handleSelectChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                id="country"
                                name="country"
                                label="Country"
                                margin="normal"
                                fullWidth
                                required
                                error={!!errors.selectedOption}
                                helperText={errors.selectedOption}
                            />
                        )}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        autoComplete="city"
                        required
                        error={!!errors.city}
                        helperText={errors.city}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="warning"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            Already have an account?{' '}
                            <Link to="/" variant="body2">
                                {'Login'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
        </ThemeProvider>

    );
}
