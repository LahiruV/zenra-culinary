import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SideBar from '../../Components/SideBar/SideBar';

const defaultTheme = createTheme();

export default function Chat () {


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>                
             <SideBar />             
            </Grid>
        </ThemeProvider>
    );
}
