const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { CLASSES_MODEL_NAME } = require("./class_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
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
    nick_name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: null ,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    identify_id: {
      type: String,
      unique: true,
      required: true,
    },
    // branch_id: {
    // 	ref: BRANCH_MODEL_NAME,
    // 	type: Schema.Types.ObjectId,
    // 	required: true,
    // },
    class_id: {
      type: Schema.Types.ObjectId,
      ref: CLASSES_MODEL_NAME,
    },
    // teacher_id: {
    // 	type: Schema.Types.ObjectId,
    // 	ref: TEACHER_MODEL_NAME,
    // },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "student";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.STUDENT_MODEL_NAME = model_name;
