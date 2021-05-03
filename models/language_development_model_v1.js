const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);


const model_name = 'language_development';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LANGUAGE_DEVELOPMENT_MODEL_NAME_V1 = model_name;

