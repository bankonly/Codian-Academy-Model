const mongoose = require("mongoose");
const { SUBJECT_MODEL_NAME } = require("./subject_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: STUDENT_MODEL_NAME,
      required: true,
    },
    subject_id: {
      type: Schema.Types.ObjectId,
      ref: SUBJECT_MODEL_NAME,
      required: true,
    },
    teacher_scored: {
      type: Schema.Types.ObjectId,
      ref: TEACHER_MODEL_NAME,
      required: true,
    },
    score: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    month: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
