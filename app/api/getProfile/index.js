import axios from "axios";
import { BASE_URL } from "../api.config";

export async function getProfile(clientid, token) {
  try {
    const headers = {
      clientid,
      token,
    };

    const res = await axios.post(`${BASE_URL}/Profile/getAppProfile`, null, {
      headers,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}
