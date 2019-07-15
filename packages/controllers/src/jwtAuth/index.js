import { authGitHub, authMe, authCI, authSignOut } from './routes';

export const jwtAuth = (app, userGateway) => {
  app.post('/api/auth/github', authGitHub(userGateway));
  app.get('/api/auth/me', authMe(userGateway));
  app.post('/api/auth/ci', authCI);
  app.get('/api/auth/signOut', authSignOut);
};

export { jwtVerify } from './jwt';