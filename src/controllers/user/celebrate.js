const { Segments, Joi, celebrate } = require("celebrate");

const _create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().min(8).max(128).required(),
    }),
});

/*
const _read = celebrate({});

const _update = celebrate({});

const _delete = celebrate({});
*/

module.exports = {
    create: _create,
    /*
    read: _read,
    update: _update,
    delete: _delete,
    */
};
