import axios from "axios";

export const githubFetcher = (url) =>
  axios
    .get(`https://api.github.com${url}`, {
      headers: {
        Authorization: "token c76e4a97306f7dde3842f31df2920fb40e2da960",
      },
    })
    .then((res) => res.data);
