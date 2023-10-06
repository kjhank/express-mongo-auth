/* eslint-disable import/prefer-default-export */
import mongoose, { Schema } from 'mongoose';
import { Role } from './role.model';
import { User } from './user.model';

mongoose.Promise = global.Promise;

export const db: {
  role: Schema,
  user: Schema,
} = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;

db.ROLES = ['user', 'admin', 'moderator'];
