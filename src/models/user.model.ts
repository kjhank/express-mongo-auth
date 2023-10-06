/* eslint-disable import/prefer-default-export */
import mongoose, { Schema } from 'mongoose';

export const User: Schema = mongoose.model('User', new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: [{
    ref: 'Role',
    type: mongoose.Schema.Types.ObjectId,
  }],
}));
