import { Request, Response, NextFunction } from 'express';

enum CacheTypes {
  NONE = 'none',
  PRIVATE = 'private',
  PUBLIC = 'public',
}
export const setCacheHeaders = (cacheType: string, time: number = 0) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (cacheType === CacheTypes.NONE) {
      res.setHeader('Cache-Control', 'no-cache, no store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '-1');
    } else {
      res.setHeader('Cache-Control', `${cacheType === CacheTypes.PRIVATE ? 'private' : 'public'}, max-age=${time}`);
      res.removeHeader('Pragma');
      res.removeHeader('Expires');
    }
    next();
  };
};
