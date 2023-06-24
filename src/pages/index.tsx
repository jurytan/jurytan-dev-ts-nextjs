import * as React from 'react';
import { Portfolio } from "../containers/Portfolio";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll() {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(<FloatingAppBar />, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function Home() {
    return (
        <div className="App">
            <ElevationScroll />
            <Portfolio />
        </div>
    );
}

export const FloatingAppBar = () => {
    return (
      <AppBar
            color="transparent"
            elevation={0}
            sx={{
              color: "#FFF"
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
    );
  }