import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';

import MediaCard from './media-card';
import { createDummyRoughSummary } from '../../types/item-summary';
import Parallax from '../layout/Parallax';

export default function Dashboard() {
  const dummies = [...Array(20)].map(i => createDummyRoughSummary());
  return (
    <>
      <Parallax image="https://source.unsplash.com/1600x900/?nature,water" />
      <Container>
        <Grid container justify="center" spacing={2}>
          {dummies.map((data, key) => {
            return (
              <Grid key={key} item xs={6} sm={6} md={4} lg={3} xl={2}>
                <Box display="flex" justifyContent="center" width="100%">
                  <MediaCard {...data} />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>);
}