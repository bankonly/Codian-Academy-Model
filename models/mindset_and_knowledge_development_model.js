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
    blow_from_one_to_ten: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    read_number_from_one_to_ten: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    dispplay_things_from_one_to_ten: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_greater_lessthan_from_one_to_ten: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_number_of_store_things: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_number_splited_big_small: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_longer_shorter: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_taller_shorter: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_softer_heavier: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_lessthan_greater: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_morning_afternoon_evening_time: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_under_in_on_outside: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    using_word_infront_backward_middle: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_changing_base_on_image: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    drop_model_same_as_image: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    showing_things_same_image: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_name_body_things: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_name_tasted_sweet: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_smelling: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_voice_animal_human: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_attitute_soft_strong: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_day_of_traditional: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_place_name_arround_school: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_communicate_tools: {
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
const model_name = 'mindset_and_knowledge';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.MINDSET_AND_KNOWLEDGE_MODEL_NAME = model_name;
