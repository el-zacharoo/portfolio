import { Components } from "@mui/material/styles";

export const components: Components = {
    MuiButton: {
        styleOverrides: {
            contained: {
                padding: "0.6rem 1.5rem",
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: "0.5rem",
                boxShadow: "0px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
            }
        }
    }
};