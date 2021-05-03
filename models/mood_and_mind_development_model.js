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
    perform_mood: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    confident: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    face_impressed_on_result: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    impressed_on_someone_result: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    patient_on_mission: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    ask_for_allowation: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    accept_when_do_mistake: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    showing_love_to_people: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    help_other_pepple: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    share_material: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    keep_goods: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    impressed_eating_together: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    moving_by_commanded: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    moving_by_imagination: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    be_active_in_playing: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    have_fun_with_playing: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    impressed_with_education_game: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    impressed_with_building_drawing: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    impressed_with_drawing_alphabet: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    be_kindness_with_activity: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const model_name = 'mood_and_mind_development';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.MOOD_AND_MINDSET_DEVELOPMENT_MODEL_NAME = model_name;
