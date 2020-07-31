interface Config {
  NODE_ENV: string;
  PORT: string | number;
  DB_URL: string | undefined;
};

const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  DB_URL: process.env.DB_URL,
};

export default config;
