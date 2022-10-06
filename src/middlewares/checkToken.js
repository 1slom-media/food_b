import jwt from '../lib/jwt.js'


export default (req, res, next) => {
    try {
        if (req.method != "GET" && req.url != "/login" && req.url!='/followers' && req.url != '/contact') {
          const token = req.headers.token;
          if (!token) throw new Error("token required");
          jwt.verify(token);
        }
        return next();
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: error.message
        })
    }
}