import axios from "axios";
import { BASE_URL } from "../api.config";

export async function buyCredits(clientid, token, credits) {
  try {
    const data = {
      credits,
    };

    const headers = {
      clientid,
      token,
    };

    const res = await axios.post(
      `${BASE_URL}/Credits/createOrderForCredits`,
      data,
      {
        headers,
      }
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}
