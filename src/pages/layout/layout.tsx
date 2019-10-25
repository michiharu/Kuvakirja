import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import PageRouter from '../page-router';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: { flexGrow: 1 }
  }),
);

export default function Layout() {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <PageRouter />
      </main>
    </div>

  );
}