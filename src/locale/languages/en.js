const content = {
  en: {
    locale: {
      header: {
        nav: {
          about: 'About',
          skills: 'Skills',
          works: 'Works',
          contact: 'Contact',
        },
        resume: {
          name: 'Resume',
          downloadName: 'tiago-leite-resume',
          downloadMessage: 'Downloading resume',
        },
      },
      aboutSection: {
        intro: "Hello, I'm Tiago Leite.",
        welcome: 'Welcome to my portfolio',
        smallDescription: "I'm a",
        animatedTexts: {
          textOne: 'front-end developer',
          textTwo: 'web developer',
          textThree: 'CSS wizard',
          textFour: 'React developer',
          textFive: 'JavaScript ninja',
          textSix: 'UI engineer',
        },
        aboutMe: 'About me',
        description:
          "I'm a self-taught and motivated front-end developer, I'm constantly learning new technologies. My main focus is to develop websites and web aplications that are objective, functional and attractive in their look. Always based on the principles of usability and navigability.",
        buttons: {
          work: 'View Work',
          hire: 'Contact',
        },
      },
      skillsSection: {
        sectionName: 'Skills',
        intro:
          "I started studying by building a solid foundation in the world of web development, HTML, CSS, Javascript and accessibility. I learned front-end frameworks, RESTful APIs and also back-end and database technologies. I deepened my knowledge into industry tools like Git and best practice for commits, testing tools like Jest and Mocha, linting, package management, and build tools like Webpack and Babel, among many other tools. I made a small compilation of the main technologies that I am currently using in my toolset. I'm always open to learning new technologies to expand my knowledge.",
        showMore: 'Show More',
        showLess: 'Show Less',
      },
      worksSection: {
        sectionName: 'Works',
        intro:
          'I created and participated in the development of complete projects. Testing, optimizing, fixing bugs and collaborating with designers. Here are some examples of my work.',
        workElement: {
          tools: 'Tools',
          buttons: {
            demo: 'Live Demo',
            code: 'View Code',
          },
          featured: 'Featured Project',
        },
        cineflix: {
          name: 'Cineflix',
          description:
            'Database of movies mimicking the look of Netflix, it has integration with Firebase to create an account, login and save the movies to favorites.',
          alt: 'cineflix website of movie and series information',
        },
        classicGames: {
          name: 'Classic Games',
          description:
            'Website of my favorite classic games that I recreated in a more simplified way using HTML, CSS and JavaScript. My goal with this is to learn the logic and the syntax of JavaScript.',
          alt: 'classic games repository website',
        },
        noir: {
          name: 'Noir',
          description:
            'Noir is a 100% responsive barbershop website, with dark-mode and 4 pages made in HTML, LESS and JavaScript, without the use of any frameworks.',
          alt: 'noir barbershop website',
        },
        lasso: {
          name: 'Lasso',
          description:
            'A complete e-commerce where users can create an account and login, add products to cart, shop, filter products by category, name, brand, see the order list and much more.',
          alt: 'lasso online store',
        },
        hypeCamper: {
          name: 'Hype Camper',
          description:
            'Hype Camper is a full stack CRUD website where Node, Express and MongoDB have been integrated into the front-end. Users can create, review and manage campgrounds.',
          alt: 'hype camper camping locations website',
        },
      },
      contactSection: {
        sectionName: 'Contact',
        intro:
          'To contact me, fill out the form below, or if you prefer, contact me via LinkedIn or send an email. I am available for hire and open to any ideas of cooperation, also as a freelancer.',
        placeholders: {
          placeholderName: 'Name',
          placeholderMessage: 'Message',
        },
        button: 'Send',
      },
      toast: {
        contact: {
          success: 'Message sent successfully!',
          error: 'Error! Please try again later.',
        },
      },
      footer: 'source',
    },
  },
};

export { content };
