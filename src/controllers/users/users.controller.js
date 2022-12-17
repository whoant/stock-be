const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');

exports.getUsers = catchAsync(async(req, res, next) => {
    const { rows } = await db.query(`select * from fn_get_users();`);

    successResponse(req, res, {
        users: rows
    });
});
