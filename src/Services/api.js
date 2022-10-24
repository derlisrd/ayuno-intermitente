import axios from "axios";
import { env } from "../App/config"

export const APICALLER = {

    login: async (datas) => {
        try {
          const res = await axios({
            url: `${env.API_END_POINT}Auth/Login`,
            method: "POST",
            data: (datas),
            headers: { "X-Api-Token": env.X_API_TOKEN },
          });
          return await res.data;
        } catch (error) {
          console.log(error);
          const err = { results:null, response: `error`, message: error.message };
          return err;
        }
      },
}