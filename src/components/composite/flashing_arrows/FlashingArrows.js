import React, { useEffect, useState } from 'react';
import images from '../../../assets/images';
import ImageFilter from 'react-image-filter';

interface Props{
  className: string,
  onClick?: ()=>void
}
function FlashingArrows (props: Props) {
  const { style, onClick, className } = props;

  const [index, setIndex] = useState(-1);
  const interval = 200;
  const startDelay = 2000;
  useEffect(() => {
    if (index === 3) {
      setIndex(-1);
      return;
    }
    setTimeout(() => {
      setIndex(index + 1);
    }, index === -1 ? startDelay: interval);
  }, [index]);
  const config = { image: images.arrow_down, alt: null, style: { width: '100%', marginBottom: -10 } };
  const flashingConfig = { filter: 'duotone', colorOne: [16, 253, 216], colorTwo: [16, 253, 216] };
  return (
    <div {...props}>
      <ImageFilter {...config} {...index === 0 && { ...flashingConfig }} />
      <ImageFilter {...config} {...index === 1 && { ...flashingConfig }}/>
      <ImageFilter {...config} {...index === 2 && { ...flashingConfig }}/>
    </div>
  );
}

export default React.memo(FlashingArrows);
