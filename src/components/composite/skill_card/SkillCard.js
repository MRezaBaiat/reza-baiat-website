import React from 'react';
import './styles.css';
import NavigationHelper from '../../../helpers/NavigationHelper';

interface Props{
  name: string,
  iconSrc: number,
  details: string[],
  isIncoming: boolean
}
function SkillCard (props: Props) {
  const { name, iconSrc, details, isIncoming } = props;

  return (
    <div className={'skill-card-container'}>
      <div className={'center'}>
        <img className={'skills-title-img'} src={iconSrc}/>
        <h1 className={'skills-title medium'}>
          {
            name
          }
        </h1>
      </div>
      <ul style={{ marginBottom: 'auto' }}>
        {
          details.map((value, index) => {
            return <li key={index} className={'skills-details-row text'}>
              {value}
            </li>;
          })
        }
        {
          isIncoming &&
          <div className={'skills-details-row text'}>
            {
              'Soon Incoming...     '
            }
          </div>
        }
      </ul>
      <button className={'skill-card-button medium'} style={{ marginTop: 'auto' }} onClick={() => {
        if (isIncoming) {
          return;
        }
        NavigationHelper.navigateTo('/samples#'+name);
      }}>
        {isIncoming ? 'Not yet ready!' : 'Tell me more'}
      </button>
    </div>
  );
}

export default React.memo(SkillCard);
