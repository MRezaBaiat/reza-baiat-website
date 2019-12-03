import React from 'react';
import './styles.css';

interface Props{
  skillName: string,
  imgSrc: number,
  routePath: string
}
function SkillCard (props: Props) {
  const { skillName, imgSrc, routePath } = props;
  return (
    <div className={'container'}>
      <img className={'img'} src={imgSrc} alt={null}/>
      <button className={'button'}>
        Tell me more
      </button>
    </div>
  );
};

export default React.memo(SkillCard);
