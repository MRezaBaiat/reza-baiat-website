import React from 'react';
import images from '../../../assets/images';
import './styles.css';

interface Props{
  data: {title:string, from:string, to:string, }[],
  index: number,
  style?: any,
  onNextClick: ()=>void,
  onPreviousClick: ()=>void;
}
function TimeLine (props: Props) {
  const { data, index, style, onNextClick, onPreviousClick } = props;
  const item = data[index];
  const isNextClickable = index !== data.length - 1;
  const isPreviousClickable = index !== 0;
  return (
    <div>
      <div style={Object.assign({}, style, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}>
        <img src={images.icon_previous} style={{ width: 20, height: 20, marginRight: 20, cursor: 'pointer' }} onClick={isPreviousClickable ? onPreviousClick : undefined}/>
        <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className={'medium white'}>
            {item.from+'  -  '+item.to}
          </h1>
        </div>
        <img src={images.icon_next} style={{ width: 20, height: 20, marginLeft: 20, cursor: 'pointer' }} onClick={isNextClickable ? onNextClick : undefined}/>
      </div>
    </div>
  );
}

export default React.memo(TimeLine);

/**
 *
 * <VerticalTimeline className={'timeline-view'} layout={'1-column'}>
 {
        data.map((value) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position={ 'right' }
              contentStyle={{ background: 'darkorange', color: '#fff', width: 150, height: 50, fontSize: 7, borderRadius: 50, borderWidth: 0, 'box-shadow': '0 0 0 black',textAlign:'center' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: 40, height: 40, margin: 'auto', padding: 'auto' }}
              icon={<img src={images.icon_react} style={{ width: 40, height: 40, padding: 5 }}/>}
            >
              <h1>{value.title}</h1>

            </VerticalTimelineElement>
          );
        })
      }
 </VerticalTimeline>
 *
 * **/
