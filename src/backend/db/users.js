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
    avatar: 'https://i.pravatar.cc/150?img=12'
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
    avatar: 'https://i.pravatar.cc/150?img=13'
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
    avatar: 'https://i.pravatar.cc/150?img=38'
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
    avatar: 'https://i.pravatar.cc/150?img=68'
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
    avatar: 'https://i.pravatar.cc/150?img=52'
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
    avatar: 'https://i.pravatar.cc/150?img=41'
  }
];
