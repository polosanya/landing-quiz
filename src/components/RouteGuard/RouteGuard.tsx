import { RoutesType } from '@helpers/types';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  condition: boolean,
  children: ReactNode,
}

const RouteGuard: FC<Props> = ({ condition, children }) => {
  return condition
    ? children
    : <Navigate to={RoutesType.Welcome} />;
};

export default RouteGuard;
