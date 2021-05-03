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
    delveopment_data: [
      {
        development_id: {
          type: Schema.Types.ObjectId,
          ref: 'language_development',
        },
        score: {
          type: Number,
          enum: [1, 2, 3, 0],
          default: 0,
        },
      },
    ],
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);


const model_name = 'language_development_detail';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LANGUAGE_DEVELOPMENT_DETAIL_MODEL_NAME = model_name;
