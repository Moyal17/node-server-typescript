import type { RedisClientType } from 'redis';
import { createClient } from 'redis';

let client: RedisClientType;

if (process.env.REDIS_URL) {
  const url = process.env.REDIS_URL; // 'redis://alice:foobared@awesome.redis.server:6380'
  client = createClient({ url });
} else {
  client = createClient();
}

export default client;
