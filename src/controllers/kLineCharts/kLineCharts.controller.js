const catchAsync = require('../../helpers/catchAsync.helper');
const db = require('../../database');
const { successResponse } = require('../../helpers/response.helper');

exports.getCharts = catchAsync(async(req, res, next) => {
    const { symbol } = req.query;
    const { rows } = await db.query(`select * from fn_get_chart('${symbol}');`);

    successResponse(req, res, {
        charts: rows,
    });
});
