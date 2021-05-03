const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
const model_name = 'material';
const MaterialModel = mongoose.model(model_name, schema, model_name);
module.exports = MaterialModel;
module.exports.MATERIAL_MODEL_NAME = model_name;
