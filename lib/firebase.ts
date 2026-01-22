// Test credentials for development
export const TEST_USER = {
  email: 'test@example.com',
  password: 'password123',
};

// Store for user sessions (in a real app, use Firebase or a proper backend)
const users: Record<string, { email: string; password: string }> = {
  [TEST_USER.email]: TEST_USER,
};

export async function loginUser(email: string, password: string): Promise<boolean> {
  // Simulate async authentication
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const user = users[email];
  if (user && user.password === password) {
    // Store in localStorage for session management
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify({ email }));
      localStorage.setItem('isLoggedIn', 'true');
    }
    return true;
  }
  return false;
}

export function logoutUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  }
}

export function isUserLoggedIn(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
}

export function getCurrentUser(): { email: string } | null {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
}
