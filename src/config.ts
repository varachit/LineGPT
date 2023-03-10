import dotenv from 'dotenv';
import invariant from 'invariant';

dotenv.config();

invariant(process.env.PORT, 'Invariant violation: PORT environment variable is required');
invariant(process.env.NODE_ENV, `Invariant violation: NODE_ENV environment variable is required and should be set to one of the following values: 'production', 'staging', 'development', or 'test'. Please set the variable in your environment to the appropriate value.`);
invariant(process.env.CORS_WHITELIST, `Invariant violation: CORS_WHITELIST environment variable is required and should contain a comma-separated list of allowed origins for CORS requests. Please set the variable in your environment or provide a fallback behavior if the variable is missing`);

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  cors_whitelist: process.env.CORS_WHITELIST
}

export default config;
