import React from 'react';
import './styles.css';
import images from '../../../../assets/images';
import { useSelector } from 'react-redux';
import TextyAnim from 'rc-texty';
import getEnter from './getEnter';
import Strings from '../../../../config/Strings';
require('rc-texty/assets/index.css');

function SectionFour (props) {
  const { fullyVisible } = props;
  const ismobile = useSelector(state => state.global.windowSize.ismobile);
  return (
    <div className={'section'}>
      <div className={ismobile ? 'left' : 'left center'}>
        <div className={'section4-text'}>
          {
            fullyVisible ? <TextyAnim
              leave={getEnter}
              enter={getEnter}
              duration={500}
              className={'section4-title title'}
              style={{ flexDirection: 'row' }}
            >
              About Me
            </TextyAnim> : <div className={'section4-title title'} style={{ color: '#1d1d1d' }}>About Me</div>
          }
          <div className={'text white'} style={{ lineHeight: 3 }}>
            {
              Strings.about.split('\n').map((value) => {
                return (
                  <div>
                    { value }<br/>
                  </div>
                );
              })
            }
            <code>
                “The more I learn, the more I realize how much I don't know...“  - Albert Einstein
            </code>
          </div>
        </div>
      </div>
      {
        !ismobile &&
          <div className={'right'}>
            <img src={images.about_me} className={'section4-img'}/>
          </div>
      }
    </div>
  );
}

export default React.memo(SectionFour);
