import { setupWorker } from "msw";

import { postUser } from "./common/hooks/mutations/user/usePostUser.msw";
import { putUser } from "./common/hooks/mutations/user/usePutUser.msw";
import { getUser } from "./common/hooks/queries/users/useGetUserById.msw";

export const worker = setupWorker(...getUser(), ...postUser(), ...putUser());
