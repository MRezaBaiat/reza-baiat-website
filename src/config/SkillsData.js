import images from '../assets/images';

const SkillSet = [
  {
    name: 'React',
    isIncoming: false,
    imgSrc: images.react,
    routePath: '/skills/react'
  },
  {
    name: 'React Native',
    isIncoming: false,
    imgSrc: images.react_native,
    routePath: '/skills/reactnative'
  },
  {
    name: 'Java',
    isIncoming: false,
    imgSrc: null,
    routePath: '/skills/java'
  },
  {
    name: 'Android',
    isIncoming: false,
    imgSrc: null,
    routePath: '/skills/android'
  },
  nodejs: {
    name: 'NodeJS',
    isIncoming: true,
    imgSrc: null,
    routePath: '/skills/nodejs'
  }
];

export default SkillSet;
