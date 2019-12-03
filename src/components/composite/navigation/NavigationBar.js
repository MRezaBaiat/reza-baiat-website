import React from 'react';
import images from '../../../assets/images';
import NavButton from './nav_button/NavButton';
import { useSelector } from 'react-redux';
import './styles.css';

interface Props{
  selectedIndex: number,
  scrollToIndex: (index: number)=>void
}
function NavigationBar (props: Props) {
  const { selectedIndex, scrollToIndex } = props;
  const ismobile = useSelector(state => state.global.windowSize.ismobile);

  return (
    <div className={'navbar'}>
      <div className={ismobile ? 'header-container-mobile' : 'header-container'}>
        {
          buttonsArray.map((value, index) => {
            return (
              <NavButton {...value} key={index} indexNo={index} selectedIndex={selectedIndex} scrollToIndex={scrollToIndex}/>
            );
          })
        }
      </div>
      {
        !ismobile && <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0 }}>

        </div>
      }
    </div>
  );
}

const buttonsArray = [
  {
    imgSrc: images.icon_home,
    title: 'home'
  },
  {
    imgSrc: images.icon_skills,
    title: 'skills'
  },
  {
    imgSrc: images.icon_code,
    title: 'timeline'
  },
  {
    imgSrc: images.icon_about,
    title: 'about'
  },
  {
    imgSrc: images.icon_contact,
    title: 'contact'
  }
];

export default React.memo(NavigationBar);
