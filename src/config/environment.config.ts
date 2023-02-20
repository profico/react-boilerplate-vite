type NodeEnv = 'development' | 'production';

interface EnvConfig {
  NODE_ENV: NodeEnv;
  API_URL: string;
}

function getFromEnv<T extends string | number = string>(key: string): T {
  return import.meta.env[`VITE_${key}`] || '';
}

export const envConfig: EnvConfig = {
  NODE_ENV: getFromEnv<NodeEnv>('NODE_ENV'),
  API_URL: getFromEnv('API_URL'),
};
