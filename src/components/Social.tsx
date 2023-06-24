
import Typography from "@mui/material/Typography";
import { SocialItem } from "./SocialItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitch from "../images/twitch.jpg";


export const Social = () => {
    return (
        <>
            <Typography
                variant="h3"
                sx={{ fontFamily: "Product Sans", textalign: "right" }}
                color="text.secondary"
                gutterBottom
            >
                Social
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                divider={<Divider orientation="vertical" flexItem />}
            >
                <SocialItem
                    img='src/images/github.png'
                    url='https://github.com/jurytan' />
                <SocialItem
                    img='../images/linkedin.png'
                    url='https://bit.ly/jnguyenLI' />
                <SocialItem
                    img='../images/twitch.png'
                    url='https://twitch.tv/jurytan' />
            </Stack>
        </>
    );
}