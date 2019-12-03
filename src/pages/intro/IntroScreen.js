import React from 'react';
import './styles.css';

const MainScreen = () => {
  return (
    <React.Fragment>
      <header/>
      <body>
        <div >
         Please wait...
         No i'm not loading any thing!
         i just always wanted to do that :)))
        </div>
      </body>
    </React.Fragment>
  );
};

export default React.memo(MainScreen);
