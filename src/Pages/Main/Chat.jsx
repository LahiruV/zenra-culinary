import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideBar from '../../Components/SideBar/SideBar';
import Navbar from '../../Components/NavBar/Navbar';

const defaultTheme = createTheme();

export default function Chat () {


    return (
        <ThemeProvider theme={defaultTheme}>
             <Navbar />             
            <Grid container component="main" sx={{ height: '100vh',width:'300%' }}>                
            </Grid>            
        </ThemeProvider>
    );
}
