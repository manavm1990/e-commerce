import decode from "jwt-decode";

const UserService = {
  checkIfLoggedIn() {
    // Checks if there is a saved token and if it's still valid
    const token = localStorage.getItem("token");
    return Boolean(token) && !this.checkIfTokenExpired(token);
  },

  checkIfTokenExpired(token) {
    try {
      if (decode(token).exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch ({ message }) {
      console.error(message);
      return false;
    }
  },

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("token", idToken);
  },

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("token");
  },
};

export default UserService;
