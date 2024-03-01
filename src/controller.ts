import { Request, Response } from 'express';
import ListModel from './model/listModel';
import VideoModel from './model/videoModel';

export class Controller {
    async all(req: Request, res: Response): Promise<void> {
        try {
            const users = await ListModel.find();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const newUser = new ListModel(data);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getVideo(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const newUser = new VideoModel(data);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new Controller();
