import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LockIcon from '@mui/icons-material/Lock';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import SecurityIcon from '@mui/icons-material/Security';
import Typography from '@mui/material/Typography';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styled from 'styled-components'

export default function CustomizedTimeline() {
  var pad = "4.5vh";
  var normColor = "#0A2729";
  var activeColor = "#12FFC9";

  var regColor = normColor;
  var m1Color = normColor;
  var m2Color = normColor;
  var m3Color = normColor;
  var m4Color = normColor;
  var closingColor = normColor;

  var registration = new Date("5/9/2022").getTime();
  var m1 = new Date("5/14/2022").getTime();
  var m2 = new Date("5/21/2022").getTime();
  var m3 = new Date("5/28/2022").getTime();
  var m4 = new Date("6/4/2022").getTime();
  var closing = new Date("6/4/2022").getTime();
  var now = Date.now();
  console.log(now);
  console.log(registration);
  console.log(m1);
  console.log(m2);
  console.log(m3);
  console.log(m4);
  console.log(closing);
  if(now >= registration && now < m1){
    regColor = activeColor;
  }
  else if(now >= m1 && now < m2){
    m1Color = activeColor;
  }
  else if(now >= m2 && now < m3){
    m2Color = activeColor;
  }
  else if(now >= m3 && now < m4){
    m3Color = activeColor;
  }
  else if(now >= m4 && now < closing){
    m4Color = activeColor;
  }
  else{
    closingColor = activeColor;
  }

  return (
    <Container>
      <Timeline position="alternate" sx={{ height: "100vh" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="#ffffff"
          >
            09/05/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <HowToRegRoundedIcon style={{ color: regColor }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
              Registration
            </Typography>
            <Typography>Open for registration</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#ffffff"
          >
            14/05/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <LockIcon style={{ color: m1Color }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
            Module 1
            </Typography>
            <Typography>Digital Privacy</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#ffffff"
          >
            21/05/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FmdBadIcon style={{ color: m2Color }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
              Module 2
            </Typography>
            <Typography>Digital Opportunities</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#ffffff"
          >
            28/05/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SecurityIcon style={{ color: m3Color }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
              Module 3
            </Typography>
            <Typography>Digital Security</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#ffffff"
          >
            04/06/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <CampaignIcon style={{ color: m4Color }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
              Module 4
            </Typography>
            <Typography>Digital Advocacy</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#ffffff"
          >
            04/06/2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <EmojiEventsIcon style={{ color: closingColor }}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: pad, px: 2 }}>
            <Typography variant="h6" component="span">
              Closing Ceremony
            </Typography>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </Container>
  );
}

const Container = styled.div`
    display: none;

    @media(max-width: 1007px){
        display: block;
    }
`