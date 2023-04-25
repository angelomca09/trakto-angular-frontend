export interface MaterialDidatico {
  is_template: boolean;
  created_at: string;
  tags: string[];
  cover: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  is_deleted: boolean;
  is_premium: boolean;
  updated_at: string;
  is_renamed: boolean;
  pages?: any[];
  thumbs: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  id: string;
  title: string;
}

export interface YoutubeVideo {
  thumbnail: string;
  title: string;
  url: string;
}

export const yt_videos: YoutubeVideo[] = [
  {
    thumbnail: "https://i.ytimg.com/vi/BTok0FvxA7Q/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYJiBAKH8wDw==&rs=AOn4CLB8eYET4zWn6JGne46-0hDt8YNhFA",
    title: "Trakto Design - Perfeito para empreendedores",
    url: "https://www.youtube.com/watch?v=BTok0FvxA7Q",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kPdWyVW0o8E/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYUSA7KH8wDw==&rs=AOn4CLBOGkO5gEL0fjjKvicu7Z1LuwDjKQ",
    title: "Trakto para Empresas",
    url: "https://www.youtube.com/watch?v=kPdWyVW0o8E",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/sobuKJ21c7k/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYJSBKKH8wDw==&rs=AOn4CLBk5fvedvhZmKO-yHP31tqnNXyXbA",
    title: "Trakto Educação - O novo produto da Trakto",
    url: "https://www.youtube.com/watch?v=sobuKJ21c7k",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/G59C--W60qY/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBWKDQwDw==&rs=AOn4CLCFxHS256-nQL8oVL4qqrQruyUwbQ",
    title: "TraktoShow Penedo",
    url: "https://www.youtube.com/watch?v=G59C--W60qY",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/oRWfxt1Z_fA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB8DUTkpMPBDVoBNLwy0XoINzqCEw",
    title: "4 dormas de ganhar dinheiro com a Trakto!",
    url: "https://www.youtube.com/watch?v=oRWfxt1Z_fA",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/WFOgmPhCqxE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCVNmzRbR3jkm_lQltICFza7ZgZ-w",
    title: "Como criar fotos de perfil criativas",
    url: "https://www.youtube.com/watch?v=WFOgmPhCqxE",
  },
]