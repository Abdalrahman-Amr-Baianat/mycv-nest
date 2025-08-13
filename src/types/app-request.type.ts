import { User } from 'src/users/user.entity';

export type AppRequest = Request & {
  currentUser: User | null;
  session: any;
};
