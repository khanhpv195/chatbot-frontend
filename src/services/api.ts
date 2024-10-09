import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message });
    return response.data.response;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
