import React from 'react';
import images from '../../assets/images';
import SkillsData from '../../config/SkillsData';
import { getCSSRootValue } from '../../helpers';

function SamplesScreen (props) {
  const { hash } = props.location;
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh', backgroundColor: '#1d1d1d' }}>
      <div className={'left center'}>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <div className={'title'}>
            Work Sample
          </div>
          {
            getRenderer(decodeURIComponent(hash.trim()))
          }
        </div>
      </div>
      <img style={{ width: '75vw', height: '100vh', objectFit: 'cover', objectPosition: 'bottom' }} src={images.samples_image}/>
    </div>
  );
}

const getRenderer = (hash: string) => {
  switch (hash.toLowerCase().split(' ').splice('%20').join('')) {
    case '#react':
      return renderer(SkillsData[1]);
    case '#reactnative':
      return renderer(SkillsData[0]);
    case '#java':
      return renderer(SkillsData[2]);
    case '#android':
      return renderer(SkillsData[4]);
    case '#nodejs':
      return renderer(SkillsData[3]);
    default:
      return renderer(SkillsData[0]);
  }
};

const renderer = (skill) => (
  <div className={'text'} style={{ marginTop: 50 }}>
    For a kick start , you may check the react code of this site at :
    <br/>
    <br/>
    <a href={'https://github.com/MRezaBaiat/reza-baiat-website'} style={{ color: getCSSRootValue('--jade') }} target="_blank">
      https://github.com/MRezaBaiat/reza-baiat-website
    </a>
  </div>
);

export default React.memo(SamplesScreen);
