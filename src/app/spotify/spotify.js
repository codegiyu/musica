import axios from "axios";
import useSWR from "swr";


const authEndpont = "https://accounts.spotify.com/authorize?";
const clientID = "4cec3e2379a4458db2e0a94fb78f63ff";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing", 
                "user-library-modify", "user-library-read", "streaming"];

export const loginEndpoint = `${authEndpont}client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;  

// export const SpotifyFetch = (reqContent) => {
//   let {endpoint, modifiers, modifiersList, token} = reqContent
//   let extras = modifiers ? `?${modifiersList.join("&")}` : ""

//   const fetcher = url => axios.get(url, {
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     }
//   }).then(res => res.data)

//   const { spotifyData, spotifyError} = useSWR(`https://api.spotify.com/v1/${endpoint}${extras}`, fetcher)

//   return { spotifyData, spotifyError}
// }

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;