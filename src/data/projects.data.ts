import { ProjectItem } from "@models/project-item";
import i18n from "../i18n/config";

const getProjectDescription = (projectId: string, fallbackDescription: string): string => {
  const description = i18n.t(`projects.descriptions.${projectId}`, { ns: 'projects', defaultValue: fallbackDescription });
  return description;
};

export const getDevemgProjects = (): ProjectItem[] => [
  {
    id: 'random-qa',
    name: 'RandomAQ',
    description: getProjectDescription('random-qa', 'RandomAQ is a question-and-answer application developed for educational purposes, composed of two separate applications working together seamlessly.\nThe administration panel, built with Angular, allows administrators to create and manage categories, questions, and answers through a structured interface. The mobile application, developed with Ionic, lets users select a category and receive a randomly generated question, accompanied by a 30-second timer to encourage quick thinking and engagement.\nRandomAQ showcases full-stack thinking, cross-platform development, and real-time interaction design, making it a strong demonstration of both Angular and Ionic expertise.'),
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1626140450/my-portfolio/apps/title-white_d3msus.svg',
    background: 'linear-gradient(218.49deg, #C04848 5.98%, #480048 98.42%)',
    codeUrl: 'https://github.com/devemg/randomAQ',
    color: '#C04848',
  },
  {
    id: 'fast-messages',
    name: 'FastMessages',
    description: getProjectDescription('fast-messages', 'FastMessages is a real-time messaging application developed for educational purposes, built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js) along with Socket.IO for instant communication.\nThe application allows users to create accounts, log in securely, manage their contact lists by adding or deleting contacts, and engage in instant messaging with real-time updates.\nFastMessages demonstrates full-stack development skills, real-time data handling, and scalable application architecture, making it a strong portfolio piece for showcasing expertise in modern web technologies and real-time communication systems.'),
    background: 'linear-gradient(29deg, rgba(75,59,29,1) 0%, rgba(179,116,0,1) 33%, rgba(238,155,0,1) 97%)',
    color: 'rgba(238,155,0,1)',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1626140964/my-portfolio/apps/Group_1_gwampj.svg',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192378/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094914_ptcyny.png',
        alt: 'Chat Image',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192377/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094709_t9uqrs.png',
        alt: 'Landing Page',
        width: 1179,
        height: 585
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192374/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094832_z9a8bb.png',
        alt: 'Comunity',
        width: 1179,
        height: 585
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192373/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094940_bqgjhy.png',
        alt: 'Profile',
        width: 1179,
        height: 585
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192372/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094852_lkkk8i.png',
        alt: 'Empty chat',
        width: 1179,
        height: 585
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192371/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_094750_yszhku.png',
        alt: 'Sign In',
        width: 1179,
        height: 585
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1626192369/my-portfolio/apps/fast-msg/Captura_de_pantalla_2021-07-13_095003_ezl6gh.png',
        alt: 'Contacts',
        width: 1179,
        height: 585
      },
    ]
  },
  {
    id: 'wheather-tv',
    name: 'Wheather TV',
    description: getProjectDescription('wheather-tv', 'One of my very first tv projects, Weather TV is a weather application developed for educational purposes, designed specifically for the Tizen-Samsung OS using React. The application retrieves the user\'s location and real-time weather data, presenting the information in a clean, user-friendly interface optimized for TV screens.\nTested on a Samsung Smart TV (2019 model), Weather TV focuses on delivering a smooth and intuitive experience tailored to large displays.\nThis project demonstrates skills in adapting web technologies for smart TV environments, integrating external APIs, and building friendly interfaces with React.'),
    background: 'linear-gradient(236.65deg, #4B79A1 1.05%, #1D384F 53.56%, #1D384F 63.5%, #1D384F 72.15%, #1D384F 83.14%, #1D384F 93.48%)',
    color: '#4B79A1',
    codeUrl: 'https://github.com/devemg/wheather-tv',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745777509/my-portfolio/apps/Wheather-TV_xphwkj.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856855/my-portfolio/apps/wheather-tv/screeen-tv_d6vklz.png',
        alt: 'Splash',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856855/my-portfolio/apps/wheather-tv/screeen-tv-1_ptfwrl.png',
        alt: 'Good Time',
        width: 1179,
        height: 585
      }
    ]
  },
  {
    id: 'ecom-app',
    name: 'Ecom App',
    description: getProjectDescription('ecom-app', 'Ecom App is a modern online shop frontend project developed for educational purposes, focusing on showcasing best practices in web application development. Built with React and Redux Toolkit, Ecom App delivers a fast, responsive, and state-managed shopping experience.\nThe user interface was carefully designed using Figma, emphasizing clean layouts, intuitive navigation, and a seamless user journey. The project includes key e-commerce features such as product listings, detailed product pages, cart management, and state persistence through Redux.\nEcom App highlights a scalable frontend architecture, efficient state management, and a user-centric design approach, making it an excellent addition to a modern frontend development portfolio.'),
    color: '#b88e2f',
    background: 'linear-gradient(to right, #886719, #B88E2F)',
    demoUrl: 'https://ecom-app-01.web.app/',
    codeUrl: 'https://github.com/devemg/ecom-app',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745777510/my-portfolio/apps/ecom_iveyg5.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856056/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_095914_qcopoc.png',
        alt: 'Home',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856057/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_095923_yze1eq.png',
        alt: 'Shop',
        width: 1179,
        height: 585
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856059/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_095932_u6xrq6.png',
        alt: 'Details',
        width: 1179,
        height: 585
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856058/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_095941_vlrvba.png',
        alt: 'Shop Cart',
        width: 1179,
        height: 585
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856059/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_095952_kmy3gx.png',
        alt: 'Checkout',
        width: 1179,
        height: 585
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856058/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_100032_jkhob1.png',
        alt: 'Shop Mobile',
        width: 375,
        height: 613,
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745856057/my-portfolio/apps/ecom-app/Captura_de_pantalla_2025-04-28_100019_cjpmug.png',
        alt: 'Contact Mobile',
        width: 375,
        height: 613,
      },

    ]
  },
  {
    id: 'playely-web',
    name: 'Playely Web',
    description: getProjectDescription('playely-web', 'Playely is a multilingual OTT (Over-the-Top) platform frontend project built for educational purposes, designed to showcase modern web application development techniques. Developed with Angular and Angular Material, Playely integrates with The Movie Database (TMDB) API to fetch and display a rich catalog of movies and TV shows.\nThe project features full multilingual support, lazy loading for improved performance, a dedicated collections view to organize content into categories, and a custom player screen to simulate the streaming experience. The user interface is fully responsive and crafted using Angular Material components, following a modular and scalable architecture that highlights best practices in Angular development.\nPlayely not only demonstrates technical skills but also focuses on delivering a smooth and polished user experience, making it a strong portfolio piece for modern frontend development.'),
    color: '#f73695',
    background: 'linear-gradient(to right,#ff6a00,#ee0979)',
    demoUrl: 'https://playely.web.app/',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745777511/my-portfolio/apps/playely-logo_geeprj.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855254/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094339_ultglc.png',
        alt: 'Home',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855260/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094353_crpdiq.png',
        alt: 'Details Page',
        width: 1179,
        height: 585
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855264/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094531_glldwp.png',
        alt: 'Search page',
        width: 1179,
        height: 585
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855247/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094449_yneupz.png',
        alt: 'Sign In',
        width: 1179,
        height: 585
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855247/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094509_pap6m4.png',
        alt: 'Search Categories',
        width: 1179,
        height: 585
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855245/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094437_sakbld.png',
        alt: 'Player',
        width: 1179,
        height: 585
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855256/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094552_q4fewe.png',
        alt: 'Details Mobile',
        width: 375,
        height: 613,
      },
      {
        id: 8,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855247/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094630_q7leq3.png',
        alt: 'Settings Mobile',
        width: 375,
        height: 613,
      },
      {
        id: 9,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745855245/my-portfolio/apps/playely-web/Captura_de_pantalla_2025-04-28_094641_zs39so.png',
        alt: 'TOF Mobile',
        width: 375,
        height: 613,
      },
    ]
  },
  {
    id: 'playely-tv',
    name: 'Playely TV',
    description: getProjectDescription('playely-tv', 'Playely-TV is an OTT (Over-the-Top) platform frontend project built for educational purposes, designed to showcase modern web application development techniques. Developed with React, Playely-TV integrates with The Movie Database (TMDB) API to fetch and display a rich catalog of movies and TV shows.\nThe project features a dedicated collections view to organize content into categories and a custom player screen to simulate the streaming experience. It was tested on a Samsung Smart TV (2019 model), demonstrating knowledge of TV-specific requirements, layout adaptations, and TypeScript target builds for optimizing performance in smart TV environments.\nPlayely-TV highlights technical knowledge in React development, media-focused interfaces, and platform-specific optimization for production environments.'),
    color: '#f73695',
    background: 'linear-gradient(-15deg,   #E01A4F 0%, #E01A4F 25%,   #F15946 25%, #F15946 50%,   #F9C22E 50%, #F9C22E 75%,  #53B3CB 75%, #53B3CB 100%)',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745858632/my-portfolio/apps/playely-tv/playely-tv_kftwzf.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859734/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_105955_ma6zse.png',
        alt: 'Home hero',
        width: 1319,
        height: 741
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859741/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110007_otxeeb.png',
        alt: 'Home cards',
        width: 1319,
        height: 741
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859737/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110020_dovmw1.png',
        alt: 'Series Details',
        width: 1319,
        height: 741
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859738/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110029_hli4fj.png',
        alt: 'Series Episodes',
        width: 1319,
        height: 741
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859742/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110038_bftbvo.png',
        alt: 'Series Recomendations',
        width: 1319,
        height: 741
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859737/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110157_rou8yr.png',
        alt: 'Details More Info',
        width: 1319,
        height: 741
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859742/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110140_zhxiv2.png',
        alt: 'Cast Details',
        width: 1319,
        height: 741
      },
      {
        id: 8,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859736/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110102_mnz9x7.png',
        alt: 'Search Page',
        width: 1319,
        height: 741
      },
      {
        id: 9,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859735/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110051_ts1fx0.png',
        alt: 'Sign In Page',
        width: 1319,
        height: 741
      },
      {
        id: 10,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745859737/my-portfolio/apps/playely-tv/Captura_de_pantalla_2025-04-28_110115_zfencu.png',
        alt: 'Settings Page',
        width: 1319,
        height: 741
      }
    ]
  },
  {
    id: 'swiftmap-app',
    name: 'SwiftMap',
    description: getProjectDescription('swiftmap-app', 'SwiftMap is a React-based project developed for educational purposes, integrating Leaflet to create an interactive mapping experience. The application follows Taylor Swift\'s latest concert tour around the world, displaying detailed information related to each show.\nBuilt with a focus on simplicity and interactivity, SwiftMap combines dynamic map rendering with event-driven data visualization. Users can explore concert locations, view show details, and interact with the map in a responsive and engaging way.\nThis project demonstrates the integration of third-party libraries within a React application, emphasizing interactive UI development and creative data presentation.'),
    demoUrl: 'https://swiftmap.web.app/',
    codeUrl: 'https://github.com/devemg/swiftmap',
    color: '#C500A4',
    background: 'linear-gradient(to right, #C500A4, #7F006A, #5F004F)',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745777509/my-portfolio/apps/SwiftMap_wwjnd6.png',
    images: [
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857134/my-portfolio/apps/swiftmap/Captura_de_pantalla_2025-04-28_101635_kh2rcr.png',
        alt: 'Map',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857131/my-portfolio/apps/swiftmap/Captura_de_pantalla_2025-04-28_101718_sgk84e.png',
        alt: ' Details',
        width: 1179,
        height: 585
      },
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857108/my-portfolio/apps/swiftmap/Captura_de_pantalla_2025-04-28_101728_v7wwv3.png',
        alt: 'City',
        width: 1179,
        height: 585
      },
    ]
  },
  {
    id: 'brisland-ui-app',
    name: 'Brisland',
    description: getProjectDescription('brisland-ui-app', 'Brisland UI App is a tourism-focused country page developed for educational purposes, built with React and enhanced with animations using GSAP.\nThe application presents a fictional travel destination through a visually engaging and interactive interface, designed to deliver a smooth and dynamic user experience. With responsive layouts, intuitive navigation, and motion effects that bring the content to life, Brisland UI App demonstrates a strong focus on frontend design, animation, and user experience best practices.'),
    color: '#C52A47',
    codeUrl: 'https://github.com/devemg/brisland-ui',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745777509/my-portfolio/apps/Brisland_as3eku.png',
  },
  {
    id: 'invittalo-admin-app',
    name: 'Invittalo Admin',
    description: getProjectDescription('invittalo-admin-app', 'Invittalo Admin is a production-ready application developed with Angular 17 and Angular Material, designed to manage invitations and confirmations for events.\nThe application offers a streamlined platform for creating guest lists, sending invitations, and tracking RSVP responses, providing event organizers with an efficient and intuitive management tool. With a focus on clean UI, responsive design, and scalable architecture, Invittalo Admin demonstrates advanced skills in modern Angular development and real-world application design.'),
    background: 'linear-gradient(to right, #673AB7, #3C197A)',
    color: '#673AB7',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745778148/my-portfolio/apps/Invittalo_Admin_kax1tu.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857424/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102133_swt3nn.png',
        alt: 'Event list',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857434/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102251_eyppav.png',
        alt: 'New event',
        width: 1179,
        height: 585
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857435/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102306_ptg45z.png',
        alt: 'Event Details',
        width: 1179,
        height: 585
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857436/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102325_wdjv82.png',
        alt: 'Event with Filter',
        width: 1179,
        height: 585
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857572/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102526_opq8kj.png',
        alt: 'Invitation Mobile',
        width: 300,
        height: 613,
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857573/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102514_twftcf.png',
        alt: 'Event Detail Mobile',
        width: 325,
        height: 613,
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857581/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_102609_oel8qg.png',
        alt: 'Venue Form Mobile',
        width: 375,
        height: 613,
      },

    ]
  },
  {
    id: 'invittalo-xv-app',
    name: 'Invittalo XV',
    description: getProjectDescription('invittalo-xv-app', 'Invittalo Client is a production-ready application developed with Angular and animated using GSAP, created specifically for a client\'s XV birthday event.\nThe app delivers the final digital invitation for the event, presenting key information such as the event location, date, a gift table, and a confirmation section for guests to RSVP. Designed with a personalized theme matching the celebration\'s style, Invittalo Client enhances the invitation experience with smooth animations and a clean, responsive layout.\nThe project was developed following CI/CD best practices and managed through a structured Git Flow process, ensuring efficient release cycles and production-grade quality. It showcases expertise in Angular development, animation with GSAP, and professional software delivery techniques tailored for real-world clients.'),
    color: '#B5AA7E',
    background: 'linear-gradient(to right, #B5AA7E, #94895F)',
    logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1745778148/my-portfolio/apps/Invittalo-xv_rqdsd7.png',
    images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857983/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103123_elh2lu.png',
        alt: 'Invittalo XV Name',
        width: 1179,
        height: 585
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857984/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103139_vqb3bl.png',
        alt: 'Invittalo XV Date',
        width: 1179,
        height: 585
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745858000/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103157_yiqfvw.png',
        alt: 'Invittalo XV Confirmation',
        width: 1179,
        height: 585
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745857999/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103150_uvxtne.png',
        alt: 'Invittalo XV Message',
        width: 1179,
        height: 585
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745858005/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103243_scj1wx.png',
        alt: 'Gif table mobile',
        width: 392,
        height: 695
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745858001/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103209_a4bccu.png',
        alt: 'Confirmation Mobile',
        width: 392,
        height: 695
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/devemg/image/upload/v1745858003/my-portfolio/apps/invittalo/Captura_de_pantalla_2025-04-28_103220_rdvejz.png',
        alt: 'Message mobile',
        width: 392,
        height: 695
      },
    ]
  },
  {
    id: 'tic-tac-toe-tv',
    name: "Tic Tac Toe",
    description: `Tic Tac Toe is a classic strategy game played on a 3x3 grid. Two players take turns marking spaces with their symbols (X and O). The first player to get three of their marks in a row wins!\n
    I developed an engaging Tic Tac Toe game specifically designed for Samsung Smart TVs, ensuring seamless navigation using the TV remote. The app features a polished interface with smooth animations, making it enjoyable for players of all ages. Key elements include a custom splash screen and player name input via Samsung’s on-screen keyboard.\n
    Built with React 19, Vite, and Zustand, the app delivers a fast and responsive experience. I implemented i18next for multilingual support and React Router for intuitive navigation. The project follows Samsung’s TV app guidelines, including proper remote control handling and TV-friendly UI design.\n
    To streamline development, I set up a CI/CD pipeline that automatically handles builds and versioning (including Samsung TV builds!), with automated testing coming soon. This system keeps the releases consistent and makes submitting to the Samsung TV Store a breeze. Want to see how it all works? feel free to take a look!\n
    Currently, the app is undergoing Samsung’s certification process and will soon be available on the Samsung TV Store. Once approved, users can download it directly on their Samsung Smart TVs for a fun and interactive gaming experience.`,
    color: '#111827',
    logoSM: "https://res.cloudinary.com/devemg/image/upload/v1750112184/my-portfolio/apps/tic-tac-toe-tv_svz5hh.png",
    codeUrl: "https://github.com/devemg/tic-tac-toe-tv",
    demoUrl: "https://devemg.github.io/tic-tac-toe-tv/",
    images: [
      {
        id: 1,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113531/my-portfolio/apps/tic-tac-toe-tv/home_tqwklf.png",
        alt: 'Home',
      },
      {
        id: 2,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113618/my-portfolio/apps/tic-tac-toe-tv/image_2_mqgrrs.png",
        alt: 'New Game',
      },
      {
        id: 3,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113619/my-portfolio/apps/tic-tac-toe-tv/image_3_emvpux.png",
        alt: 'Game board',
      },
      {
        id: 4,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113620/my-portfolio/apps/tic-tac-toe-tv/image_4_cbqnyd.png",
        alt: 'Scoreboard',
      },
      {
        id: 5,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113716/my-portfolio/apps/tic-tac-toe-tv/image_5_jyhmd0.jpg",
        alt: 'Instructions',
      },
      {
        id: 6,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113619/my-portfolio/apps/tic-tac-toe-tv/image_6_nowfpc.png",
        alt: 'Settings',
      },
      {
        id: 7,
        width: 1920,
        height: 1080,
        src: "https://res.cloudinary.com/devemg/image/upload/v1750113777/my-portfolio/apps/tic-tac-toe-tv/image_lflh6m.jpg",
        alt: "Language selection"
      }
    ]
  }
];

// Mantener compatibilidad con código existente
export const devemgProjects: ProjectItem[] = getDevemgProjects();