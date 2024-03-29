import images from '../assets/images';

const WorkTimelineData = [
  {
    title: 'Matap',
    from: 2019,
    to: 2021,
    arm: images.arm_matap,
    achievements: [
      'Solo producing all four different sides (Mobile app , Web app (PWA) , Admin panel , Backend) \n' +
      'https://play.google.com/store/apps/details?id=ir.matap.app',
      'Solving lots of problems including a way to deploy a real mobile like messenger in web (PWA) \n' +
      'https://pwa.matap.site',
      'Single source code for android & ios & web using react-native web',
      'Developing voice call and video call client / server with great quality and satisfaction .here is one \n' +
      'test example of my fullstack developed conference app https://conference.lifemate.me',
      'Providing a fail safe backend using Expressjs & kubernetes & MongoDB & Redis',
      'Managing kubernetes , git, backups, etc...',
      'Using single code base for android, mobile & web'
    ],
    text: 'Matap is a medical application which provides a communication link between doctors and patients by \n' +
      'providing services like booking , chat , transfer files, voice call and video call , etc...\n' +
      'Matap appplication has all the functionallities of the whatsapp but with a gateway in middle. Client apps \n' +
      'are made for mobile (android & ios) & web (pwa) and the server is running on a kubernetes infrastructure. \n' +
      'I, as the solo fullstack developer of the company was instructed not to use any existing services in the \n' +
      'app and so all of the technologies including socket & WEBRTC were natively developed' + '\n \n' +
      'Here is the link to the app : \n' +
      'https://play.google.com/store/apps/details?id=ir.matap.app' + ' \n' +
      'and the link to the web mobile app :' +
      'https://pwa.matap.site'
  },
  {
    title: 'Zubale',
    from: 2018,
    to: 2019,
    arm: images.arm_zubale,
    achievements: ['Developed and implemented the features, such as cash payment, map, clustering, database, and a new code base into the application'],
    text: 'This company was located in mexico you can find our app here : https://play.google.com/store/apps/details?id=mx.com.topup&hl=en\n' +
      'the first thing that i as a senior react-native developer did there was \n' +
      'Recruited as subject matter expert react native developer to resolve complex issues.\n' +
      'Delivered expert advice to other developers about resolving issues and best technologies to use\n\n' +
      'I was working on react , react-native and android there'
  },
  {
    title: 'Pixelsandcode',
    from: 2015,
    to: 2018,
    arm: images.arm_pixels_and_code,
    achievements: [
      'Saved maintenance time and simplified the transfer of code by writing amazingly clean, maintainable, and flawless code.',
      'Developed user-friendly applications using Android Studio, Intellij IDEA Ultimate, Eclipse, WebStorm, and XCode. Accelerated productivity using Gradle, Yarn, and NPM build tools and Cocoa Pods.',
      'Utilised advanced mobile database and data synchronization technology, including Redux, Saga, & Realm',
      'Analysed end-user requirements and designed pixel-perfect and buttery smooth UIs for mobile platforms',
      'Developed user-friendly applications for bookings/rooms management, door lock/unlock application for hotels across Australia and Georgia'
    ],
    text: 'Leveraged solid experience and proficiency in React.js to develop new React features like\n' +
      ' functional components, hooks (useState, useEffect, useReducer, and useContext). Managed all tasks with jira \n' +
      ' with a keen focus on on https://play.google.com/store/apps/details?id=me.tipi.travel on both react and react-native.\n' +
      ' Performed as an SME for with comprehensive knowledge of functional and object oriented programming.\n' +
      ' Developed expert level understanding of working with third-party libraries, including new and pre used.\n' +
      ' Held accountable for designing new features, collaborating with cross-functional teams, \n' +
      ' testing code, fixing bugs, and improving application efficiency. Gained valuable knowledge of REST APIs,\n' +
      ' the document request model, XMPP, and offline storages.\n\n' +
      ' Technologies included were react , react-native , android'
  },
  {
    title: 'Hamyar aval',
    from: 2010,
    to: 2015,
    arm: images.arm_hamyar_aval,
    achievements: ['Designed and developed a messenger with all capabilities of telegram, whatsapp, and all other messengers.',
      'Developed backend with a self made video call due to security for the messenger project.',
      'Introduced exciting features, such as groups, channels, posts, video call, voice call, PV, high level securities, and map with super nice visual appearance.',
      'Commended by management for excellent performance while serving as full stack developer for the company'
    ],
    text: 'Hamyar aval is a knowledge enterprise company and\n' +
      '    There i managed to develop first taxi finder application in the country with user-friendly features,\n' +
      '    including printer (to draw the route travelled and print the receipt with all info about the travel),\n' +
      '    Card reader (to allow the customers to pay with bank card),an android device (to act as a phone),\n' +
      '    and RFID reader (to identify the driver using RFID cards).\n\n' +
      '    Technologies included were android , java , react-native'
  }
];

export default WorkTimelineData;
