const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    teacher_id: {
      type: Schema.Types.ObjectId,
      ref: 'teacher',
    },
    student_id: {
      type: Schema.Types.ObjectId,
      ref: 'student',
    },
    weight: {
      type: Number,
      required: true,
      default: 0,
    },
    height: {
      type: Number,
      required: true,
      default: 0,
    },
    // hop khan
    rounded_hand_heigt: {
      type: Number,
      required: true,
      default: 0,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const model_name = 'nutrition';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.NUTRITION_MODEL_NAME = model_name;
