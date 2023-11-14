import express from 'express';
import cors from'cors';
import router from './src/router';

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/game', router)

const startApp = async () => {
    try {
        app.listen(PORT, () => console.log('Succsess'))
    } catch (error) {
     console.log(error);   
    }

};

startApp();