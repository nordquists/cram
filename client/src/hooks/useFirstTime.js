import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useFirstTime = function() {
    const [state, setState] = useState(true);
    const { getIdTokenClaims } = useAuth0();
    getIdTokenClaims()

    useEffect(() => {
            getIdTokenClaims()
                .then(result => {
                    if (result["/is_new"]) {
                        setState(true);
                    } else {
                        setState(false);
                    }
                })
                .catch(err => console.log(err));           
      }, []);

    return state
}

// const withAuthenticationRequired = <P extends object>(
//     Component: ComponentType<P>,
//     options: WithAuthenticationRequiredOptions = {}
//   ): FC<P> => (props: P): JSX.Element => {
//     const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
//     const {
//       returnTo = defaultReturnTo,
//       onRedirecting = defaultOnRedirecting,
//       loginOptions = {},
//     } = options;
  
//     useEffect(() => {
//       if (isLoading || isAuthenticated) {
//         return;
//       }
//       const opts = {
//         ...loginOptions,
//         appState: {
//           ...loginOptions.appState,
//           returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
//         },
//       };
//       (async (): Promise<void> => {
//         await loginWithRedirect(opts);
//       })();
//     }, [isLoading, isAuthenticated, loginWithRedirect, loginOptions, returnTo]);
  
//     return isAuthenticated ? <Component {...props} /> : onRedirecting();
//   };
  
//   export default withAuthenticationRequired;
  