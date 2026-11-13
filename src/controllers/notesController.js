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

export const createNote = async (req, res, next) => {
  const note = await Note.create(req.body);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(201).json(note);
};

export const deleteNote = async (req, res, next) => {
  const id_param = req.params.noteId;
  const note = await Note.findOneAndDelete({ _id: id_param });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};

export const updateNote = async (req, res, next) => {
  const id_param = req.params.noteId;
  const note = await Note.findOneAndUpdate({ _id: id_param }, req.body, {
    returnDocument: 'after',
  });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};
