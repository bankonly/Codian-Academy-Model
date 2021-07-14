const mongoose = require("mongoose");
const { LESSON_MODEL_NAME } = require("./lesson_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: null,
    },
    lesson_id: {
      ref: LESSON_MODEL_NAME,
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

const model_name = "lesson_detail";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LESSON_DETAIL_MODEL_NAME = model_name;
