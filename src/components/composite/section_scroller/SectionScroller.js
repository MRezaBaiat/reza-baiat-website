import React, { Children, useEffect, useReducer, useRef, useState } from 'react';
/* import ReactScrollWheelHandler from 'react-scroll-wheel-handler';*/
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { disableBodyScroll } from 'body-scroll-lock';
import ReactScrollWheelHandler from './ReactScrollWheelHandler';
// upload this into git , apparently all existing one's suck :/

interface Props{
  children: any,
  className?: string,
  setSelectedIndex: (index: number)=>void,
  selectedIndex: number
}
function SectionScroller (props: Props) {
  const { children, className, selectedIndex, setSelectedIndex } = props;
  const ref = useRef(null);
  const [previousIndex, setPreviousIndex] = useState(0);
  const scrolling = selectedIndex !== previousIndex;

  const windowSize = useSelector(state => state.global.windowSize);

  const onScroll = (e) => {
    if (e.deltaY < 0) {
      upScroll();
    } else if (e.deltaY > 0) {
      downScroll();
    }
  };

  useEffect(() => {
    disableBodyScroll(ref.current);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register('end', function (to, element) {
      /* const child = children[selectedIndex];
      const lastChild = children[previousIndex];
      lastChild && lastChild.type.type.onInVisible && lastChild.type.type.onInVisible();
      child && child.type.type.onVisible && child.type.type.onVisible();*/
      setPreviousIndex(selectedIndex);
    });
  }, [selectedIndex]);

  useEffect(() => {
    const rect = ReactDOM.findDOMNode(ref.current)
      .getBoundingClientRect();
    const height = rect.height / children.length;
    scroll.scrollTo(height * selectedIndex, {
      ignoreCancelEvents: true,
      duration: 600
    });
  }, [children.length, selectedIndex, windowSize]);

  const scrollToIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const downScroll = () => {
    if (scrolling || selectedIndex === children.length - 1) {
      return;
    }
    scrollToIndex(selectedIndex + 1);
  };

  const upScroll = () => {
    if (scrolling || selectedIndex === 0) {
      return;
    }
    scrollToIndex(selectedIndex - 1);
  };

  const childs = children.map((child, index) => {
    const fullyVisible = (selectedIndex === index && !scrolling) || (previousIndex === index && scrolling);
    return React.cloneElement(child, { fullyVisible });
  });

  return (
    <div ref={ref} className={className} onWheel={onScroll}>
      <ReactScrollWheelHandler
        upHandler={upScroll}
        downHandler={downScroll}
        preventDefault
        disableKeyboard
      >
        {
          childs
        }
      </ReactScrollWheelHandler>
    </div>
  );
}

export default React.memo(SectionScroller);
