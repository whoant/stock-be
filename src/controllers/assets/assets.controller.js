const catchAsync = require('../../helpers/catchAsync.helper');
const db = require('../../database');
const { successResponse } = require('../../helpers/response.helper');
exports.getAssets = catchAsync(async(req, res, next) => {
    const { user } = res.locals;
    const { rows } = await db.query(`select * from fn_get_all_assets('${user.user_id}');`);

    successResponse(req, res, {
        assets: rows,
    });
});
