import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../Components/NavBar/Navbar';

const defaultTheme = createTheme();

export default function Chat () {


    return (
        <ThemeProvider theme={defaultTheme}>
             <Navbar />                               
        </ThemeProvider>
    );
}