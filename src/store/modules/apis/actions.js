import { SET_DATA, SAVE_DATA } from "./types";

export default {
  [SET_DATA]({ commit }) {
    fetch("https://api.publicapis.org/entries")
      .then((response) => {
        response.text().then((data) => {
          const jsonData = JSON.parse(data);
          commit(SAVE_DATA, jsonData.entries);
        });
      })
      .catch((error) => {
        commit(SAVE_DATA, [{ Description: error.message }]);
      });
  },
};
