import { Avatar, Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RightSection({ handleSubmit, errors }) {
    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: { xs: 8, md: 14 },
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
                        <b>Login</b>
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            required
                            error={!!errors.email}
                            helperText={errors.email}
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
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item>
                                Don't have an account? {" "}
                                <Link to="Register" variant="body2">
                                    {"Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}
