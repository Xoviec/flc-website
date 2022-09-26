import {FaChalkboardTeacher} from "react-icons/fa"
import {RiSuitcase2Line} from "react-icons/ri"
import {GiTeacher} from "react-icons/gi"
import {MdHotelClass, MdOutlineQueryStats} from "react-icons/md"
import { BsClouds, BsListCheck, BsCodeSlash } from 'react-icons/bs';
import {FaHandsHelping} from 'react-icons/fa';
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone} from "react-icons/ai"

export const Links =[
    {name:"Home",link:"/"},
    {name:"Events",link:"/events"},
    {name:"Team",link:"/team"},
];

export const points = [
    {icon: <BsClouds className='w-10 h-10'/>, desc: 'We stay curious, and seek out new solutions.'},
    {icon: <BsListCheck className='w-10 h-10'/>, desc: 'We work relentlessly to produce fruitful results.'},
    {icon: <FaHandsHelping className='w-12 h-12'/>, desc: 'We support each other to grow, with a positive spirit, and embrace our diversities.'},
];

export const perks = [
    {icon:<FaChalkboardTeacher className="w-10 h-10 text-yellow-500" />,title:'Workshops',desc:'The members get free access to all the events and workshops conducted by the Finite Loop club.'},
    {icon:<RiSuitcase2Line className="w-10 h-10 text-yellow-500" />,title:'Internships',desc:'Get a chance to grab internships and put your skills into use.'},
    {icon:<GiTeacher className="w-10 h-10 text-yellow-500" />,title:'Peer to Peer Learning',desc:'Explain your ideas to others and participate in activities through which you can learn from your peers.'},
    {icon:<MdHotelClass className="w-10 h-10 text-yellow-500" />,title:'Guest Lecture',desc:'Get an opportunity to listen to some of the renowned experts, and engage in discussions.'},
    {icon:<MdOutlineQueryStats className="w-10 h-10 text-yellow-500" />,title:'Real-Time Projects',desc:'Being in this club, you get to work on real time projects, which allows you to bring out your creative side.'},
    {icon:<BsCodeSlash className="w-10 h-10 text-yellow-500" />,title:'Coding Contest',desc:'We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.'}
]

export const social =[
    {link:'https://www.instagram.com/finiteloop_club_nmamit/',icon:<AiOutlineInstagram className="w-7 h-7 hover:text-yellow-500"/>, name: 'Instagram'},
    {link:'https://www.facebook.com/FiniteLoopClub.Nmamit/',icon:<AiOutlineFacebook className="w-7 h-7 hover:text-yellow-500"/>, name: 'Facebook'},
    {link:'https://www.linkedin.com/showcase/finite-loop-club',icon:<AiOutlineLinkedin className="w-7 h-7 hover:text-yellow-500"/>, name: 'LinkedIn'},
    {link:'mailto:finiteloopclub@gmail.com',icon:<AiOutlineMail className="w-7 h-7 hover:text-yellow-500"/>, name: 'E-mail'},
    {link:'tel:8861643971',icon:<AiOutlinePhone className="w-7 h-7 hover:text-yellow-500"/>, name: 'Call Us'},
]

export const eventTabs = [
  "All",
  "2021-22",
  "2020-21",
  "2017-20",
]

