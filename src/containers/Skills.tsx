'use client'

import React from "react";
import { Container, TableContainer, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const Skills = () => {
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'Java' },
        { key: 1, label: 'Python' },
        { key: 2, label: 'Apex (SFDC)' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Typescript' },
        { key: 5, label: 'Javascript / ES6' },
        { key: 6, label: 'Git' },
        { key: 7, label: 'Flutter' },
        { key: 8, label: 'Dart' },
        { key: 9, label: 'gRPC' },
        { key: 10, label: 'REST' },
        { key: 11, label: 'Bash' },
        { key: 12, label: 'SQL/PostgreSQL' },
        { key: 13, label: 'Cloud Pub/Sub' },
      ]);

    return (<>
        <Typography
            variant="h3"
            sx={{ fontFamily: "Product Sans", textalign:"right"}}
            color="text.secondary"
            gutterBottom
        >
            Skills
        </Typography>
        <Container
            sx={{
                display: 'flex',
                margin: '40px auto',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                background: 'none',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                width: '650px',
                margin: '0px',
                p: 0.5,
                m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                let icon;
                return (
                    <ListItem key={data.key}>
                    <Chip
                        icon={icon}
                        label={data.label}
                        variant="outlined"
                    />
                    </ListItem>
                );
                })}
            </Paper>
        </Container>
    </>);
};