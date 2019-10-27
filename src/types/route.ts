import { SvgIconProps } from '@material-ui/core/SvgIcon';

interface Route {
  auth: boolean;
  path: string;
  exact: boolean;
  label: string;
  Icon?: (props: SvgIconProps) => React.ReactElement<any>;
  component?: () => React.ReactElement<any>;
  
}

export default Route