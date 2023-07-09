import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
// "Attending a coding bootcamp. Learning so much in such a short time!",
// Working on a side project. Can't wait to share it with the world!


export const posts = [
  {
    _id: uuid(),
    content:
      "Just finished working on my project. Feeling accomplished!",
    likes: {
      likeCount: 80,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: '2023-06-15T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Excited to start learning React! Any recommendations?",
    likes: {
      likeCount: 70,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: '2023-06-16T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Enjoying a cup of coffee while coding. Best combination ever!",
    likes: {
      likeCount: 60,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: '2023-06-17T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Attended a great tech conference today. Learned so much!",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: '2023-06-18T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Reflecting on my coding journey so far. It has been an amazing experience!",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: '2023-06-19T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hiking in the mountains. The view is breathtaking! #naturelover",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: '2023-06-20T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Trying out a new recipe today. Can't wait to taste it!",
    likes: {
      likeCount: 90,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: '2023-06-21T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Excited to announce the launch of my new website. Check it out!",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "davidjohnson",
    createdAt: '2023-06-22T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Spending quality time with family. Cherishing these moments.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "davidjohnson",
    createdAt: '2023-06-23T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Attending a coding competition. Ready to showcase my skills!",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "davidmiller",
    createdAt: '2023-06-24T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Working on a personal blog. Can't wait to share my thoughts!",
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    username: "davidmiller",
    createdAt: '2023-06-25T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Working on a challenging coding problem. Solving it one step at a time!",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alexandercodes",
    createdAt: '2023-06-26T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exploring the world of artificial intelligence. Fascinating stuff!",
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alexandercodes",
    createdAt: '2023-06-27T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Just published a new blog post. Check it out and share your thoughts!",
    likes: {
      likeCount: 89,
      likedBy: [],
      dislikedBy: [],
    },
    username: "laurawrites",
    createdAt: '2023-06-28T20:57:12+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Spent the weekend in the countryside. Nature always brings me peace.",
    likes: {
      likeCount: 46,
      likedBy: [],
      dislikedBy: [],
    },
    username: "laurawrites",
    createdAt: '2023-06-29T20:57:12+05:30',
    updatedAt: formatDate(),
  }
];