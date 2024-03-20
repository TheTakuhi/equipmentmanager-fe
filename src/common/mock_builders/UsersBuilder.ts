import { getUsersCroppedMock } from "../hooks/queries/users/mocks/utils/getUserCroppedMock";
import { getUsersMock } from "../hooks/queries/users/mocks/utils/getUserMock";
import { User } from "../models/user/User";
import { UserCropped } from "../models/user/UserCropped";

type UsersBuilderType = User | UserCropped;

class UsersBuilder<T extends UsersBuilderType> {
  users: T[] = [];

  constructor(count: number | undefined = 50, isCropped?: boolean) {
    if (isCropped) (this.users as UserCropped[]) = getUsersCroppedMock(count);
    else (this.users as User[]) = getUsersMock(count);
  }

  getUsers() {
    return this.users;
  }

  getPartialUsers(startIndex: number, endIndex: number) {
    return this.users.slice(startIndex, endIndex);
  }

  getUserById(userId: string) {
    return this.users.filter(({ id }) => id === userId)[0];
  }
}

export const usersBuilder: UsersBuilder<User> = new UsersBuilder(50);
export const usersCroppedBuilder: UsersBuilder<UserCropped> = new UsersBuilder(
  50,
  true,
);
