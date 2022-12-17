const catchAsync = require('../../helpers/catchAsync.helper');
const { successResponse } = require('../../helpers/response.helper');
const db = require('../../database');
const jwt = require('../../helpers/jwt.helper');

exports.login = catchAsync(async(req, res, next) => {
    const { username, password } = req.body;
    const { rows } = await db.query(`select * from fn_get_internal_user('${username}');`);
    if (rows.length === 0) {
        throw new Error('Tài khoản không tồn tại');
    }

    if (rows[0]['password'] !== password) {
        throw new Error('Mật khẩu không hợp lệ');
    }
    delete rows[0]['password']
    const token = await jwt.generateToken({
        internal_user_id: rows[0]['internal_user_id'],
        username: rows[0]['username']
    });

    successResponse(req, res, {
        ...rows[0],
        token
    });
});

exports.createNewInternalUser = catchAsync(async(req, res, next) => {
    const { username, password, fullName } = req.body;
    await db.query(`call proc_create_internal_user('${username}', '${password}', '${fullName}');`);
    successResponse(req, res, { message: 'Tạo tài khoản thành công' }, 201);
});
