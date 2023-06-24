import { Container } from "@mui/material";
import { Social } from "../components/Social";

export const Footer = () => {
    return (
        <Container
            sx={{
                margin: "0px auto 40px auto",
            }}
        >
           <Social /> 
        </Container>
    );
}