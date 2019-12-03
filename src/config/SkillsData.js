import images from '../assets/images';

const SkillsData = [
  {
    name: 'React Native',
    isIncoming: false,
    iconSrc: images.icon_react,
    routePath: '/skills/reactnative',
    details: ['Redux', 'Redux-Thunk', 'Reselect', 'React-Native-Navigation', 'Redux-Saga', 'Redux-Persist', 'Functional Components', 'Axios', 'Realm', 'Css-Loader', 'Google Maps', 'Fire Base', 'GPS']
  },
  {
    name: 'React',
    isIncoming: false,
    iconSrc: images.icon_react,
    routePath: '/skills/react',
    details: ['Redux', 'Redux-Thunk', 'Reselect', 'React-Router', 'Redux-Saga', 'Redux-Persist', 'Functional Components', 'Axios', 'Bootstrap', 'Google Maps']
  },
  {
    name: 'Java',
    isIncoming: false,
    iconSrc: images.icon_java,
    routePath: '/skills/java',
    details: ['Vert.x', 'HazelCast', 'Sockets', 'Streams', 'REST', 'TCP & UDP', 'XMPP', 'SQL & NOSQL DataBases', 'MicroServices', 'Load Balancers']
  },
  {
    name: 'NodeJS',
    isIncoming: true,
    iconSrc: images.icon_nodejs,
    routePath: '/skills/nodejs',
    details: []
  },
  {
    name: 'Android',
    isIncoming: false,
    iconSrc: images.icon_android,
    routePath: '/skills/android',
    details: ['Rx.Java', 'XMPP', 'OkHttp', 'Gson', 'Socket', 'TCP & UDP', 'Services', 'Video Conversion', 'GPS', 'Map', 'REST', 'WebRTC', 'Voice & Video Call']
  }
];

export default SkillsData;
