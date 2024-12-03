import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;
export const Signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error Logging in User",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
export const Login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error Logging in User",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
//Get Users Without Login User
export const Getusers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error GetUsers in User",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
//Send Message
export const SendMessage = async (message, id) => {
  try {
    const response = await axios.post(
      `${API_URL}/messages/send/${id}`,
      { message },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error In Send Message",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
//Get Conversation Between Two Users
export const GetConversation = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/messages/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error In Send Message",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
//get Looged User
export const LoggedUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/loggeduser`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error  in get LoggendUser",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
