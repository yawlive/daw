import { BiHome, BiUser, BiCalendar, BiUserPlus, BiUserPin} from 'react-icons/bi';
import { FaRegLightbulb } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaRegListAlt } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import image from './assets/images/rahma.jpg';
import { MdEventNote } from "react-icons/md";

export const studentSidebarConfig = {
  Menus: [
    { title: "Dashboard", icon: <BiHome /> ,gap: true },
    

    { title: "Requests", icon: <BiUserPlus />, link: "/student/requests" },
    { title: "themes", icon: <FaRegLightbulb /> , link:"/student/themes" },
    { title: "students list", icon: <BiUserPin /> , link:"/student/studentlists"},
    // { title: "themes", icon: <BiUser /> , gap:true },
    // { title: "my applications", icon: <BiCalendar />  },
    // { title: "my team", icon: <BiCalendar /> ,gap:true },
    // { title: "professors", icon: <BiUser /> , link:"/teacher/Teacherlist" },
    
   
  ],
   sidebarcolor: "bg-dark-purple",
   textcolor: "#f5fefd",
   iconcolor: "#f5fefd",
   activeColor:"#fff",
};


export const teacherSidebarConfig = {
  Menus: [
    { title: "Dashboard", icon: <BiHome /> ,gap: true},
    { title: "Monitoring requests", icon: <FaUserGraduate />, link:"/teacher/Trequest", gap: true},
    { title: "Students list", icon: <FaPeopleRoof />, link:'Studentslist' },
    { title: "Professors", icon: <PiChalkboardTeacherFill />  ,link:"/teacher/Teacherlist"  },
    { title: "Calendar", icon: <BiCalendar /> , gap:true ,link:"/teacher/Calendar", gap:true},
    { title: "help", icon: <IoMdHelpCircle /> , link:'/teacher/HelpPage' },
    
   
   
  ],
  //sidebarcolor: "bg-light-white",
  //textcolor: "#081A51",
  //iconcolor: "#081A51",
   //activeColor:"#081A51",

   sidebarcolor: "bg-dark-purple",
   textcolor: "#f5fefd",
   iconcolor: "#f5fefd",
    activeColor:"#fff",
};

//////////////////////////////////////////// USERDATA (teacher) //////////////////////////////////////////////
export const user = {
  id: "78456468762",
  profile_picture: "/jiwoong.jpg",
  full_name: "Mayar Delimi",
  phone: "07749387454",
  specialization: "Systems des systemes",
  email: "delimimayar@gmail.com",
  created_at: "12/2/2024",
  isActive: true,
  themes: [
    {
      title: "Restaurant app",
      description: "This is a detailed project for creating a state-of-the-art application for data management.",
      status: "in progress",
      created_at: "2024-01-01T10:00:00",
      updated_at: "2024-01-05T15:30:00",
      keywords: ["Data", "Management", "Proposal"],
      specialization: "Software Engineering",
      pdf: "/path/to/document1.pdf",
      assignedTo: "-",
    },
    {
      title: "AI Research",
      description: "Research paper on AI in healthcare.",
      status: "completed",
      created_at: "2023-12-15T09:00:00",
      updated_at: "2023-12-20T14:00:00",
      keywords: ["AI", "Healthcare", "Research"],
      specialization: "Artificial Intelligence",
      pdf: "/path/to/document2.pdf",
      assignedTo: "-",
    },
    {
      title: "AI Research",
      description: "Research paper on AI in healthcare.",
      status: "open",
      created_at: "2023-12-15T09:00:00",
      updated_at: "2023-12-20T14:00:00",
      keywords: ["AI", "Healthcare", "Research"],
      specialization: "Artificial Intelligence",
      pdf: "/path/to/document2.pdf",
      assignedTo: "-",
    },
    {
      title: "AI Research",
      description: "Research paper on AI in healthcare.",
      status: "closed",
      created_at: "2023-12-15T09:00:00",
      updated_at: "2023-12-20T14:00:00",
      keywords: ["AI", "Healthcare", "Research"],
      specialization: "Artificial Intelligence",
      pdf: "/path/to/document2.pdf",
      assignedTo: "-",
    },
  ],
};

////// user student

export const userstudent = {
  id: "78456468762",
  profile_picture: "/rahma.jpg",
  full_name: "Rahma Zendaoui",
  phone: "07749387454",
  grade: " L3 TI",
  email: "rahma@gmail.com",
  created_at: "12/2/2024",
  isActive: true,
  
};





