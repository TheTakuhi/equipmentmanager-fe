import { rest } from 'msw';


export const putUser = () => {
    return [
        rest.put('*/users/:id', (req, res, ctx) => {

            console.log(req.params.id)
                return res(
                    ctx.delay(1000),
                    ctx.status(200, 'Mocked status'),
                );
        }),
    ];
};