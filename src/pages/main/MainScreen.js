import React, { useEffect, useRef, useState } from 'react';
import { getCSSRootValue, shouldComponentUpdate } from '../../helpers';
import './styles.css';
import SectionTwo from './sections/section_two/SectionTwo';
import SectionOne from './sections/section_one/SectionOne';
import NavigationBar from '../../components/composite/navigation/NavigationBar';
import SectionThree from './sections/section_three/SectionThree';
import SectionScroller from '../../components/composite/section_scroller/SectionScroller';
import SectionFour from './sections/section_four/SectionFour';
import SectionFive from './sections/section_five/SectionFive';


const MainScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={'main-screen-fragment'}>
      <NavigationBar selectedIndex={selectedIndex} scrollToIndex={setSelectedIndex}/>
      <body>
        <SectionScroller selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <SectionOne/>
          <SectionTwo scrollToIndex={setSelectedIndex}/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
        </SectionScroller>
      </body>
    </div>
  );
};

/* <div className={'main-screen-fragment'} >
      <div className={'header'}/>
      <body>

      </body>
    </div>*/

export default React.memo(MainScreen, shouldComponentUpdate);
