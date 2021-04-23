import React from 'react'
import { Loader } from '../UI/Loader'

interface WithLoadingProps {
    loading: boolean;
  }
  
export const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
{
  const Spinner = ({ loading, ...otherProps }:WithLoadingProps) => {
    return loading ? (
      <Loader/>
    ) : (
      <WrappedComponent {...otherProps as P} />
    );
  };
  return Spinner;
};
