import api from "../api/axios.js";

export class AuthService {
  async createAccount({ email, password, name }) {
    try {
        const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      return response.data.data.user;
    } catch (error) {
      console.log("Register Error:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      return response.data.data.user;
    } catch (error) {
      console.log("Login Error:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await api.get("/auth/me");

      return response.data.data;
    } catch (error) {
      console.log("Get Current User Error:", error);
      return null;
    }
  }

  async logout() {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  }
}

const authService = new AuthService();

export default authService;
