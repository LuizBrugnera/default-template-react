export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextData {
  user: User | null;
  token: string | null;
  signIn: (userData: User, token: string) => void;
  signOut: () => void;
  isAuthenticated: boolean;
}
