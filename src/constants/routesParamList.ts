import Routes from './routes';

interface DetailParams {
  id: string;
}
export type RoutesParamList = {
  [Routes.Home]: undefined;
  [Routes.Detail]: DetailParams;
};
