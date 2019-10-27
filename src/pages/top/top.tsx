import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';

import MediaCard from './media-card';
import { createDummyRoughSummary } from '../../types/item-summary';
import Parallax from '../layout/parallax';

const panelBgcolor = "rgba(0,0,0,0.4)"

const useStyles = makeStyles((theme: Theme) => ({
  panel: {
    backgroundColor: panelBgcolor,
  },
  panelPrimaryText: {
    color: theme.palette.getContrastText(panelBgcolor),
  },
  panelSecondaryText: {
    color: theme.palette.getContrastText(panelBgcolor),
  }
}));

export default function Dashboard() {
  const dummies = [...Array(20)].map(i => createDummyRoughSummary());
  const classes = useStyles();
  const panel = (
    <Container>
      <Box display="flex" justifyContent="flex-end" py={20}>
        <Box p={3} className={classes.panel}>
          <Typography variant="h3" component="h1" className={classes.panelPrimaryText}>Kuvakirja</Typography>
          <Typography variant="h5" component="h2" className={classes.panelSecondaryText}>
            フィンランドにあるファンタジーを探しましょう
          </Typography>
        </Box>
      </Box>
    </Container>
  );
  return (
    <>
      <Parallax
        image="https://source.unsplash.com/1600x900/?nature,water"
        panelContent={panel}
      />
      <Container>
        <Grid container justify="center" spacing={2}>
          {dummies.map((data, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Box display="flex" justifyContent="center" width="100%"><MediaCard {...data} /></Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>);
}