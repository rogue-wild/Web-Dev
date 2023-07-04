export interface UserData {
    name: string;
    profile_pic: string;
}

export interface AboutData {
    email: string;
    location: string;
    about: string;
    occupation: string;
    company_name: string;
    studied_at: string;
  }

export interface SocialLinksData {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  }

  export interface SocialMetricsData  {
    followers: number;
    following: number;
  }

  export interface Comment {
    user?: string;
    profile_pic?: string;
    comment?: string;
  }
  
  export interface Post {
    postId: number;
    date: string;
    caption: string;
    image: string;
    likes: number;
    comments: Comment[];
  }