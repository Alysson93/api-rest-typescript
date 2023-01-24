import { Subject } from "../entities/Subject";
import { AppDataSource } from "../data-source";

export const subjectRepositoy = AppDataSource.getRepository(Subject);
