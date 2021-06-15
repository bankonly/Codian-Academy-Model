const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { INVITE_APPOINTMENT_MODEL_NAME } = require("./invite_appointment_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    invite_id: {
      type: Schema.Types.ObjectId,
      ref: INVITE_APPOINTMENT_MODEL_NAME,
    },
    teacher_id: [
      {
        type: Schema.Types.ObjectId,
        ref: TEACHER_MODEL_NAME,
      },
    ],
    parent_id: [
      {
        type: Schema.Types.ObjectId,
        ref: PARENT_MODEL_NAME,
      },
    ],
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "appointment";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.APPOINTMENT_MODEL_NAME = model_name;
