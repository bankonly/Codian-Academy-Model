const mongoose = require("mongoose");
const { CLASSES_MODEL_NAME } = require("./class_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const { SCORE_TYPE_MODEL_NAME } = require("./score_type");
const { SUBJECT_GROUP_MODEL_NAME } = require("./subject_group_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    la_name: {
      type: String,
      required: true,
    },
    en_name: {
      type: String,
      default: null,
    },
    score_time: {
      type: Number,
      required: true,
    },
    score_type: {
      ref: SCORE_TYPE_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    },
    teacher_id: {
      ref: TEACHER_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    },
    subject_group_id: {
      ref: SUBJECT_GROUP_MODEL_NAME,
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
