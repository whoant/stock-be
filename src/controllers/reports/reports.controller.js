const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');

exports.reportDashboard = catchAsync(async(req, res, next) => {
    const data = await Promise.all([
        db.query(`select count(*) from users;`),
        db.query(`select count(*) from orders where state = 'successful';`),
        db.query(`select sum(total_ask_volume) as total_ask_volume, sum(total_bid_volume) as total_bid_volume from reports;`)
    ]);

    successResponse(req, res, {
        users_count: data[0].rows[0].count,
        orders_count: data[1].rows[0].count,
        ...data[2].rows[0]
    });
});

exports.reportVolumeByDay = catchAsync(async(req, res, next) => {
    const { rows } = await db.query(`select sum(total_ask_volume) as total_ask_volume, sum(total_bid_volume) as total_bid_volume, DATE_TRUNC('day', created_at) as day from reports group by DATE_TRUNC('day', created_at);`);

    successResponse(req, res, {
        reports: [...rows]
    });
});
