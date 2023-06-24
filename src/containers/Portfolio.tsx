'use client'
import Container from "@mui/material/Container";
import { Main } from "./Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "./Intro";

import Grid from '@mui/material/Grid';

import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Intro />
              </Grid>
            </Grid>
            <Main />
            <Footer />
            <BackgroundFooter />
      </Container>
    </div>
  );
};
