/**
 * 配置middleware来扩展jsonserver mock
 */
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'jack' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '1234',
                },
            });
        } else {
            return res.status(400).json({ msg: '用户名密码错误' });
        }
    }

    next();
};
