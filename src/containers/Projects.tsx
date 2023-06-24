import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Project } from '../components/Project';

export const Projects = () => {
    return (
        <Container maxWidth="md">
            <Typography
                variant="h3"
                sx={{ fontFamily: "Product Sans", textalign:"right"}}
                color="text.secondary"
                gutterBottom
            >
                Projects
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Project title="STO Upcoming View" image='../images/sto_upcoming_view.png' companyName='Grubhub' companyLogo='../images/grubhub_logo.png' />
                </Grid>
                <Grid xs={6}>
                    <Project title="STO Self Edit/Cancel" image='../images/sto_upcoming_view.png' companyName='Grubhub' companyLogo='../images/grubhub_logo.png' />
                </Grid>
                <Grid xs={6}>
                    <Project title="Apigee Integrations" image='../images/apigee_logo.png' companyName='Google' companyLogo='../images/google_logo.png'/>
                </Grid>
                <Grid xs={6}>
                    <Project title="Project Baseline" image='../images/project_baseline_logo.png' companyName='Google' companyLogo='../images/google_logo.png'/>
                </Grid>
                
            </Grid>
        </Container>
    );
}
