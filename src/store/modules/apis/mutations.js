import { SAVE_DATA } from "./types";

export default {
  [SAVE_DATA](state, data) {
    state.data = data;
  },
};
