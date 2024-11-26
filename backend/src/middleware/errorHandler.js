// backend/src/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message || 'Internal server error'
    });
  };