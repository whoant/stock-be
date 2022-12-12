const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');

exports.createStock = catchAsync(async(req, res, next) => {
    const { symbol, name, initial_price } = req.body;
    await db.query(`call proc_create_stock('${symbol}', '${name}', ${initial_price});`);

    successResponse(req, res, {
        message: 'Tạo thành công'
    });
});

exports.disableStock = catchAsync(async(req, res, next) => {
    const { id } = req.params;
    await db.query(`call proc_disable_stock('${id}');`);

    successResponse(req, res, {
        message: 'Delist thành công'
    });
});

exports.enableStock = catchAsync(async(req, res, next) => {
    const { id } = req.params;
    await db.query(`call proc_enable_stock('${id}');`);

    successResponse(req, res, {
        message: 'List thành công'
    });
});