export const themes = [
  { name: "AI Project", status: "Pending", assignedTo: "-", lastUpdated: "Dec 10, 2024" },
  { name: "Web Dev", status: "Affected", assignedTo: "Team 4", lastUpdated: "Dec 1, 2024" },
  { name: "hospital system", status: "Pending", assignedTo: "-", lastUpdated: "nov 15, 2024" },
  { name: "Ai assistant in coding", status: "Affected", assignedTo: "Team 1", lastUpdated: "odc 20, 2024" },
  { name: "Face id configuration", status: "Pending", assignedTo: "-", lastUpdated: "oct 2, 2024" },
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const teachersData = [
  ////////////prof1/////////////

  
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
  {
    teacher_id: '144',
    profile_picture: '/rahma.jpg',
    full_name: 'rahma zendaoui',
    
    phone: '05549387454',
    specialization: "systeme d'information",
    email: 'douaa@gmail.com',
    created_at: '12/2/2024',
    isActive: true,
    themes: [
      {
        title: "Project Proposal",
        description: "This is a detailed project proposal for creating a state-of-the-art application for data management.",
        status: "in progress",
        created_at: "2024-01-01T10:00:00",
        updated_at: "2024-01-05T15:30:00",
        keywords: ["Data", "Management", "Proposal"],
        specialization: "Software Engineering",
        pdf: "/path/to/document1.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
      {
        title: "AI Research",
        description: "Research paper on AI in healthcare.",
        status: "completed",
        created_at: "2023-12-15T09:00:00",
        updated_at: "2023-12-20T14:00:00",
        keywords: ["AI", "Healthcare", "Research"],
        specialization: "Artificial Intelligence",
        pdf: "/path/to/document2.pdf",
      },
    ],
  },
];


export const teachersGrid = [
  { field: 'profile_picture', headerText: 'Photo', width: '100' },
  { field: 'full_name', headerText: 'full name', width: '50' },
  { field:'specialization' ,headerText:'Specialization', width:'100'},
  { field: 'teacher_id', headerText: ' ID', width: '120' },
  { field: 'email', headerText: 'Email', width: '200' },
  { field: 'themes', headerText: 'nbr of themes', width: '80',sum: (item) => (item.themes ? item.themes.length : 0) },
];
export const studentsData = [
  { photo:'/rahma.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'STIC' , grade: 'A', email: 'alice@example.com' ,status:'Supervised'},
  { photo:'/jiwoong.jpg', name: 'Alice Johnson',  studentId:'29349835' ,level:'RSD' , grade: 'A', email: 'alice@example.com',status:'Supervised' },
  { photo:'/jiwoong.jpg', name: 'Alice Johnson',  studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'Supervised'},
  { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'GL' , grade: 'A', email: 'alice@example.com' ,status:'Unsupervised'},
  { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},
  { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'STIW' , grade: 'A', email: 'alice@example.com' ,status:'unsupervised'},
  { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'GL' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},
  { photo:'/rahma.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},

];

export const studentsGrid = [
  { field: 'photo', headerText: 'user', width: '100' },
  { field: 'name', headerText: '', width: '50' },
  { field: 'studentId', headerText: 'Student ID', width: '120' },
  { field: 'level', headerText: 'Feild', width: '100' },
  { field: 'grade', headerText: 'Grade', width: '100' },
  { field: 'email', headerText: 'Email', width: '200' },
  { field: 'status', headerText: 'status', width: '100' }
];

/////////////teacher pie chart//////////////////
export const teacherchart = [
  { name: 'Affected', value: 2, color: '#0c4a6e' },
  { name: 'Pending', value: 3, color: '#Add8e6' },
  
];
/////////////teacher themes informations///////////////////////////////////////////////////////////////////////////


//////////teacher stats ////////////////
export const statistics=[
  { title:'New Requests' , value:'5' , icon:<IoPeopleCircle/> ,iconColor: '#5DADE2' , iconBg: '#D6EAF8',},
  { title:'New messages' , value:'0' , icon: <BiSolidMessageSquareDetail/> , iconColor:'#2874A6'  ,iconBg: '#EBF5FB' },
  { title:'New Notifications' , value:'9' , icon : <IoIosNotifications/> ,iconColor: '#1F618D' , iconBg: '#AED6F1'},
  { title:'Events' , value:'none' , icon:<MdEventNote/> ,iconColor: '#154360', iconBg: '#D4E6F1',}]



//////////////// new applications--for teacher side/////////////////////

export const requests = [
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students: [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Face id configuration', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students : [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students : [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students : [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students: [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students : [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   

];
/////////////new requests only /////////////
export const requests2=[
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students: [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  {themeName: 'Ai assistant in coding', teamName: "Team 1",requestDate: "Dec 14, 2024", status: "-", students: [
    { name: 'zend rahma', image: image, grade:'12.5' },
    { name: 'del mayar', image: image, grade:'10.55' },
    { name: 'rahma zendaoui', image: image, grade:'14' }
  ]},   
  
]
////////////////////////////////////////// notification  /////////////////////////////////////////////


export const chatData = [
  {
    image:
    image,
    message: 'team 1 sent you a monitoring request',
    desc: 'check the requests page',
    time: '9:08 AM',
  },
  {
    image:
    image,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  {
    image:
    image,
    message: 'Admin updated themes numbers',
    desc: 'Check your massages',
    time: '4:39 AM',
  },
  
];




