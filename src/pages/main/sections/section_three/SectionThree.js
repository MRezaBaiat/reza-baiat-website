import React, { useEffect, useState } from 'react';
import WorkTimelineData from '../../../../config/WorkTimelineData';
import './styles.css';
import TimeLine from '../../../../components/composite/time_line/TimeLine';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import Linkify from 'react-linkify';

function SectionThree (props) {
  const { fullyVisible } = props;
  const [index, setIndex] = useState(2);// 2 for first animation fix

  useEffect(() => {
    if (fullyVisible) {
      setIndex(0);
    } else {
      setIndex(2);
    }
  }, [fullyVisible]);

  const onNextClick = () => {
    setIndex(index+1);
  };
  const onPreviousClick = () => {
    setIndex(index - 1);
  };
  const ismobile = useSelector(state => state.global.windowSize.ismobile);
  const item = WorkTimelineData[index];

  return (
    <div className={'section'} style={{ flexDirection: 'column' }}>

      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TimeLine data={WorkTimelineData} index={index} onNextClick={onNextClick} onPreviousClick={onPreviousClick}/>
        <div className={'timeline-arm-img-div'}>
          {
            fullyVisible && <img src={item.arm} className={'timeline-arm-img'}/>
          }
        </div>
      </div>

      <div className={'section3-body'}>
        {
          fullyVisible && renderLeft(index, item)
        }
        {
          fullyVisible && !ismobile && renderMiddle()
        }
        {fullyVisible && !ismobile && renderRight(index, item)}
      </div>
    </div>
  );
}

const renderRight = (index, item) => (
  <div className={'right'}>

    <h1 key={index} className={'title section3-body-right-title'}>
      Key Achievements :
    </h1>

    <ul>
      <TransitionGroup>
        {
          item.achievements.map((achievement, key) => {
            return (
              <CSSTransition
                key={index+'-'+key}
                classNames={'timeline-achievements-transition'}
                timeout={1000}
                exit={null}
              >
                <li key={index+'-'+key} className={'white'}>
                  <div className={'text'} >
                    {achievement}
                  </div>
                  <br/>
                </li>
              </CSSTransition>

            );
          })
        }
      </TransitionGroup>
    </ul>
  </div>
);

const renderMiddle = () => (
  <div className={'section-body-middle'}/>
);
const renderLeft = (index, item) => (
  <div className={'left'}>
    <div className={'section3-body-left'}>
      <TransitionGroup>
        <CSSTransition
          key={index+'-title'}
          classNames={'timeline-title-transition'}
          timeout={1000}
          exit={null}
        >
          <h1 className={'title'}>
            {
              item.title
            }
          </h1>
        </CSSTransition>
        <CSSTransition
          key={index+'-details'}
          classNames={'timeline-details-transition'}
          timeout={1000}
          exit={null}
        >
          <div className={'text'} key={index}>
            {
              item.text.split('\n').map((value) => {
                return (
                  <Linkify style={{color:'white'}}>{value}<br/></Linkify>
                );
              })
            }
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  </div>
);

export default React.memo(SectionThree);
