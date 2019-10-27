import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';

const imageHeight = 600;

const useStyles = makeStyles((theme: Theme) => ({
  parallax: {
    height: imageHeight,
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    borderStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    zIndex: -1,
  },
  lineEraser: {
    position: 'relative',
    display: 'flex',
    marginTop: -1,
    width: '100vw',
    height: 2,
    backgroundColor: '#fafafa',
    zIndex: 1000
  },
  panelContent: {
    marginTop: -imageHeight,
  }
}));

interface ParallaxProps {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  filter?: boolean;
  panelContent?: React.ReactNode;
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
    window.addEventListener('scroll', resetTransform);
    return function cleanup() {
      window.removeEventListener('scroll', resetTransform);
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  const { className, style, image, panelContent, children } = props;
  const classes = useStyles();
  const parallaxClasses = clsx(classes.parallax, className);
  return (
    <>
      <div
        className={parallaxClasses}
        style={{
          ...style,
          background: 'linear-gradient(rgba(0, 0, 0, 0) 400px, rgba(250, 250, 250, 1)), url(' + image + ')',
          transform: transform
        }}
      >
        {children}
      </div>
      <div className={classes.lineEraser} style={{ transform }} />
      <div className={classes.panelContent}>{panelContent}</div>
    </>);
}
