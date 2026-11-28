import createHttpError from 'http-errors';
import { Session } from '../models/session.js';
import { User } from '../models/user.js';

export const authenticate = (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    throw createHttpError(401, 'Missing access token');
  }

  const session = Session.findOne({ accessToken });
  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isTokenExpired = session.accessTokenValidUnti < new Date();
  if (isTokenExpired) {
    throw createHttpError(401, 'Access token expired');
  }

  const user = User.findOne({ _id: session.userId });
  if (!user) {
    throw createHttpError(401);
  }

  req.user = user;

  next();
};
