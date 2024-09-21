const TOKEN_KEY = 'access-code';

export const tokenUtils = {
  setToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  isTokenValid: (token: string): boolean => {
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000; // sec -> ms
      return Date.now() < expirationTime;
    } catch (error) {
      console.error('Error checking token validity:', error);
      return false;
    }
  },
};
