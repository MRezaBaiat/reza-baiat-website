import images from '../assets/images';

const SkillsData = [
  {
    name: 'General',
    isIncoming: false,
    iconSrc: images.icon_general_skills,
    routePath: '/skills/general',
    details: ['typescript', 'javascript', 'app center', 'code push', 'webrtc', 'websockets', 'joi', 'realtime messaging', 'code sharing', 'REST']
  },
  {
    name: 'React & React Native',
    isIncoming: false,
    iconSrc: images.icon_react,
    routePath: '/skills/reactnative',
    details: ['redux , thunk , persist', 'mobx', 'react-navigation', 'expo & react-native-web', 'axios', 'socket.io', 'realm', 'maps & positioning', 'react-native-webrtc', 'mediasoup', 'code push', 'push notifications', 'react-native-firebase', 'service-workers', 'pwa & offline first design', 'HOCs , Containers , hooks']
  },
  {
    name: 'Java',
    isIncoming: false,
    iconSrc: images.icon_java,
    routePath: '/skills/java',
    details: ['vert.x', 'hazel cast', 'sockets', 'streams', 'TCP & UDP', 'XMPP', 'SQL & NOSQL DataBases', 'microServices', 'load balancers']
  },
  {
    name: 'NodeJS',
    isIncoming: false,
    iconSrc: images.icon_nodejs,
    routePath: '/skills/nodejs',
    details: ['kubernetes', 'docker', 'nestjs', 'expressjs', 'fastify', 'nginx', 'mongoose', 'sequelize', 'passport', 'mediasoup', 'JWT', 'redis', 'NATS']
  },
  {
    name: 'Android',
    isIncoming: false,
    iconSrc: images.icon_android,
    routePath: '/skills/android',
    details: ['rx.java', 'XMPP', 'okHttp', 'gson', 'socket', 'TCP & UDP', 'services', 'video conversion', 'GPS', 'map', 'webrtc', 'voice & video call']
  }
];

export default SkillsData;
