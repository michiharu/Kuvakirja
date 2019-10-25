import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { pink, indigo } from '@material-ui/core/colors';
import UpIcon from '@material-ui/icons/ThumbUp';
import DownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme: Theme) =>
({
  icon: {paddingRight: theme.spacing(1)},
  up: { color: pink[500] },
  down: { color: indigo.A700 },
}));

interface ThumbButtonProps extends ButtonProps {
  down?: string;
}

const ThumbButton = (props: ThumbButtonProps) => {
  const { down } = props;
  const classes = useStyles();
  const others = {...props, children: undefined};
  return (
    <Button {...others}>
      {!down && <UpIcon className={clsx(classes.icon, classes.up)}/>}
      {down  && <DownIcon className={clsx(classes.icon, classes.down)}/>}
      {props.children}
    </Button>
  );
}

export default ThumbButton;