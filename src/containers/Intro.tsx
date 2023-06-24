import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { WavePopover } from "../components/WavePopover";

export const Intro = () => {
  return (
    // <div className="intro">
    <div className="App-header">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Product Sans", textAlign: "right" }}
            color="text.secondary"
            gutterBottom
          >
            <p style={{ margin: 0, fontSize: "30px", position: "relative", top: "20px" }}>hi, i'm</p>
            jurytan
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Product Sans", textAlign: "right" }}
            color="text.secondary"
            gutterBottom
          >
            I'm a software engineer, streamer, and a father of two. Have a
            look around!
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <WavePopover />
        </Grid>
      </Grid>
      <br />
    </div>
  );
};
