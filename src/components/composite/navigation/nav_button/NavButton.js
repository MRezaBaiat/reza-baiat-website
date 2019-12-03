import React, { useState } from 'react';
import ImageFilter from 'react-image-filter';
import './styles.css';
const selectedColor = [16, 253, 216]; // '#09efcc'
const unselectedColor = [77, 77, 78]; // 4d4d4e

interface Props{
  imgSrc:number,
  title:string,
  indexNo: number,
  selectedIndex: number,
  scrollToIndex: (index: number)=>void,
}
function NavButton (props: Props) {
  const { imgSrc, title, indexNo, selectedIndex, scrollToIndex } = props;
  const [isHovered, setHovered] = useState(false);
  const isSelected = indexNo === selectedIndex;
  const isFocused = isHovered || isSelected;
  return (
    <div onClick={(e) => { e.preventDefault(); scrollToIndex(indexNo); }} className={'header-buttons-container'}
      onMouseEnter={() => { setHovered(true); }}
      onMouseLeave={() => { setHovered(false); }}>
      <ImageFilter
        className={isHovered ? 'header-buttons-img-invisible' : 'header-buttons-img-visible'}
        image={imgSrc}
        filter={ 'duotone' }
        colorOne={ isFocused ? selectedColor : unselectedColor }
        colorTwo={ isFocused ? selectedColor : unselectedColor }
      />
      <div className={isHovered ? 'header-text-visible' : 'header-text-invisible'}>
        {title.split('').join(' ').toUpperCase()}
      </div>
    </div>
  );
}

export default React.memo(NavButton);
