import { Note } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res, next) => {
  const note = await Note.find();
  res.status(200).json(note);
};

export const getNoteById = async (req, res, next) => {
  const id_param = req.params.noteId;
  const note = await Note.findOne({ _id: id_param });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};
