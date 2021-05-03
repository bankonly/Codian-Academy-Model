const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: 'student',
    },
    is_absent: {
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
const model_name = 'attendance';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.ATTENCEDANCE_MODEL_NAME = model_name;