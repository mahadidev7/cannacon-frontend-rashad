import axios from "../../utils/axios";

export const getLogin = async (data) => {
  const response = await axios.post("/api/v1/users/login", data, {
    withCredentials: true,
  });

  return response.data;
};
