import axios from "axios";
import { BASE_URL } from "../../api.config";

export async function sendOTP(phone) {
  try {
    const data = {
      AppName: "Ignite_Auth_Frontend",
      PhoneNumber: phone,
    };

    const res = await axios.post(`${BASE_URL}/Clients/Login/sendOTP`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function verifyOTP(phone, otp, verificationId) {
  try {
    const data = {
      otp: otp,
      verificationId: verificationId,
      AppName: "Ignite_Auth_Frontend",
      PhoneNumber: phone,
    };

    const res = await axios.post(`${BASE_URL}/Clients/Login/verifyOTP`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
}
