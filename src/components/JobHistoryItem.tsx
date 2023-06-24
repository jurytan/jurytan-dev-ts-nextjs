'use client'

import Avatar from "@mui/material/Avatar";
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface JobHistoryItemProps {
    companyName: string,
    last?: boolean,
    image?: string,
    website?: string,
    title: string,
    description: string,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export const JobHistoryItem = (props : JobHistoryItemProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <TimelineItem>
            <TimelineSeparator>
                <Link href={props.website}>
                    <TimelineDot>
                        {props.image && 
                            <Avatar src={props.image} sx={{ width: 24, height: 24 }}/>}
                    </TimelineDot>
                </Link>
                {!props.last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: 2.5 }}>
                <Link 
                    href="#"
                    underline='none'
                    color='inherit'
                    onClick={handleOpen}
                >
                    {props.companyName}
                </Link>
            </TimelineContent>
            <Modal
                aria-labelledby={props.companyName}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    {props.title}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {props.description}
                    </Typography>
                </Box>
                </Fade>
            </Modal>
        </TimelineItem>
    );
}

JobHistoryItem.propType = {
    companyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    last: PropTypes.bool
};