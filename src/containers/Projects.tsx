import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Project } from '../components/Project';

import apigee_logo from '../images/apigee-logo.png';
import google_logo from '../images/google.png';
import grubhub_logo from '../images/grubhub.png';
import project_baseline_logo from '../images/project-baseline-logo.png';
import sto_upcoming_view from '../images/sto-upcoming-view.png';

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
                    <Project title="STO Upcoming View" image={sto_upcoming_view} companyName='Grubhub' companyLogo={grubhub_logo} />
                </Grid>
                <Grid xs={6}>
                    <Project title="STO Self Edit/Cancel" image={sto_upcoming_view} companyName='Grubhub' companyLogo={grubhub_logo} />
                </Grid>
                <Grid xs={6}>
                    <Project title="Apigee Integrations" image={apigee_logo} companyName='Google' companyLogo={google_logo}/>
                </Grid>
                <Grid xs={6}>
                    <Project title="Project Baseline" image={project_baseline_logo} companyName='Google' companyLogo={google_logo}/>
                </Grid>
                
            </Grid>
        </Container>
    );
}
