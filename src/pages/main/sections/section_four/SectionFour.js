import React from 'react';
import './styles.css';
import images from '../../../../assets/images';
import { useSelector } from 'react-redux';
import TextyAnim from 'rc-texty';
import getEnter from './getEnter';
require('rc-texty/assets/index.css');

function SectionFour (props) {
  const { fullyVisible } = props;
  const ismobile = useSelector(state => state.global.windowSize.ismobile);
  return (
    <div className={'section'}>
      <div className={'left center'}>
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
          <div className={'text'} style={{ color: 'white' }}>
            <p>
                In 2008 , I found my deepest heart desire in coding,
            </p>
            <p>
                A way to release my passion for creativity and unleashing my captive energy to learn and progress.
            </p>
            <p>
                Throughout my career, I have made it my priority to utilize current technologies and
            </p>
            <p>
                New techniques to develop elegant, creative technical solutions across all project phases.
            </p>
            <p>
                  Comfortable in collaborative and independently-driven roles,
            </p>
            <p>
                I am a forward-thinking leader with refined analytical and critical thinking skills,
            </p>
            <p>
                And I can adapt and revise my strategies to meet evolving priorities, shifting needs, and emergent issues.
            </p>
            <br/>
            <br/>
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
