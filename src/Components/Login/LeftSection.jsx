import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Copyright from '../Copyright/Copyright';

export default function LeftSection({ quotes, currentQuoteIndex, setCurrentQuoteIndex }) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [quotes, setCurrentQuoteIndex]);

    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                position: 'relative',
                backgroundImage: 'url(https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    my: 16,
                    mx: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    textAlign: 'center',
                    padding: '2rem',
                }}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                        marginBottom: '1rem',
                        color: '#fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        fontWeight: 'bold',
                        pr: { xs: '0px', md: '214px' },
                        opacity: 1,
                    }}
                >
                    Cook Your,
                </Typography>
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                        marginBottom: '1rem',
                        color: '#fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        fontWeight: 'bold',
                        pl: { xs: '0px', md: '214px' },
                        opacity: 1,
                    }}
                >
                    Meal Perfectly,
                </Typography>
                <br />
                <br />
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#fff',
                        fontStyle: 'italic',
                        marginTop: '0.5rem',
                        letterSpacing: '0.5px',
                        lineHeight: '1.5',
                        fontSize: { xs: '18px', md: '23px' },
                        opacity: 1,
                        transition: 'opacity 0.5s ease-in-out',
                        fontWeight: 'bold',
                    }}
                >
                    {quotes[currentQuoteIndex]}
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                    padding: '1rem',
                }}
            >
              <Copyright/>
            </Box>
        </Grid>
    );
}
