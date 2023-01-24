import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";

export class RoomController {

    async create(req: Request, res: Response) {

        const { name, description } = req.body;

        try {
            const room = roomRepository.create({
                name,
                description
            });
            await roomRepository.save(room);
            return res.status(201).json(room);
        } catch(error) {
            return res.status(500).json({message: "Internal server error"});
        }
    
    }


    async createVideo(req: Request, res: Response) {

        const { title, url } = req.body;
        const { idRoom } = req.params;

        try {
           const room = await roomRepository.findOneBy({id: Number(idRoom)});
           if (!room) {
            return res.status(404).json({message: 'Auls não existe'});
           }
           const video = videoRepository.create({
            title,
            url,
            room
           });
           await videoRepository.save(video);
           return res.status(201).json(video);
        } catch(error) {
            return res.status(500).json({message: "Internal server error"});
        }
    
    }

    /*
    async roomSubject(req: Request, res: Response) {
        const { subject_id } = req.body;
        const { idRoom } = req.params;
    }
    */



}