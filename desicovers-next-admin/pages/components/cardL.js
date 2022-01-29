import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import { CircularProgress, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/icons-material/BarChart';
import { PieChartOutlined } from '@mui/icons-material/PieChartOutlineOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#8B008B' : '#308fe8',
  },
}));

(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LargeCard(props) {
  return (
    <Card className="temp" sx={{ minWidth: 300, borderLeft: 'solid #0096FF 2px', marginTop: '10px' }}>
      <CardContent>
          <Typography gutterBottom variant="body2" color="#00008B" component="div">
          {props.title}
          </Typography>
        </CardContent>
      {/* <CardMedia
        component={props.component}
        variant="determinate"
        value={80}
        height="194"
        alt="Paella dish"
      /> */}
    </Card>
  );
}