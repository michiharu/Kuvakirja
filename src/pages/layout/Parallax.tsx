import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';

const imageHeight = 600;
const useStyles = makeStyles((theme: Theme) => ({
  parallax: {
    height: imageHeight,
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: 0,
    marginBottom: theme.spacing(-20),
    padding: 0,
    borderStyle: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  lineEraser: {
    position: 'relative',
    display: 'flex',
    marginTop: theme.spacing(20) - 1,
    marginBottom: theme.spacing(-20),
    width: '100vw',
    height: 2,
    backgroundColor: '#fafafa',
    zIndex: 1000
  }
}));

interface ParallaxProps {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  filter?: boolean;
  children?: React.ReactElement;
}

export default function Parallax(props: ParallaxProps) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  const { className, children, style, image } = props;
  const classes = useStyles();
  const parallaxClasses = clsx(classes.parallax, className);
  return (
    <>
      <div
        className={parallaxClasses}
        style={{
          ...style,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(250, 250, 250, 1)), url(' + image + ')',
          transform: transform
        }}
      >
        {children}
      </div>
      <div className={classes.lineEraser} style={{ transform }} />
    </>);
}
