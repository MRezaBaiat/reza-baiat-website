import React from 'react';
import './styles.css';
import images from '../../../assets/images';
import NavButton from './nav_button/NavButton';

interface Props{
  selectedIndex: number,
  scrollToIndex: (index: number)=>void
}
function NavigationBar (props: Props) {
  const { selectedIndex, scrollToIndex } = props;
  return (
    <header className={'main-header'}>
      <div style={{ width: '100%', flexDirection: 'column', margin: 'auto' }}>
        {
          buttonsArray.map((value) => {
            return (
              <NavButton {...value} selectedIndex={selectedIndex} scrollToIndex={scrollToIndex}/>
            );
          })
        }
      </div>
      <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0 }}>

      </div>
    </header>
  );
}

const buttonsArray = [
  {
    imgSrc: images.icon_home,
    title: 'home',
    indexNo: 0
  },
  {
    imgSrc: images.icon_skills,
    title: 'skills',
    indexNo: 1
  },
  {
    imgSrc: images.icon_contact,
    title: 'contact',
    indexNo: 2
  },
  {
    imgSrc: images.icon_code,
    title: 'my work',
    indexNo: 3
  },
  {
    imgSrc: images.icon_about,
    title: 'my about',
    indexNo: 4
  }
];

export default React.memo(NavigationBar);
