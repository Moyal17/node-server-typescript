import type { RedisClientType } from 'redis';
import { createClient } from 'redis';
import { URL } from 'url';

let client: RedisClientType;

if (process.env.REDIS_URL) {
  const redisConnectionString = new URL(process.env.REDIS_URL);
  client = createClient({
    port: Number(redisConnectionString.port),
    host: redisConnectionString.hostname,
    password: redisConnectionString.password,
  });
} else {
  client = createClient({
    port: 6379,
    host: 'localhost',
  });
}

export default client;
