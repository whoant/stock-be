const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');

exports.getCurrentReport = catchAsync(async(req, res, next) => {
    const { symbol } = req.query;
    const { rows } = await db.query(`select * from fn_get_report_current_session('${symbol}');`);

    successResponse(req, res, {
        ...rows[0],
    });
});
