const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');

exports.login = catchAsync(async(req, res, next) => {
    // successResponse(req, res, 'OKEEE');
    await db.query("call cal_sum(1 ,1);");
});
