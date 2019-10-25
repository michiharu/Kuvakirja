import React from 'react';
import { Grid　} from '@material-ui/core';

function Person() {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={6}>
        <div>
          ここにプロフィール
        </div>
      </Grid>
    </Grid>);
}

export default Person;