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
    interested_in_netural: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    throwing_garbage_inplace: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    helping_take_care_tree: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    helping_clean_garbage: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    helping_turn_off_water: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_water_savely: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    showing_respect_adult: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    ask_for_going: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    wear_right_clothes_with_age: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    showing_respectation_for_place: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    be_patient_for_waiting: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    be_polite_when_talk: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_polite_world: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    play_with_friend: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    follow_moving_by_cammand: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    behavior_be_a_leader: {
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

const model_name = 'social_development';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SOCIAL_DEVELOPMENT_MODEL_NAME = model_name;
