import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import PageRouter from '../page-router';
import { AppBar, Toolbar, Box, IconButton, Button, Container, Typography } from '@material-ui/core';
import { transparentBGColor } from '../../jss/util';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#0000',
      marginBottom: -theme.spacing(8)
    },
    content: { flexGrow: 1 },
    button: {
      backgroundColor: transparentBGColor,
      color: theme.palette.getContrastText(transparentBGColor),
    }
  }),
);

export default function Layout() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={clsx(classes.appBar)} elevation={0}>
        <Container>
          <Toolbar>
            <Button className={clsx(classes.button)}>Kuvakirja</Button>
            <Box flexGrow={1} />
            <Button className={clsx(classes.button)}>Sign In</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main className={classes.content}>
        <PageRouter />
      </main>
    </div>

  );
}