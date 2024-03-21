import { rest } from "msw";

import { usersBuilder } from "../../../../mock_builders/UsersBuilder";

export const getUserById = () => {
  return [
    rest.get("*/users/:id", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User by ID"),
        ctx.json(usersBuilder.getUserById(req.params.id as string)),
      );
    }),
  ];
};