export const events = [
    {
      name: "Git and Github - Hands on Workshop",
      date: "21/05/2022",
      attended: "75+ Participants",
      type: "Hands-On Workshop",
      image: "/events/github/picture1.jpg",
      organizer: "Anjuman Raj, Bhargavi Nayak",
      desc: "Finite Loop Club, NMAMIT, Nitte successfully conducted yet another hands-on session, “Git and Github”, on 21st May 2022. The organizers of the event were Mr. Nagaraj Pandith, 2nd year, CSE, and Mr. Swasthik Shetty, 2nd year, CSE.",
      year: "2021-22",
    },
    {
      name: "Javascript Mastery",
      date: "12/03/2022",
      attended: "70+ Participants",
      type: "Hands-On Workshop",
      image: "/events/jsMastery/picture1.jpeg",
      organizer: "Shrilakshmi Pai",
      desc: "Finite Loop Club, NMAMIT, Nitte successfully conducted a workshop on “Javascript Mastery” by our alumni, Mr. Shashank S Shetty on March 12, 2022. ",
      year: "2021-22",
    },
    {
      name: " WAR ZONE",
      date: "26/11/2021",
      attended: "10+ Teams",
      type: "Gaming",
      image: "/events/warzone/warzone.jpeg",
      organizer: "Thejas Kumar, Dhanish S Suvarna",
      desc:
        "Call of Duty (COD) was played by the registered teams based on the maps, FiringRange, Standoff, Summit, Nuketown. Teams were made to compete against each other based on toss and after a great fight, Team DPH could battle through excel! Winners: Shravan P, Aravinda Krishna U, Rathan B, M Ankur Baliga, Achal Rai.",
      year: "2021-22"
    },
  
    
    {
      name: " Website Launch and Invited Talk on “Company Fit Culture”:",
      date: "03/03/2022",
      attended: "60+ Participants",
      type: "Invited Talk",
      image: "/events/websiteLaunch/picture1.jpeg",
      organizer: "Finite Loop Team",
      desc: "Finite Loop Club, NMAMIT, Nitte successfully launched its new website at the event held at Shambhavi Seminar Hall on 3rd March 2022. Mr. Sumukh Bhandarkar, a Software Developer at Oracle was the Chief guest. The core members of Finite Loop Club were handed over their Identity Cards by the Principal on this occasion. The launch was followed by a talk on 'Company Fit Culture' by Mr. Sumukh Bhandarkar. The importance of Test Cases and Open source contributions were the main highlights.",
      year: "2021-22",
    },
  
    {
      name: "Web Appilcation Hacking and Penetration Testing",
      date: "16/12/2021",
      attended: "40+ Teams",
      type: "Cyber Security",
      image: "/events/hacking/hacking.jpeg",
      organizer: "Abdeali",
      desc:
        "This workshop was conducted by Abdeali, 3rd CSE, NMAMIT. It had a positive impact among the participants and gave the newbies the required knowledge and resources to kickstart their journey in the field of Cyber Security.",
      year: "2021-22"
    },
  
    {
      name: "Cyhack",
      date: "26/05/2021",
      attended: "60+ Teams",
      type: "Cyber Security",
      image: "/events/cyhack/picture1.png",
      organizer: "Sanath R Pai, Shravya S Rao , Shrilakshmi Pai N",
      desc:
        "Information Security competition that challenges the contestants to solve a variety of tasks ranging from a scavenger hunt on Wikipedia to basic programming exercises, to hack their way into a server to steal the data.",
      year: "2020-21"
    },
  
    {
      name: "Kurukshetra",
      date: "11/03/2021",
      attended: "150+ participants",
      type: "Cyber Security",
      image: "/events/kurukshetra/picture1.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop club, NMAMIT, Nitte, successfully conducted a gaming event on 11th March, 2021. It was a fun and a lively event. More than 150 students competed to obtain the title of Ultimate Champions. The event consisted of three games, which were Call of Duty, NFS, eFootballPes",
      year: "2020-21"
    },
    {
      name: "CODE INNOVATION SERIES",
      date: "28-30 October, 2020",
      attended: "80+ Teams",
      type: "Open source Hackathon",
      image: "/events/code_innovation/picture2.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop Club under the Centre for Student Innovation (CFSI) in association with the New Age Innovation Network (NAIN), KITS, Dept. of Electronics, IT, BT and S&T, Govt. of Karnataka organized “CODE INNOVATION SERIES - NMAMIT” hosted by IncubateIND under the GitHub Campus Program in collaboration with our college, and thus was a part of India's largest open source Hackathon.",
      year: "2020-21"
    },
    {
      name: "Naari Tattva",
      date: "13/03/2021",
      attended: "100+ Participants",
      type: "Seminar",
      image: "/events/naritatva/picture.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop NMAMIT, Nitte, organized an event, 'Naari Tattva', on 13th of March, 2021. This event glorified the achievements of women in various fields. The session consisted of Inspirational talk by women achievers, Stand-up comedy, Poetry, Shayari, narrating short stories and The grand quiz.",
      year: "2020-21"
    },
    {
      name: "DEBUNKER 101",
      date: "26/04/2021",
      attended: "150+ Participants",
      type: "Seminar",
      image: "/events/debunker/picture1.png",
      organizer: "Sanath R Pai, Shravya S Rao, Rahul S",
      desc:
        "Finite Loop Club-NMAMIT in association with the Dept. of Electrical and Electronics Engineering, conducted the virtual debugging workshop Debunker 101 on 26th April 2021 from 2-5 pm. The workshop was conducted to provide placement related tips on debugging and coding in C/C++ for pre-final year students of the EEE dept.",
      year: "2020-21"
    },
    {
      name: "Importance of Web in the era of AI",
      date: "10/10/2020",
      attended: "200+ Participants",
      type: "Seminar",
      image: "/events/imp_web_ai_era/crp_pic.png",
      organizer: "Finite Loop Team",
      desc:
        "Dr. Gokul S Krishnan in his guest lecture, spoke about the evolution of the web. He discussed various versions through which the web has evolved. He also went on to talk about Machine Learning, Internet of Things, and the role of web and web services. The two hours of the session provided glimpses of the research direction of various trending technologies.",
      year: "2020-21"
    },
    {
      name: "A hands on session on DevOps",
      date: "24-25th February 2018",
      attended: "30+ Participants",
      type: "Workshop",
      image: "/events/devops/picture1.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop had successfully conducted a two-day workshop on “A hands on session on DevOps“. Students from various semesters actively took part in the workshop. The session started off with Introduction to DevOps. The session then continued with Git, a version control system for tracking changes in computer files and coordination. The usage of GitHub and remote connection to GitHub was taught in the session. The second day began with the second session of DevOps workshop. The testing of code (i.e. project) by an automated build (Travis CI) was taught in the session. Docker, a computer program performing OS level virtualization was introduced. Dockerizing a project was taught and we deployed our own web server using docker and Django, a high-level python framework. This marked the end of the 2-day workshop on “A hands on session on DevOps”",
      year: "2017-20"
    },
    {
      name: "Screening Test",
      date: "12/01/2018",
      attended: "40+ Participants",
      type: "Workshop",
      image: "/events/screening_test/Picture1.jpg",
      organizer: "Finite Loop Team",
      desc:
        "A screening test was conducted for those who wished to be a part of this club. In the first round, 20 objective type questions on C and C++ were to be answered by the students. Students from various branches took part in it. For the second round, the short listed students were asked to solve two questions, one of them being a problem statement, and another, a web development question. 9 contestants were selected as the new members of Finite Loop, based on their style, creativity and problem solving ability.",
      year: "2017-20"
    },
    {
      name: "Android App development",
      date: "28-29th October 2017",
      attended: "30+ Participants",
      type: "Android Development",
      image: "/events/android_dev/picture3.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop in association with Centre For Student Innovation(CFSI), had conducted a 2-day Workshop on “Android App Development”. The students were taught the basics of Android, its life cycles, coding with Android studio. The students were able to develop a small scale android application at the end of the sessions.",
      year: "2017-20"
    },
    {
      name: "Introduction to Web Development",
      date: "16-17th September 2017",
      attended: "60+ Participants",
      type: "Web Development",
      image: "/events/intro_to_web/Picture3.png",
      organizer: "Finite Loop Team",
      desc:
        "Finite loop in association with Centre For Student Innovation(CFSI), had conducted a 2-day Workshop on “Introduction to Web Designing”. The sessions covered topics on basic Html, CSS and JavaScript.",
      year: "2017-20"
    },
    {
      name: "Backend Development using PHP",
      date: "23-24th September 2017",
      attended: "50+ Participants",
      type: "Web Development",
      image: "/events/backend_dev/Picture2.jpg",
      organizer: "Finite Loop Team",
      desc:
        "Finite Loop in association with Centre For Student Innovation(CFSI), has conducted a 2-day Workshop on “Backend Development using PHP”. The sessions covered topics on server side programming concepts using PHP.",
      year: "2017-20"
    },
];

