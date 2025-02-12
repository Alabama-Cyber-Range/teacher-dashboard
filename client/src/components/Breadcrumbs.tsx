import React from 'react';
import * as componentLibrary from '@aws-amplify/ui-react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs= () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    
      <componentLibrary.Breadcrumbs
        items={[
          {
            href: '/',
            label: 'Home',
          },
          ...pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            return {
              href: to,
              label: value.replace(/-/g, ' '),
            };
          }),
        ]}
      />
      
  );
};

export default Breadcrumbs;