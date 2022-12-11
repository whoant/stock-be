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

exports.depositAsset = catchAsync(async(req, res, next) => {
    const { amount } = req.body;
    const { user } = res.locals;
    await db.query(`call deposit_fund('${user.user_id}', ${amount}, 'stock_1');`);

    successResponse(req, res, {
        message: 'Nạp tiền thành công'
    });
});

exports.withdrawAsset = catchAsync(async(req, res, next) => {
    const { amount } = req.body;
    const { user } = res.locals;
    await db.query(`call withdraw_fund('${user.user_id}', ${amount}, 'stock_1');`);

    successResponse(req, res, {
        message: 'Rút tiền thành công'
    });
});
