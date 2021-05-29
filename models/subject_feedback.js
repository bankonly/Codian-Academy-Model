const mongoose = require("mongoose");
const { SUBJECT_MODEL_NAME } = require("./subject_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subject_id: {
      type: Schema.Types.ObjectId,
      ref: SUBJECT_MODEL_NAME,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "subject_feedback";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SUBJECT_FEEDBACK_MODEL_NAME = model_name;
