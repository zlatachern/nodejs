const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
    if (res.err) {
        res.json({
            error: true,
            message: res.err.message,
        });
        next();
    } else {
        res.status(200);
        res.json(res.data);
        next();
    }
};

export { responseMiddleware };
