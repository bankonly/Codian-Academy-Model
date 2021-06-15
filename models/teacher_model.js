const mongoose = require("mongoose");
const { ROLE_MODEL_NAME } = require("./role_model");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    date_of_birth: {
      type: Date,
      default: null,
    },
    is_super_admin: {
      type: Boolean,
      default: false,
    },
    refresh_token: {
      type: String,
      default: null,
    },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: ROLE_MODEL_NAME,
    },
    branch_id: {
      type: Schema.Types.ObjectId,
      ref: BRANCH_MODEL_NAME,
    },

    deleted_at: {
      type: Date,
      default: null,
    },

  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "teacher";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.TEACHER_MODEL_NAME = model_name;
