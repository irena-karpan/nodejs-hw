import { Router } from 'express';

const router = Router();

router.get('/notes', (req, res, next) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

router.get('/notes/:noteId', (req, res, next) => {
  const id_param = req.params.noteId;
  res.status(200).json({ message: `Retrieved note with ID: ${id_param}` });
});

export default router;
