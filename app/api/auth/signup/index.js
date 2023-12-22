import axios from "axios";
import { BASE_URL } from "../../api.config";

export async function sendOTPSignUp(phone, appName) {
  try {
    const data = {
      AppName: appName,
      PhoneNumber: phone,
    };

    const res = await axios.post(`${BASE_URL}/Clients/SignUp/sendOTP`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function verifyOTPSignUp(phone, otp, verificationId, appName) {
  try {
    const data = {
      otp: otp,
      verificationId: verificationId,
      AppName: appName,
      PhoneNumber: phone,
    };

    const res = await axios.post(`${BASE_URL}/Clients/SignUp/verifyOTP`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
}
