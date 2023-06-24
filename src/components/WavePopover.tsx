'use client'

import * as React from 'react';
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props : TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export const WavePopover = () => {

    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    return (
    <>
        <Button
            variant="text"
            sx={{
            mb: "2rem",
            }}
            onClick={handleClick}
        >
            WAVE
        </Button>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="👋"
            TransitionComponent={TransitionUp}
        >
            <SnackbarContent 
                message="👋"
                elevation={0}
                sx={{
                background: 'none',
                fontSize: '5rem',
                }}
            />
        </Snackbar>
    </>
    );

}