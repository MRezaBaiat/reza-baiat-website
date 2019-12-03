import React from 'react';
import './styles.css';
import images from '../../../../assets/images';
import TextyAnim from 'rc-texty';
require('rc-texty/assets/index.css');

function SectionFive (props) {
  const { fullyVisible } = props;
  return (
    <div className={'section center'}>
      <div className={'center'} style={{ flexDirection: 'row' }}>
        {
          fullyVisible ? <TextyAnim
            type={'scaleBig'}
            duration={500}
            className={'title section5-title'}
          >
            Contact Me
          </TextyAnim> : <div className={'section5-title title'} style={{ color: '#1d1d1d' }}>Contact Me</div>
        }
        <div className={'section5-container'}>
          <Row src={images.icon_gmail} link={'untouchable.rb@gmail.com'} onClick={() => {
            window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=Untouchable.rb@gmail.com&tf=1', '_blank');
          }}/>
          <Row src={images.icon_whatsapp} link={'+989305211601'} onClick={() => {
            window.open('https://wa.me/989305211601', '_blank');
          }}/>
          <Row src={images.icon_skype} link={'untouchable.rb'} onClick={() => {
            window.open('skype:Untouchable.rb?chat', '_blank');
          }}/>
          <Row src={images.icon_linkedin} link={'in/reza-baiat-b945a9114'} onClick={() => {
            window.open('https://www.linkedin.com/in/reza-baiat-b945a9114/', '_blank');
          }}/>
        </div>
      </div>
    </div>
  );
}

const Row = (props) => {
  const { src, link, onClick } = props;
  return (
    <div className={'section5-row'} onClick={onClick}>
      <img src={src} className={'section5-img'}/>
      <div className={'text'}>
        {
          link
        }
      </div>
    </div>
  );
};

export default React.memo(SectionFive);
