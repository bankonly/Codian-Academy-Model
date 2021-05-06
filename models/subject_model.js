const mongoose = require("mongoose");
const { YEAR_MODEL_NAME } = require("./year_model");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    branch_id: [
      {
        type: Schema.Types.ObjectId,
        ref: BRANCH_MODEL_NAME,
        required: true,
      },
    ],
    year_id: {
      type: Schema.Types.ObjectId,
      ref: YEAR_MODEL_NAME,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "subject";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SUBJECT_MODEL_NAME = model_name;
