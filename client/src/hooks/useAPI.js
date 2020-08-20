import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const useApi = (url, options = {}) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
        if (isAuthenticated) {
          const accessToken = await getAccessTokenSilently();
          axios({
              method: 'get',
              url: url,
              headers: {
                  // Add the Authorization header to the existing headers
                  Authorization: `Bearer ${accessToken}`,
              }
            }).then((res) => {
                setState({
                    ...state,
                    data: res.data,
                    error: null,
                    loading: false
                })
            }).catch(error => {
                setState({
                    ...state,
                    error: error,
                    loading: false
              })
            })
      } else {
        axios({
          method: 'get',
          url: url,
        }).then((res) => {
            setState({
                ...state,
                data: res.data,
                error: null,
                loading: false
            })
        }).catch(error => {
            setState({
                ...state,
                error: error,
                loading: false
          })
        })
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};