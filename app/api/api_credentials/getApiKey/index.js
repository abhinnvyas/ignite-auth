import axios from "axios";
import { BASE_URL } from "../../api.config";

export async function getApiKey(clientid, token) {
  try {
    const headers = {
      clientid: clientid,
      token: token,
    };

    const res = await axios.post(`${BASE_URL}/APIKey/getAPIKey`, null, {
      headers,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function regenerateApiKey(clientid, token) {
  try {
    const headers = {
      clientid: clientid,
      token: token,
    };

    const res = await axios.post(`${BASE_URL}/APIKey/regenerateAPIKey`, null, {
      headers,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}
