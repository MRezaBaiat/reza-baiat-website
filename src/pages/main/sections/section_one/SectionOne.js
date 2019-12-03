import React from 'react';
import SplitText from 'react-pose-text';
import FlashingArrows from '../../../../components/composite/flashing_arrows/FlashingArrows';

const createCharPose = (delay: number = 0) => {
  return {
    exit: { opacity: 0, y: 0, scale: 5 },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      delay: ({ charIndex }) => delay + charIndex * 50
    }
  };
};
interface Props{
  scrollToIndex: (index: number)=>void
}
function SectionOne (props: Props) {
  const { scrollToIndex } = props;
  return (
    <div className={'section section1-container'}>
      <div className={'section1-title'}>
        <SplitText initialPose="exit" pose="enter" charPoses={createCharPose()}>
            Hi,
        </SplitText>
        <br/>
        <SplitText initialPose="exit" pose="enter" charPoses={createCharPose(1000)}>
            I'm Reza,
        </SplitText>
        <br/>
        <SplitText initialPose="exit" pose="enter" charPoses={createCharPose(2300)}>
            fullStack developer!
        </SplitText>
      </div>
      <div className={'section1-details'}>
        {
          'Holy trinity of Mobile / Web / Backend'.split('').join(' ')
        }
      </div>
      <FlashingArrows className={'flashing-arrows'} onClick={() => { scrollToIndex(1); }}/>
    </div>
  );
}

export default React.memo(SectionOne);
