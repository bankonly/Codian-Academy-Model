const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    created_by: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "on_model",
    },
    on_model: {
      type: String,
      enum: [TEACHER_MODEL_NAME, PARENT_MODEL_NAME],
      required: true,
    },
    teachers: [
      {
        status: { type: String, enum: ["pending", "accepted", "declined"], default: "pending" },
        teacher_id: { type: Schema.Types.ObjectId, ref: TEACHER_MODEL_NAME },
        reason: { type: String, default: null }
      }
    ],
    parents: [
      {
        status: { type: String, enum: ["pending", "accepted", "declined"], default: "pending" },
        parent_id: { type: Schema.Types.ObjectId, ref: PARENT_MODEL_NAME },
        reason: { type: String, default: null }
      }
    ],
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    appointment_place: {
      type: String,
      default: null,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    // if all parent accepted is_set will equal to TRUE
    is_set: {
      type: Boolean,
      default: false,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "invite_appointment";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.INVITE_APPOINTMENT_MODEL_NAME = model_name;
