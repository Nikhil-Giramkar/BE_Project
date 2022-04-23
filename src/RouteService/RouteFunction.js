import React from 'react';
import { Route } from 'react-router-dom';


export const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/disease') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={prop.key}
          />
        );
      } 
    });
  };
  