import React from 'react';
import './styles.css';
import images from '../../../../assets/images';

function SectionFive () {
  return (
    <div className={'section center'}>
      <div className={'title'} style={{ marginBottom: 30 }}>
            Contact Me
      </div>
      <div style={{ color: 'white', alignItems: 'flex-start' }}>
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
  );
}

const Row = (props) => {
  const { src, link, onClick } = props;
  return (
    <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={onClick}>
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
