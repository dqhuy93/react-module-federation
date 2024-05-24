import React, { ComponentType } from "react";
import { loadComponent } from "../util/loadComponent";

type RemoteComponentProps = {
  remoteName: string;
  remoteUrl: string;
  module?: string;
  scope?: string;
  fallback?: React.ReactNode;
  hideErrorBoundry?: boolean;
  // Any props needed by the Remote app can be passed through
  [key: string]: any;
};
const defaultCallBack = <div>Loading</div>;

export const RemoteComponent = ({
  remoteName,
  remoteUrl,
  module,
  scope = "default",
  hideErrorBoundry = false,
  fallback = null,
  // Any props needed by the Remote app can be passed through
  ...props
}: RemoteComponentProps) => {
  // Custom hook for getting the URL for a particular remote
  // const remoteUrl = useRemoteUrl(remote);
  // Lazy loading the remote component
  const loadedComponent = loadComponent(remoteName, remoteUrl, module, scope);
  const Component = React.lazy(loadedComponent) as ComponentType<any>;
  // Wrapping the remote component in an ErrorBoundary and React.Suspense to safely render the component

  return (
    // <ErrorBoundary errorWrapperContent={hideErrorBoundry ? <></> : undefined}>
    <React.Suspense fallback={fallback ?? defaultCallBack}>
      <Component {...props} />
    </React.Suspense>
    // </ErrorBoundary>
  );
};
