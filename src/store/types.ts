import { ArticalState } from "./Articals/types";
import { UserState } from "./User/types";

export interface RootState {
  user: UserState;
  artical: ArticalState;
}
