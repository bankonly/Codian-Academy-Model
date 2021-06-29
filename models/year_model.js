const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    name: {
      type: Number,
      default: 100000,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "year";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.YEAR_MODEL_NAME = model_name;
