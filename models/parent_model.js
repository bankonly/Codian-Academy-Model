const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    tribe: {
      // Zon phao
      type: String,
      default: null,
    },
    working_place: {
      type: String,
      default: null,
    },
    job_title: {
      type: String,
      default: null,
    },
    education_id: {
      type: Schema.Types.ObjectId,
      ref: 'parent_education',
      default: null,
    },
    graduated_year: {
      type: Number,
      default: null,
    },
    phone_number: [
      {
        type: Number,
        required: true,
      },
    ],
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: null,
    },
    village: { type: String, default: null },
    district: { type: String, default: null },
    province: { type: String, default: null },
    parent_status: {
      type: String,
      default: null,
    },
    student_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'student',
      },
    ],
    refresh_token: {
      type: String,
      default: null,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
const model_name = 'parent';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.PARENT_MODEL_NAME = model_name;
