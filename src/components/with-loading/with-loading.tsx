import React from 'react'
import { Loader } from '../UI/Loader'

interface WithLoadingProps {
    loading: boolean;
  }
  
export const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & WithLoadingProps> {
      render() {
        const { loading, ...props } = this.props;
        return loading ? <Loader /> : <Component {...props as P} />;
      }
    };
