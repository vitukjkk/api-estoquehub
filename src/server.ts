import express, { Request, Response } from 'express';

import { routes } from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(routes);

app.get("/", (req : Request, res : Response) => {
    res.json({message:'hello world from vitor!'});
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})