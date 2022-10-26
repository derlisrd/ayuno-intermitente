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
          const err = { response:false,error:true, message: error };
          return err;
        }
      },
      validateToken: async (token) => {
        try {
          let tk = DescifrarTexto(token);
          const res = await axios({
            url: `${env.API_END_POINT}Auth/ValidateToken`,
            method: "POST",
            data: JSON.stringify({ token: tk }),
            headers: { "X-Api-Token": XAPITOKEN },
          });
          return await res.data;
        } catch (error) {
          const err = [{ response:false,error:true, message: error }];
          return err;
        }
      },
}