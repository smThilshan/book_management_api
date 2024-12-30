const errorHandler = (err, req, res, next) => {
    console.error('Global Error:', err);
  
    // Handle Joi Validation Errors
    if (err && err.isJoi) {
      return res.status(400).json({
        message: err.details[0].message || 'Validation error',
      });
    }
  
    // Handle Sequelize Validation Errors
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: err.errors[0].message || 'Sequelize validation error',
      });
    }
  
    // Handle Unauthorized Access
    if (err.status === 401) {
      return res.status(401).json({
        message: 'Unauthorized access',
      });
    }
  
    // Fallback for Other Errors
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;

  