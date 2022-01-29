import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function BasicCard(props) {
  return (
    <Card className="temp" sx={{ minWidth: 300, borderLeft: 'solid #0096FF 2px', marginTop: '10px' }}>
      <CardContent>
          <Typography gutterBottom variant="body2" color={props.color} component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.amount}
          </Typography>
        </CardContent>
    </Card>
  );
}