const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year_id: {
      type: Schema.Types.ObjectId,
      ref: "year",
      require: true,
    },
    branch_id: {
      ref: BRANCH_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "class";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.CLASSES_MODEL_NAME = model_name;
