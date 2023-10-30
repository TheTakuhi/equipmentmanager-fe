import { rest } from 'msw';

// import { User } from "../../../models/user/User";
// import { ADMIN, MANAGER } from "../../../security/model/Role";
import UsersData from "../../../models/user/UserData";


export const getUserByIdMSW = () => {
    return [
        rest.get('*/users/:id', (req, res, ctx) => {

            console.log(req.params.id)
            const userId = req.params.id;
            const users = UsersData(); // Get your mocked users data

            const user = users.find((user) => user.id === userId); // Find the user by ID



            if (user) {
                return res(
                    ctx.delay(1000),
                    ctx.status(200, 'Mocked status'),
                    ctx.json(user),
                );
            } else {
                // If user is not found, return a 404 response
                return res(ctx.status(404, 'User not found'));
            }
        }),
    ];
};