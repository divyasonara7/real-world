import { Store, StoreOptions } from "vuex";
import { RootState } from "./types";
import { user } from "@/store/User";
import { artical } from "./Articals";

const store: StoreOptions<RootState> = {
  modules: {
    user: user,
    article: artical,
  },
};

export default new Store<RootState>(store);
