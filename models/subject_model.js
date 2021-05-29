const mongoose = require("mongoose");
const { CLASSES_MODEL_NAME } = require("./class_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    la_name: {
      type: String,
      required: true,
    },
    en_name: {
      type: String,
      required: true,
    },
    score_count: {
      type: Number,
      required: true,
    },
    class_id: {
      type: Schema.Types.ObjectId,
      ref: CLASSES_MODEL_NAME,
      required: true,
    },
    learn_day: {
      type: String,
      required: true,
      enum: [1, 2, 3, 4, 5, 6, 0],
    },
    learn_time: {
      type: String,
      required: true,
    },
    // Save who created data
    teacher_id: {
      ref: TEACHER_MODEL_NAME,
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

const model_name = "subject";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SUBJECT_MODEL_NAME = model_name;
