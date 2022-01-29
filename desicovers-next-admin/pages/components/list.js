import React from "react";
import { styled } from '@mui/material/styles';
import BasicCard from "./card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LargeCard from "./cardL";
import { CardHeader } from "@mui/material";
// import PrimarySearchAppBar from "./navbar";
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

const List = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses!</h2>;
  }
  return (
    <>
      {/* <PrimarySearchAppBar /> */}
      <Container>
        <br/>
        <strong>Dashboard</strong>
        <br/>
        <Grid container spacing={35}>
          {props.items.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <BasicCard
                title={item.title}
                amount={item.amount}
                color={item.color}
              />
            </Grid>
          ))}
        </Grid>
        <br/>
        <Grid container spacing={20}>
          <Grid item xs={12} md={8}>
            <LargeCard title={"Earnings Overview"}>
           
            </LargeCard>
            <BorderLinearProgress variant="determinate" value={50}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <LargeCard title={"Product Sales"} component={"img"} />
          </Grid>
        </Grid>
        <br/>
        <Grid container spacing={35}>
          <Grid item xs={6} md={3}>
            <LargeCard title={"Projects"} component={"BorderLinearProgress"} />
          </Grid>
          <Grid item xs={6} md={3}>
            <LargeCard title={"Illustrations"} component={"text"} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default List;