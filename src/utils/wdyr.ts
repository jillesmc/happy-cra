/* eslint-disable global-require */
import React from 'react';


// if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');


  whyDidYouRender(React, { onlyLogs: true });

  // whyDidYouRender(React, {
  //   trackAllPureComponents: true,
  //   trackHooks: true,
  //   logOwnerReasons: true,
  //   collapseGroups: true,
  // });
// }
