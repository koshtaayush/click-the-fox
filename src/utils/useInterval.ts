//Library
import React from 'react'

/**
  * Util function for setInterval to avoid problem of closure keeping in memory the variable value
*/
export const useInterval = (callback: any, delay: any) => {
  const savedCallback = React.useRef<any | undefined>();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}