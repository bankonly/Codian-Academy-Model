const mongoose = require('mongoose');
const { PARENT_MODEL_NAME } = require('./parent_model');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent_id: {
			ref: PARENT_MODEL_NAME,
			type: Schema.Types.ObjectId,
			required: true,
		},
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const model_name = 'parent_education';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.PARENT_EDUCATION_MODEL_NAME = model_name;
