'use client'

import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import { Typography } from "@mui/material";
import { JobHistoryItem } from '../components/JobHistoryItem';

// import doordash_logo from '../images/doordash.png';
// import google_logo from '../images/google.png';
// import grubhub_logo from '../images/grubhub.png';
// import modeln_logo from '../images/modeln.jpg';
// import rutgers_logo from '../images/rutgers.png';

export const JobHistory = () => { 
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
    <>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Product Sans", textalign:"right"}}
        color="text.secondary"
        gutterBottom
      >
        Job History
      </Typography>
      <Card sx={{ minWidth: 275, borderRadius: 5 }}>
          <CardContent sx={{ padding: 4 }}>
              <Timeline position="alternate">
                  <JobHistoryItem 
                    companyName='Grubhub'
                    image='../images/grubhub_logo'
                    website='https://grubhub.com' 
                    title={''} 
                    description={''} />
                  <JobHistoryItem 
                    companyName='Google'
                    image='../images/google_logo'
                    website='https://google.com' 
                    title={''} 
                    description={''} />
                  <JobHistoryItem 
                    companyName='Doordash'
                    image='../images/doordash_logo'
                    website='https://doordash.com' 
                    title={''} 
                    description={''} />
                  <JobHistoryItem 
                    companyName='Model N'
                    image='../images/modeln_logo'
                    website='https://modeln.com' 
                    title={''} 
                    description={''} />
                  <JobHistoryItem 
                    companyName='Rutgers'
                    image='../images/rutgers_logo'
                    website='https://rutgers.edu'
                    last={true} 
                    title={''} 
                    description={''} />
              </Timeline>
          </CardContent>
      </Card>
    </>
); }


