import { Request, Response } from 'express';
import { subjectRepositoy } from '../repositories/subjectRepository';

export class SubjectController {

	async create(req: Request, res: Response) {

		const { name } = req.body;

		if (!name) {
			return res.status(400).json({message: 'O nome é obrigatório'});
		}

		try {
			const subject = subjectRepositoy.create({
				name
			});
			await subjectRepositoy.save(subject);
			return res.status(201).json(subject);
		} catch(error) {
			console.log(error);
			return res.status(500).json({message: 'Internal server error'});
		}

	}

}