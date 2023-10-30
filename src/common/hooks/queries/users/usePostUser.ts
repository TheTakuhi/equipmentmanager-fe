import { rest } from 'msw';


export const postUser = () => {
    return [
        rest.post('*/users/', (req, res, ctx) => {

            console.log(req.params.id)
                return res(
                    ctx.delay(1000),
                    ctx.status(200, 'Mocked status'),
                );

        }),
    ];
};