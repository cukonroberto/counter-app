import { createTheme } from "@mui/material";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#141414',
            paper: '#1f1f1f',
        },
        primary: {
            main: '#e50914',
        },
        secondary: {
            main: '#ffffff',
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',

    },


});

export default darkTheme