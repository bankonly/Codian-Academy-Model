const mongoose = require("mongoose");
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
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "score_type";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SCORE_TYPE_MODEL_NAME = model_name;
