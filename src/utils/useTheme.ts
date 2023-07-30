import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFF0FF",
        },
        secondary: {
            main: "#FFFFF0",
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