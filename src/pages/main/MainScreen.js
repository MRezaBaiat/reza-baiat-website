import React, { useState } from 'react';
import { shouldComponentUpdate } from '../../helpers';
import SectionTwo from './sections/section_two/SectionTwo';
import SectionOne from './sections/section_one/SectionOne';
import NavigationBar from '../../components/composite/navigation/NavigationBar';
import SectionThree from './sections/section_three/SectionThree';
import SectionScroller from '../../components/composite/section_scroller/SectionScroller';
import SectionFour from './sections/section_four/SectionFour';
import SectionFive from './sections/section_five/SectionFive';
import { Helmet } from 'react-helmet';
import Strings from '../../config/Strings';

const MainScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={'main-screen-fragment'}>
      <Helmet>
        <title>Reza Baiat's Personal Portfolio Website</title>
        <meta name="keywords" content={Strings.keywords} />
        <meta
          name="description"
          content="Reza Baiat is a senior fullstack developer in the React,ReactNative,Android,Java fields"
        />
      </Helmet>
      <NavigationBar selectedIndex={selectedIndex} scrollToIndex={setSelectedIndex}/>
      <body>
        <SectionScroller selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <SectionOne scrollToIndex={setSelectedIndex}/>
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
