import axios from "axios";


const api= axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "9670425415537437f28107c87a8380f2",
        language: "pt-BR",
        page: 1
    }
})

export default api