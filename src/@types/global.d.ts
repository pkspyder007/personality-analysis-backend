import { Request, Response, NextFunction } from 'express';

export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
   type MiddleWareFn = (req: Request, res: Response, next: NextFunction) => void;
}