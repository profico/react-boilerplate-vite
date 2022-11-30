type NodeEnv = 'development' | 'production';

interface EnvConfig {
  NODE_ENV: NodeEnv;
  API_URL: string;
}

function getFromProcess<T extends string | number = string>(key: string): T {
  return import.meta.env[`VITE_${key}`] || '';
}

export const envConfig: EnvConfig = {
  NODE_ENV: getFromProcess<NodeEnv>('NODE_ENV'),
  API_URL: getFromProcess('API_URL'),
};
