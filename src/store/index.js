import { createLogger, createStore} from "vuex";
import posts from "./modules/posts";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state: {
    GITHUB_USERNAME: 'IcyDrae'
  },
  modules: {
    posts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
