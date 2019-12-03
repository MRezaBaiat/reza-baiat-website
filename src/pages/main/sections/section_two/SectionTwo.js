import SkillsData from '../../../../config/SkillsData';
import SkillCard from '../../../../components/composite/skill_card/SkillCard';
import React from 'react';
import images from '../../../../assets/images';
import Carousel from 'nuka-carousel';
import { useSelector } from 'react-redux';
import { getCSSRootValue } from '../../../../helpers';

const config = {
  transitionMode: 'scroll3d',
  slideIndex: 0,
  slidesToScroll: 1,
  slideOffset: 0,
  cellSpacing: 0,
  slidesToShow: 3,
  cellAlign: 'center',
  heightMode: 'max',
  withoutControls: false,
  wrapAround: true,
  zoomScale: 0.85,
  opacityScale: 0.1
};
interface Props{
  scrollToIndex: (index: number)=>void
}
function SectionTwo (props: Props) {
  const { scrollToIndex } = props;
  const windowSize = useSelector(state => state.global.windowSize);
  const { ismobile } = windowSize;

  const arrowsSize = ismobile ? 25 : 50;
  const renderCenterLeftControls = ({ previousSlide }) => (
    <img style={{ width: arrowsSize, height: arrowsSize, cursor: 'pointer' }} src={images.icon_previous} onClick={previousSlide}/>
  );

  const renderCenterRightControls = ({ nextSlide }) => (
    <img style={{ width: arrowsSize, height: arrowsSize, cursor: 'pointer' }} src={images.icon_next} onClick={nextSlide}/>
  );

  return (
    <div className={'section'} style={{ flexDirection: 'row' }}>
      <div className={'left center'}>
        <div className={'section2-left-container'}>
          <h1 className={'title'}>
              Technology Skills
          </h1>
          <div className={'text'}>
            <p>
                Most of my experiences are dedicated to mobile development , Creating flawless , pixel perfect and super performant applications in React Native & Android.
            </p>
            <p>
                Now days my main focuses are React & React Native , and i have deep understanding of these 2 masterpieces.
            </p>
            <p>
                Most of the times in the React world i develop using (Flow,Typescript,ESLint,Prettier,Git,Jira) .
            </p>
            <p>
                I also know techs like (CSS,HTML,JSX) and all other tools that i need to develop React/React Native projects.
            </p>
            <p>
                If you had any questions , please do not hesitate to<button onClick={() => { scrollToIndex(4); }} className={'section2-link-button'}>contact</button>me.
            </p>
          </div>
        </div>
      </div>
      <div className={'right center section2-right'}>
        <Carousel renderBottomCenterControls={null} renderCenterLeftControls={renderCenterLeftControls} renderCenterRightControls={renderCenterRightControls} height={ismobile ? getCSSRootValue('--body-height') : undefined} slideWidth={ismobile ? windowSize.width/2 - 40+'px' : '300px'} {...config}>
          {
            SkillsData.map((value, index) => {
              return <SkillCard maxCount={SkillsData.length} key={index} {...value}/>;
            })
          }
        </Carousel>
      </div>
    </div>
  );
}

export default React.memo(SectionTwo);
