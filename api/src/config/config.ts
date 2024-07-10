import dotenv from 'dotenv';

dotenv.config();

const _config = {
    port: process.env.PORT,
    dbUri: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET
}

const config = Object.freeze(_config);

export default config