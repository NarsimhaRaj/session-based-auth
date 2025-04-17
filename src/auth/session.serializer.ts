import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error | null, user: string) => void) {
    done(null, user);
  }
  deserializeUser(
    payload: any,
    done: (err: Error | null, payload: string) => void,
  ) {
    done(null, payload);
  }
}
