import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#D419E6",
        },
        secondary: {
            main: "#E61991",
        }
    },
    typography: {
        h1: {
            fontSize: "2.5rem",
        },
        h2: {
            fontSize: "2rem",
        },
}
});

export default theme;