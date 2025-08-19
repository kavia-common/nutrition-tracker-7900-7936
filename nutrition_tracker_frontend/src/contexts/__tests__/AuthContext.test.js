import { render, screen, fireEvent } from '../../utils/test-utils';
import { AuthProvider, useAuth } from '../AuthContext';

const TestComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <div data-testid="user-status">
        {user ? `Logged in as ${user.email}` : 'Not logged in'}
      </div>
      <button onClick={() => login({ email: 'test@example.com' })}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  it('provides auth context to children', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('user-status')).toHaveTextContent('Not logged in');
  });

  it('handles login', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByTestId('user-status')).toHaveTextContent('Logged in as test@example.com');
  });

  it('handles logout', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Login first
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByTestId('user-status')).toHaveTextContent('Logged in as test@example.com');

    // Then logout
    fireEvent.click(screen.getByText('Logout'));
    expect(screen.getByTestId('user-status')).toHaveTextContent('Not logged in');
  });
});
