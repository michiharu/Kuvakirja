import { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Route {
  layout: string;
  path: string;
  exact: boolean;
  label: string;
  Icon?: (props: SvgIconProps) => React.ReactElement<any>;
  component?: () => React.ReactElement<any>;
  
}

export default Route