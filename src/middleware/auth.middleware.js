const catchAsync = require('../helpers/catchAsync.helper');
const { verifyToken } = require("../helpers/jwt.helper");
const db = require('../database');

exports.selectUser = permission => {
    return catchAsync(async(req, res, next) => {
        const token = req.get('authorization');
        if (!token || token.split(' ')[0] !== "Bearer") {
            throw new Error('Bạn không đủ quyền để truy cập !');
        }
        const data = await verifyToken(token.split(' ')[1]);
        if (permission === 'ADMIN') {
            return next();
        }

        if (permission === 'USER') {
            const { rows } = await db.query(`select * from fn_get_user('${data.username}');`);
            if (rows.length === 0) {
                throw new Error('Không đủ quyền truy cập');
            }
            res.locals.user = rows[0];
            return next();
        }
    });
};
