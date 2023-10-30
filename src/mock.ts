import { setupWorker } from "msw";

import { getUsersMSW } from "./common/hooks/queries/users/useGetAllUsers.msw";
import { getUserByIdMSW } from "./common/hooks/queries/users/useGetUserById";
import { postUser } from "./common/hooks/queries/users/usePostUser";
import { putUser } from "./common/hooks/queries/users/usePutUser";

export const worker = setupWorker(...getUsersMSW(), ...getUserByIdMSW(), ...postUser(), ...putUser());
