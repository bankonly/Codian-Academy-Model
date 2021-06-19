const mongoose = require("mongoose");
const { LESSON_MODEL_NAME } = require("./lesson_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    point: {
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
    student_id: {
      ref: STUDENT_MODEL_NAME,
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

const model_name = "lesson_score";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LESSON_SCORE_MODEL_NAME = model_name;
