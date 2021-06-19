const mongoose = require("mongoose");
const { SUBJECT_MODEL_NAME } = require("./subject_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default:null,
    },
    subject_id: {
      ref: SUBJECT_MODEL_NAME,
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

const model_name = "lesson";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LESSON_MODEL_NAME = model_name;