export const members = [
    //Faculty 
    {
      name: "Mr. NIRANJAN N CHIPLUNKAR",
      role: "PRINCIPAL",
      img: "/team/faculty/principal.jpg",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/niranjan-chiplunkar-47b302a/",
      year:"Faculty"
    },
    {
      name: "Mr. Shashank Shetty",
      role: "Assistant Professor-CSE",
      img: "/team/faculty/shashank_sir.png",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/niranjan-chiplunkar-47b302a/",
      year:"Faculty"
    },
    {
      name: "Mr. Krishna Prasad Rao",
      role: "Assistant Professor-CSE",
      img: "/team/faculty/kp_sir.jpg",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/niranjan-chiplunkar-47b302a/",
      year:"Faculty"
    },
    {
      name: "Mr. Puneeth R P",
      role: "Assistant Professor-CSE",
      img: "/team/faculty/puneet_sir.jpg",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/niranjan-chiplunkar-47b302a/",
      year:"Faculty"
    },
    //Team2022-23


    {
      name: "Bhargavi Nayak",
      role: "President",
      img: "/team/team2022/bhargavi.jpg",
      github: "https://github.com/Bhargavi09",
      linkedin: "https://www.linkedin.com/in/bhargavi-nayak/?original_referer=https%3A%2F%2Ffiniteloop.co.in%2F",
      year: "2022-23"
    },
    {
      name: "Nagaraj Pandith",
      role: "Vice-President",
      img: "/team/team2022/nagaraj.jpeg",
      github: "https://github.com/nagarajpandith",
      linkedin: "https://www.linkedin.com/in/nagaraj-pandith/",
      year: "2022-23"
    },
  ,
    {
      name: "Apoorva Prabhu",
      role: "Joint Secretary",
      img: "/team/team2022/apoorva.jpg",
      github: "https://github.com/Apoorva77",
      linkedin: "https://www.linkedin.com/in/apoorva-prabhu-r/",
      year: "2022-23"
    },
    {
      name: "Padmashree ",
      role: "Joint Secretary",
      img: "/team/team2023/Padmashree.jpg",
      github: "https://github.com/padmashreeshetty123",
      linkedin: "https://www.linkedin.com/in/padmashree-shetty-1298b2228/",
      year: "2022-23"
    },
    {
      name: "Bhoomika Prabhu",
      role: "Events Head",
      img: "/team/team2022/bhoomika.jpg",
      github: "https://github.com/Bhoomika-05",
      linkedin: "https://www.linkedin.com/in/bhoomika-prabhu-9b36a61a8/",
      year: "2022-23"
    },
    {
      name: "Thejas Kumar",
      role: "Events Head",
      img: "/team/team2022/thejas.jpeg",
      linkedin: "https://www.linkedin.com/in/thejas-kumar-k-778a4220a",
      year: "2022-23"
    },

    {
      name: "Anjuman Raj",
      role: "Technical Head",
      img: "/team/team2022/anjuman.png",
      github: "https://github.com/ayusmann/",
      linkedin: "https://www.linkedin.com/in/anjuman-raj-ba390b1b5/",
      bgImage: "/team/bg/bgBlue.jpg",
      year: "2022-23"
    },

    {
      name: "Swasthik Shetty",
      role: "Technical Head",
      img: "/team/team2022/swastik.jpeg",
      github: "https://github.com/swasthikshetty10",
      linkedin: "https://www.linkedin.com/in/swasthikshetty10/",
      year: "2022-23"
    },
    {
      name: "Abdeali",
      role: "Ethical Hacking Head",
      img: "/team/team2023/Abdeali.jpg",
      year: "2022-23"
    },
    {
      name: "Ashish Shankar",
      role: "UI/UX Co-Lead",
      img: "/team/team2023/Ashish.jpg",
      year: "2022-23"
    },
    {
      name: "Shetty Ritesh",
      role: "Social Media Co-Lead",
      img: "/team/team2023/RITESH_SHETTY.jpg",
      year: "2022-23"
    },
    {
      name: "B Atul V Pai",
      role: "Content Co-Lead",
      img: "/team/team2023/Atul.jpg",
      year: "2022-23"
    },
    {
      name: "Dhanish Suvarna",
      role: "Program Adviser",
      img: "/team/team2022/dhanish.jpg",
      github: "https://github.com/dhanishssuvarna",
      linkedin: "https://www.linkedin.com/in/dhanishssuvarna",
      year: "2022-23"
    },
    {
      name: "Amogha Mayya",
      role: "Program Adviser",
      img: "/team/team2022/Amogha.png",
      github: "https://github.com/Amogha-Maiya",
      linkedin: "https://www.linkedin.com/in/amogha-mayya",
      year: "2022-23"
    },
    {
      name: "Karthik Acharya",
      role: "Program Adviser",
      img: "/team/team2022/karthikA.jpg",
      github: "https://github.com/Karthikg09",
      linkedin: "https://www.linkedin.com/in/gkarthikacharya",
      year: "2022-23"
    },
    {
      name: "Akash Rao",
      role: "Program Adviser",
      img: "/team/team2023/AkashRao.jpg",
      year: "2022-23"
    },
    {
      name: "Ashwini Archarya",
      role: "Program Lead",
      img: "/team/team2023/ASHWINIACHARYA.jpg",
      year: "2022-23"
    },
    {
      name: "Shruthi Poojary",
      role: "Program Lead",
      img: "/team/team2023/ShruthiPoojari.jpg",
      year: "2022-23"
    },
    {
      name: "Vaishnavi Prasad",
      role: "Program Lead",
      img: "/team/team2023/VAISHNAVI PRASAD.jpg",
      year: "2022-23"
    },
    {
      name: "vaishnavi K",
      role: "Program Lead",
      img: "/team/team2023/vaishnavi k.jpeg",
      year: "2022-23"
    },
    {
      name: "Bhushan Nayak",
      role: "Program Lead",
      img: "/team/team2023/Bhushan Nayak.jpg",
      year: "2022-23"
    },
    {
      name: "Swasthik Shetty",
      role: "Program Lead",
      img: "/team/team2023/Swasthik Shetty.jpg",
      year: "2022-23"
    },
    {
      name: "Daivik Shetty",
      role: "Program Lead",
      img: "/team/team2023/Daivik Shetty.jpg",
      year: "2022-23"
    },
    {
      name: "Rahul Pai",
      role: "Program Lead",
      img: "/team/team2023/Rahul Pai.jpg",
      year: "2022-23"
    },
    {
      name: "Prajwal Suvarna",
      role: "Program Lead",
      img: "/team/team2023/Prajwal Suvarna.jpg",
      year: "2022-23"
    },
    {
      name: "PAVAN A B",
      role: "Program Lead",
      img: "/team/team2023/PAVAN A B.jpg",
      year: "2022-23"
    },
    {
      name: "NIDHEESHA T",
      role: "Program Lead",
      img: "/team/team2023/NIDHEESHA T.jpg",
      year: "2022-23"
    },

    //Team 2021-22
    {
      name: "Shrilakshmi Pai",
      role: "President",
      img: "/team/team2022/shrilaxmi.png",
      github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/shrilakshmipai",
      year:"2021-22"
    },
    {
      name: "Bhargavi Nayak",
      role: "Vice-President",
      img: "/team/team2022/bhargavi.jpg",
      github: "https://github.com/Bhargavi09",
      linkedin: "https://www.linkedin.com/in/bhargavi-nayak/?original_referer=https%3A%2F%2Ffiniteloop.co.in%2F",
      year:"2021-22"
    },
    {
      name: "Rahul Bhat",
      role: "Secretary",
      img: "/team/team2022/rahul.jpg",
      github: "https://github.com/rahulbhat02",
      linkedin: "https://www.linkedin.com/in/rahul-bhat-a050731a9/",
      year:"2021-22"
    },
    {
      name: "Dhanish Suvarna",
      role: "Joint Secretary",
      img: "/team/team2022/dhanish.jpg",
      github: "https://github.com/dhanishssuvarna",
      linkedin: "https://www.linkedin.com/in/dhanishssuvarna",
      year:"2021-22"
    },
    {
      name: "Apoorva Prabhu",
      role: "Events-Head",
      img: "/team/team2022/apoorva.jpg",
      github: "https://github.com/Apoorva77",
      linkedin: "https://www.linkedin.com/in/apoorva-prabhu-r/",
      year:"2021-22"
    },
    {
      name: "Thejas Kumar",
      role: "Events Co-Head",
      img: "/team/team2022/thejas.jpeg",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/thejas-kumar-k-778a4220a",
      year:"2021-22"
    },
    {
      name: "Saishree",
      role: "Graphics Design Head",
      img: "/team/team2022/saishree.png",
      // github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/sai-shree",
      year:"2021-22"
    },
    {
      name: "Vidyesh Kumar",
      role: "Graphics Design Co-Head",
      img: "/team/team2022/vidyesh.jpeg",
      github: "https://github.com/vidyesh-kumar",
      linkedin: "hhttps://www.linkedin.com/in/vidyesh-kumar-83667221a/",
      year:"2021-22"
    },
    {
      name: "Anjuman Raj",
      role: "Technical Head",
      img: "/team/team2022/anjuman.png",
      github: "https://github.com/ayusmann/",
      linkedin: "https://www.linkedin.com/in/anjuman-raj-ba390b1b5/",
      bgImage: "/team/bg/bgBlue.jpg",
      year:"2021-22"
    },
    {
      name: "Bhoomika Prabhu",
      role: "Social Media Head",
      img: "/team/team2022/bhoomika.jpg",
      github: "https://github.com/Bhoomika-05",
      linkedin: "https://www.linkedin.com/in/bhoomika-prabhu-9b36a61a8/",
      year:"2021-22"
    },
    {
      name: "Vaishnavi Salvankar",
      role: "Content Writing Head",
      img: "/team/team2022/vaishnavi.jpg",
      github: "https://github.com/Vaishnavi031",
      linkedin: "https://www.linkedin.com/in/vaishnavisalvankar/",
      year:"2021-22"
    },
    {
      name: "Nagaraj Pandith",
      role: "Technical Content Head",
      img: "/team/team2022/nagaraj.jpeg",
      github: "https://github.com/nagarajpandith",
      linkedin: "https://www.linkedin.com/in/nagaraj-pandith/",
      year:"2021-22"
    },
    {
      name: "Swasthik Shetty",
      role: "Technical Team",
      img: "/team/team2022/swastik.jpeg",
      github: "https://github.com/swasthikshetty10",
      linkedin: "https://www.linkedin.com/in/swasthikshetty10/",
      year:"2021-22"
    },
    {
      name: "Rachana Prabhu",
      role: "Technical Team",
      img: "/team/team2022/Rachana.jpg",
      github: "https://www.github.com/Rachana-27",
      linkedin: "https://www.linkedin.com/in/rachana-prabhu-65685118a",
      year:"2021-22"
    },
    {
      name: "Rashmi Baliga P",
      role: "Technical Team",
      img: "/team/team2022/Rashmi.jpg",
      github: "https://github.com/Rashmibaliga",
      linkedin: "https://www.linkedin.com/in/rashmi-baliga-0aa082172/",
      year:"2021-22"
    },
    {
      name: "Karthik Acharya",
      role: "Technical Team",
      img: "/team/team2022/karthikA.jpg",
      github: "https://github.com/Karthikg09",
      linkedin: "https://www.linkedin.com/in/gkarthikacharya",
      year:"2021-22"
    },
    {
      name: "Samantri Vinay",
      role: "Technical Team",
      img: "/team/team2021/Vinay_Samantri.jpg",
      github: "https://github.com/ViNi57",
      linkedin: "https://www.linkedin.com/in/vinay-samantri-15845a201/",
      year:"2021-22"
    },
    {
      name: "Pratheeksha P",
      role: "Technical Team",
      img: "/team/team2022/Pratheeksha.jpg",
      github: "https://github.com/Pratheeksha29",
      linkedin: "https://www.linkedin.com/in/pratheeksha-p-8ba0501b4/",
      year:"2021-22"
    },
    {
      name: "Amogha Mayya",
      role: "Technical Team",
      img: "/team/team2022/Amogha.png",
      github: "https://github.com/Amogha-Maiya",
      linkedin: "https://www.linkedin.com/in/amogha-mayya",
      year:"2021-22"
    },
    
    //Team 2021-20
    {
      name: "Sanath R Pai",
      role: "President",
      img: "/team/team2021/sanath.jpg",
      github: "https://github.com/sanathpai",
      linkedin: "https://www.linkedin.com/in/sanath-r-pai-0a415118a",
      year:"2020-21"
    },
    {
      name: "Shrilakshmi Pai N",
      role: "Vice President",
      img: "/team/team2022/shrilaxmi.png",
      github: "https://github.com/ShrilakshmiPai",
      linkedin: "https://www.linkedin.com/in/shrilakshmipai",
      year:"2020-21"
    },
  
    {
      name: "Saheer Abdul Rehman",
      role: "Core Member",
      img: "/team/team2021/Saheer Rehman.jpg",
      github: "https://github.com/Saheer555",
      linkedin: "https://www.linkedin.com/in/saheer-a-r",
      year:"2020-21"
    },
    
    {
      name: "Melroy Neil Dsouza",
      role: "Core Member",
      img: "/team/team2021/melroy.jpeg",
      github: "https://github.com/meldsza",
      linkedin: "https://www.linkedin.com/in/melroy-dsouza-9a0752170/",
      year:"2020-21"
    },
    {
      name: "Rahul Bhat",
      role: "Secrectary",
      img: "/team/team2022/rahul.jpg",
      github: "https://github.com/rahulbhat02",
      linkedin: "https://www.linkedin.com/in/rahul-bhat-a050731a9/",
      year:"2020-21"
    },
    {
      name: "Shravya S Rao",
      role: "Content Writing Head",
      img: "/team/team2021/shravya.jpg",
      github: "https://github.com/shravya-s-rao",
      linkedin: "https://www.linkedin.com/in/shravya-s-rao/",
      year:"2020-21"
    },
    {
      name: "Shreelata Kini",
      role: "Joint Secrectary",
      img: "/team/team2021/Shreelata Kini.jpeg",
      year:"2020-21"
    },
    {
      name: "Rishika Kalappa",
      role: "Treasurer",
      img: "/team/team2021/Rishika Kalappa.jpg",
      year:"2020-21"
    },
    {
      name: "Vaishnavi Salvankar",
      role: "Documentation Head",
      img: "/team/team2022/vaishnavi.jpg",
      github: "https://github.com/Vaishnavi031",
      linkedin: "https://www.linkedin.com/in/vaishnavisalvankar",
      year:"2020-21"
    },
    {
      name: "Rahul Sheregar",
      role: "Publicity Head",
      img: "/team/team2021/rahul s.jpeg",
      linkedin: "https://www.linkedin.com/in/rahul-sheregar-9655a51a7/",
      year:"2020-21"
    },
    {
      name: "Thejalaxmi",
      role: "Publicity Head",
      img: "/team/team2022/thejalaxmi.jpg",
      github: "https://github.com/Thejalakshmi28",
      linkedin: "https://www.linkedin.com/in/theja-lakshmi-41689a1ab/",
      year:"2020-21"
    },
    {
      name: "Samantri Vinay",
      role: "Publicity Head",
      img: "/team/team2021/Vinay_Samantri.jpg",
      github: "https://github.com/ViNi57",
      linkedin: "https://www.linkedin.com/in/vinay-samantri-15845a201/",
      year:"2020-21"
    },
    {
      name: "Rachana Prabhu",
      role: "Social Media Head",
      img: "/team/team2022/Rachana.jpg",
      github: "https://www.github.com/Rachana-27",
      linkedin: "https://www.linkedin.com/in/rachana-prabhu-65685118a",
      year:"2020-21"
    },
    {
      name: "Moghe Sudheesh Rao",
      role: "Social Media Head",
      img: "/team/team2021/Moghe Sudheesh Rao.jpeg",
      year:"2020-21"
    },
    {
      name: "Rashmi Baliga",
      role: "Social Media Head",
      img: "/team/team2022/Rashmi.jpg",
      github: "https://github.com/Rashmibaliga",
      linkedin: "https://www.linkedin.com/in/rashmi-baliga-0aa082172",
      year:"2020-21"
    },
  
    //Team 2020-2017
    {
      name: "Ms. Pooja Shetty",
      role: "Core Member",
      img: "/team/team17/pooja.jpg",
      linkedin: "https://www.linkedin.com/in/pooja-shetty-16b311161/",
      year:"2017-20"
    },
    {
      name: "Mr. Venkatesh Prasad M Pai",
      role: "Core Member",
      img: "/team/team17/venkatesh.jpg",
      linkedin: "https://www.linkedin.com/in/paivenky191/",
      year:"2017-20"
    }, {
      name: "Mr. Mukul H S",
      role: "Core Member",
      img: "/team/team17/mukul.jpg",
      linkedin: "https://www.linkedin.com/in/hsmukul22/",
      year:"2017-20"
    }, {
      name: "Mr. Manjunatha U",
      role: "Core Member",
      img: "/team/team17/Manjunath.jpg",
      linkedin: "hhttps://www.linkedin.com/in/manjunatha-u-a5bbb715b/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. Gurudeep U J",
      role: "Core Member",
      img: "/team/team17/guru.jpg",
      linkedin: "https://www.linkedin.com/in/gurudeep-u-j-206709129/",
      year:"2017-20"
    }, {
      name: "Mr. Aneesh Mathai",
      role: "Core Member",
      img: "/team/team17/aneesh.jpg",
      linkedin: "https://www.linkedin.com/in/aneesh-mathai-1b0780a9/",
      year:"2017-20"
    }, {
      name: "Mr. Pawan Raj",
      role: "Core Member",
      img: "/team/team17/pawan.jpg",
      linkedin: "https://www.linkedin.com/in/pawan-raj-300994/",
      year:"2017-20"
    }, {
      name: "Mr. Akshay Devadiga",
      role: "Core Member",
      img: "/team/team17/akshay.jpg",
      linkedin: "https://www.linkedin.com/in/akshay-devadiga-652687115/",
      year:"2017-20"
    },  {
      name: "Mr. Mohammad Sabith",
      role: "Core Member",
      img: "/team/team17/sabith.jpg",
      linkedin: "https://www.linkedin.com/in/mohammedsabith/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. Rajath Aithal",
      role: "Core Member",
      img: "/team/team17/rajath.jpg",
      linkedin: "https://www.linkedin.com/in/rajathaithal/",
      year:"2017-20"
    }, 
    {
      name: "Mr. B. Anudeep",
      role: "Core Member",
      img: "/team/team17/anudeep.jpg",
      linkedin:"https://www.linkedin.com/in/anudeep07/?originalSubdomain=in",
      year:"2017-20"
    }, 
    {
      name: "Mr. Sriharivishnu",
      role: "Core Member",
      img: "/team/team17/srihari.jpg",
      linkedin: "https://www.linkedin.com/in/srihari-vishnu-2456921a5/?originalSubdomain=in",
      year:"2017-20"
    },
     {
      name: "Mr. Sachin Prabhu",
      role: "Core Member",
      img: "/team/team17/Sachin.jpg",
      linkedin: "https://www.linkedin.com/in/sachinprabhuk/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. G Amar Prabhu",
      role: "Core Member",
      img: "/team/team17/amar.jpg",
      linkedin: "https://www.linkedin.com/in/g-amar-prabhu/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. Shrikantha Budya",
      role: "Core Member",
      img: "/team/team17/shrikanth.jpg",
      linkedin: "https://www.linkedin.com/in/shrikanth-budya/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. Ashwin P M",
      role: "Core Member",
      img: "/team/team17/Ashwin.jpg",
      linkedin: "https://www.linkedin.com/in/ashwin-p-m-0126471b9/?originalSubdomain=in",
      year:"2017-20"
    },  {
      name: "Mr. Rameez Shuhaib",
      role: "Core Member",
      img: "/team/team17/rameez.jpg",
      linkedin: "https://www.linkedin.com/in/rameez-shuhaib-505a29106/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Mr. Puneeth Kumar S R",
      role: "Core Member",
      img: "/team/team17/punith.jpg",
      linkedin: "https://www.linkedin.com/in/punithsr27/?originalSubdomain=in",
      year:"2017-20"
    },
    {
      name: "Mr. Muthaheer Mohammed",
      role: "Core Member",
      img: "/team/team17/muthaheer.jpg",
      linkedin: "https://www.linkedin.com/in/muthaheer-mohammed-15435a12b/?originalSubdomain=in",
      year:"2017-20"
    },
    {
      name: "Mr. Mohammed Kashif Minhaj",
      role: "Core Member",
      img: "/team/team17/kashif.jpg",
      linkedin: "https://www.linkedin.com/in/kashif-minhaj-84147129/?originalSubdomain=in",
      year:"2017-20"
    },
    {
      name: "Mr. Shashank S Shetty",
      role: "Core Member",
      img: "/team/team17/shashank.jpg",
      linkedin: "https://www.linkedin.com/in/imshashanksshetty/?originalSubdomain=in",
      year:"2017-20"
    }, {
      name: "Ms. Shraddha Bhat",
      role: "Core Member",
      img: "/team/team17/shraddha.jpg",
      linkedin: "https://www.linkedin.com/in/shraddha-bhat-49236015b/",
      year:"2017-20"
    },{
      name: "Mr. Muhammad Junaid",
      role: "Core Member",
      img: "/team/team17/junaid.jpg",
      linkedin: "https://www.linkedin.com/in/junaid1460/",
      year:"2017-20"
    }, {
      name: "Ms. Priyadarshini Kumari",
      role: "Core Member",
      img: "/team/team17/priyadarshini.jpg",
      linkedin: "https://www.linkedin.com/in/priyadarshini-kumari-78b229190/",
      year:"2017-20"
    }
];