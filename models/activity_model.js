const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: 'student',
    },
    activity_subject: {
      type: String,
      default: true,
    },
    activity_subject: {
      type: String,
      default: true,
    },
    score: {
      type: Number,
      enum: [1, 2, 3],
      required: true,
    },
    parent_feedback: {
      type: String,
      default: null,
    },
    teacher_feedback: {
      type: String,
      required: true,
    },
    teacher_signature: {
      type: Boolean,
      default: false,
    },
    activity_img: [
      {
        type: String,
        default: [],
      },
    ],
    parent_signature: {
      type: Boolean,
      default: false,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const model_name = 'activity';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.ACTIVITY_MODEL_NAME = model_name;
