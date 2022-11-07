export default interface IProfile {
  username: string;
  bio: string;
  image: string | null;
  following: boolean;
}

export interface Artical {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}

export interface ArticalState {
  articles: Array<Artical>;
}
