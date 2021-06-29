const mongoose = require("mongoose");
const { CLASSES_MODEL_NAME } = require("./class_model");
const { SUBJECT_MODEL_NAME } = require("./subject_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subject_id: {
      ref: SUBJECT_MODEL_NAME,
      type: Schema.Types.ObjectId,
    },
    class_id: {
      ref: CLASSES_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    },
    learn_time: [
      {
        day: {
          type: Number,
          enum: [0, 1, 2, 3, 4, 5, 6],
          required: true,
        },
        start_time: {
          type: String,
          required: true,
        },
        end_time: {
          type: String,
          required: true,
          required: true,
        },
      },
    ],

    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "subject_detail";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SUBJECT_DETAIL_MODEL_NAME = model_name;
