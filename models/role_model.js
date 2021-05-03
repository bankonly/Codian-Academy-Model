const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roles: [
      {
        name: {
          type: String,
          required: true,
        },
        page: {
          type: String,
          required: true,
        },
        permission: {
          type: Number,
          required: true, // 1 = Full control of a page ,2 = read only with GET method,3 = hidden page
        },
      },
    ],
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
const model_name = 'role';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.ROLE_MODEL_NAME = model_name;
