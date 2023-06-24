import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';

// Adding imports for fontsource
// import "@fontsource/roboto/300.css"
// import "@fontsource/roboto/400.css"
// import "@fontsource/roboto/500.css"
// import "@fontsource/roboto/700.css"

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });

// Create a theme instance.
const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#24aee9",
      },
      secondary: {
        main: "#e539ff",
      },
      text: {
        primary: "#fff",
      },
      error: {
        main: "#fff",
      },
      background: {
        paper: "#37474F",
        default: "#212121",
      },
    },
  });

export default darkTheme;