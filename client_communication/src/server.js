import 'dotenv/config';
import express from 'express';

import app from './app.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
    });
} catch (error) {
    logger.error(`Error during server initialization: ${error.message}`);
    process.exit(1);
}
