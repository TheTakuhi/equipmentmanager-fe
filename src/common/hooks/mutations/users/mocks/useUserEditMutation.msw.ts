import { rest } from "msw";

import { usersBuilder } from "../../../../mock_builders/UsersBuilder";

export const putEditUser = () => {
  return [
    rest.put("*/v1/users/:id", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User edited"),
        ctx.json(usersBuilder.getUserById(req.params.id as string)),
      );
    }),
  ];
};
