import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Adarsh",
    lastName: "Ram",
    username: "adarshram",
    password: "adarshram123",
    bio:'Passionate computer scientist dedicated to pushing the boundaries of technology and creating innovative solutions.',
    createdAt: '2023-05-09T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'https://adarshram.netlify.app/',
    avatar: 'https://i.pravatar.cc/150?img=12',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: uuid(),
    firstName: "David",
    lastName: "Miller",
    username: "davidmiller",
    password: "davidmiller123",
    bio:"Entrepreneur and tech enthusiast. Co-founder of a successful startup. Passionate about innovation and disruptive technologies. 💡",
    createdAt: '2023-05-10T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'https://davidmillerstartup.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: uuid(),
    firstName: "Emily",
    lastName: "Smith",
    username: "emilysmith",
    password: "emilysmith123",
    bio:"Web designer and aspiring UX/UI expert. Love to create visually appealing and user-friendly interfaces. 🎨",
    createdAt: '2023-05-12T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'emily.smith@yahoo.com',
    avatar: 'https://i.pravatar.cc/150?img=38',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio:"Passionate about technology and exploring new coding languages. Coffee lover. 🚀",
    createdAt: '2023-05-13T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'ttps://johndoeportfolio.com',
    avatar: 'https://i.pravatar.cc/150?img=68',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: uuid(),
    firstName: "Alexander",
    lastName: "Codes",
    username: "alexandercodes",
    password: "alexandercodes123",
    bio:"AI and machine learning enthusiast. Exploring the frontiers of artificial intelligence. Always seeking new challenges. 🤖",
    createdAt: '2023-05-14T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'https://alexandercodesai.com',
    avatar: 'https://i.pravatar.cc/150?img=52',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: uuid(),
    firstName: "Laura",
    lastName: "Writes",
    username: "laurawrites",
    password: "laurawrites123",
    bio:"Writer and storyteller. Love to share experiences and emotions through the power of words. Constantly seeking inspiration. ✍️",
    createdAt: '2023-05-15T20:57:12+05:30',
    updatedAt: formatDate(),
    website:'https://laurawritesstories.com',
    avatar: 'https://i.pravatar.cc/150?img=41',
    backgroundImage: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  }
];
