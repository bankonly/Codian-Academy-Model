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
    listen_and_follow_command: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    acting_polite_when_listening: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    speak_out_shortly_word: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    do_conversation_asnwer_question: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    answer_doublt_with_desc: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_alphabet_of_own_name: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    asking_question_interested_story: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    seeing_image_by_book: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_same_alphabet: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    told_alphabet_different_model: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    speakout_by_alphabet_image: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    speakout_some_alphabet_by_image: {
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
const model_name = 'language_development';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.LANGUAGE_DEVELOPMENT_MODEL_NAME = model_name;
