import { Application } from 'express';
import Controller from './controller';


export default function bindRoutes(app: Application) {
    app.get('/', Controller.all);
    app.post('/users', Controller.createUser);
}
