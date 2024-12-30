const Joi = require('joi');


exports.paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).default(10),
});


// Validation for adding a new book

exports.bookSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required',
  }),
  author: Joi.string().trim().required().messages({
    'string.empty': 'Author cannot be empty',
    'any.required': 'Author is required',
  }),
  genre: Joi.string().trim().optional(),
  publishedYear: Joi.number().integer().required().messages({
    'number.base': 'Published Year must be a number',
    'any.required': 'Published Year is required',
  }),
});
