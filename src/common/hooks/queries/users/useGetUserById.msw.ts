import { rest } from 'msw';


export const getUser = () => {
    return [
        rest.get('*/users/:id', (req, res, ctx) => {

            console.log(req.params.id)
                return res(
                    ctx.delay(1000),
                    ctx.status(200, 'Mocked status'),
                );
        }),
    ];
};