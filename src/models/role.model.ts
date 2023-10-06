/* eslint-disable import/prefer-default-export */
import mongoose, { Schema } from 'mongoose';

export const Role: Schema = mongoose.model('Role', new mongoose.Schema({ name: String }));
