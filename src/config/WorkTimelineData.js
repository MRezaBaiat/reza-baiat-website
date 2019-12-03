import images from '../assets/images';

const WorkTimelineData = [
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
    text: 'Hamyar aval is a knowledge enterprise company and i started my work there as a solo android developer loooong ago. the goal was to write down the first taxi finder application in my country . the application had to work with a chinese device which had these features :\n' +
      '  1. Printer (to draw the route travelled and print the receipt with all info about the travel)\n' +
      '2. Card reader (to allow the customers to pay with bank card)\n' +
      '3. An android device (to act as a phone)\n' +
      '4. RFID reader (to identify the driver using RFID cards)\n' +
      '\n' +
      'these stuff were super hard to accomplish - thanks to lack of a good documentation from their side - but i finished the application . this taxi finder in addition to have protocols for Uber like taxies , was also covering co-operate and line taxies too , allowing customers to see the line taxies on map by selecting the route , so it was actually a 3 in 1 application. the backend for this app was also written by me in java .\n' +
      '  it was using a customized messenger server to keep every thing live and smooth along with multiple self written load balancers and http servers using a memory cluster architecture.\n' +
      '  this applications was also calculating the price on-the-fly . means it was calculating distance once every 10 seconds and displaying it to user . this was an option for the user so they could select it if they did not know the destination , or it was not specific . the calculation was very precise and had solution for tunnels and out of reach area\'s too by writing the uncalculated gps fixes to disk and consider them laters on. also a great self written solution for gps\'s (intentional inaccurate fixes) from american satelites , which do not exist on russian GLONASS satelite fixes . this application was also written in react-native too laters\n' +
      '\n' +
      'next project there was writing a messenger which had all capabilities of telegram,whatsapp and all other messengers , only much more prettier . the backend was also written by me . the hardest part in doing this project was i had to come up with a self made video call system due to security , which i did by working down on socket and bytes level . this application was also acting as google places to help them find routes and places . also including other features like groups,channels,posts,video call,voice call,PV,high level securities,map etc. it was a super nice looking application and probably my masterpiece so far.now that i think of it , writing a each word in the single line up there , took me atleast 3 month to accomplish.\n' +
      '\n' +
      '  also please note i was solo developer in this company , means i had no team and was working as a fullstack developer. because they found nobody else back then who could come along and they were super saticified by my works . people in my work and my boss were like family to me . i was also a great consultant to my boss - as i quote from him -  and not only in my own profession.\n' +
      '\n' +
      '  the technologies included were android,java,react-native'
  },
  {
    title: 'Pixelsandcode',
    from: 2015,
    to: 2018,
    arm: images.arm_pixels_and_code,
    achievements: ['Saved maintenance time and simplified the transfer of code by writing amazingly clean, maintainable, and flawless code.\n',
      'Developed user-friendly applications using Android Studio, Intellij IDEA Ultimate, Eclipse, WebStorm, and XCode. Accelerated productivity using Gradle, Yarn, and NPM build tools and Cocoa Pods.',
      'Utilised advanced mobile database and data synchronization technology, including Redux, Saga, and Realm.',
      'Analysed end-user requirements and designed pixel-perfect and buttery smooth UIs for both mobile platforms.',
      'Developed user-friendly applications for bookings/rooms management, door lock/unlock application for hotels across Australia and Georgia',
      'Held accountable for android and react-native development aspects of the application while working at the  Zubale,  https://play.google.com/store/apps/details?id=mx.com.topup&hl=en '],
    text: 'Working with a company who was working with companies like AirB&B,Tipi, for australia and georgia. developing applications for hotels and their customers , managing their bookings and rooms . the applications were also working with a lock hardware which was installed to the doors , allowing customers to open them from the application. the jira and skype were big friends to us as we even over used them , managing all tasks with jira . we had a great team and communication . my focus was working on https://play.google.com/store/apps/details?id=me.tipi.travel on both react and react-native how ever i did cooperate in some other projects too .\n' +
      '\n' +
      'the technologies included were android,react,react-native,nodejs\n'
  },
  {
    title: 'Zubale',
    from: 2018,
    to: 2019,
    arm: images.arm_zubale,
    achievements: [],
    text: 'This company was located in mexico you can find it in here https://www.linkedin.com/company/zubale/. the company\'s purpose was quite complicated but you can find info about it here:\n' +
      'https://www.zubale.com/ and the application here : https://play.google.com/store/apps/details?id=mx.com.topup&hl=en\n' +
      'i was also working with map and gps in this application.\n' +
      'i was working in android,react-native there'
  }
];

export default WorkTimelineData;
