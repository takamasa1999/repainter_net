import path from 'path';
import dotenv from 'dotenv';

// Specify your custom .env file path here
const envPath = path.resolve(process.cwd(), 'custom/path/to/.env');
dotenv.config({ path: envPath });

// Export the loaded environment variables for use in the next.config.js file
const env = process.env;
export default env;
