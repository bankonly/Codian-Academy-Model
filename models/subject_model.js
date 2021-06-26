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
    learn_time: [
      {
        day: {
          type: Number,
          enum: [0, 1, 2, 3, 4, 5, 6],
        },
        time: {
          type: Date,
          required: true,
        },
      },
    ],
    score_type: {
      type: Number,
      required: true,
    },
    score_time: {
      type: Number,
      required: true,
    },
    teacher_id: {
      ref: TEACHER_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    },
    class_id: {
      ref: CLASSES_MODEL_NAME,
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
