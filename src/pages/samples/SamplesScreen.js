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
      return renderer('For a kick start , you may check the react code of this site at :', 'https://github.com/MRezaBaiat/reza-baiat-website');
    case '#reactnative':
      return renderer('For a kick start , you may check the react code of this site at :', 'https://github.com/MRezaBaiat/reza-baiat-website');
    case '#java':
      return renderer('For a kick start , you may check the react code of this site at :', 'https://github.com/MRezaBaiat/reza-baiat-website');
    case '#android':
      return renderer('For a kick start , you may check the react code of this site at :', 'https://github.com/MRezaBaiat/reza-baiat-website');
    case '#nodejs':
      return renderer('For a kick start , you may check my express boilerplate at :', 'https://github.com/MRezaBaiat/nodejs-express-boilerplate');
    default:
      return renderer('For a kick start , you may check the react code of this site at :', 'https://github.com/MRezaBaiat/reza-baiat-website');
  }
};

const renderer = (title, link) => {
  return (
    <div className={'text'} style={{ marginTop: 50 }}>
      {
        title
      }
      <br/>
      <br/>
      <a href={link}
        style={{ color: getCSSRootValue('--jade') }} target="_blank">
        {
          link
        }
      </a>
    </div>
  );
};

export default React.memo(SamplesScreen);
