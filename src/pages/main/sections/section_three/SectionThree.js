import React, { useEffect, useState } from 'react';
import WorkTimelineData from '../../../../config/WorkTimelineData';
import './styles.css';
import TimeLine from '../../../../components/composite/time_line/TimeLine';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

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

      {
        fullyVisible &&
          <div style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TimeLine data={WorkTimelineData} index={index} style={{ color: 'white', flex: 1 }} onNextClick={onNextClick} onPreviousClick={onPreviousClick}/>
            <img src={item.arm} style={{ width: 120, height: 120, borderRadius: 60, boxShadow: '1px 1px 10px white' }}/>
          </div>
      }

      <div style={{ width: '100vw', height: '100%', flexDirection: 'row' }}>
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

    <h1 key={index} className={'title'} style={{ marginLeft: 50 }}>
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
                <li key={index+'-'+key} style={{ color: 'white' }}>
                  <div className={'text'} >
                    {achievement}
                  </div>
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
  <div style={{ height: '25%', backgroundColor: '#09efcc', width: 1.1, marginTop: 'auto', marginBottom: 'auto' }}/>
);
const renderLeft = (index, item) => (
  <div className={'left'}>
    <div style={{ marginLeft: 50, marginRight: 50 }}>
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
                return <p>{value}</p>;
              })
            }
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  </div>
);

export default React.memo(SectionThree);
