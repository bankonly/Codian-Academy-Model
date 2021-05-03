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
    toy_activity_and_food: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    phor_jai_food_time: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    eat_and_drink_by_their_self: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    ask_for_doing_toilet: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    rest_and_sleep_in_time: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    choose_cloth_by_their_self: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    becareful_and_take_care_their_self: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    walk_forward_by_ruled: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    dance_with_one_leg: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    walk_up_down_stair: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    run_and_stop_by_command: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    throw_ball_with_two_hand_forward: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    recieve_ball_shaking_on_the_floor: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    moving_and_acting_by_ruled: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    moving_hand_by_ruled: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    drawing_straight_line_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    drawing_round_line_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    drawing_circle_line_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    drawing_line_kong_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    write_alphabet: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    write_number_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    build_statue_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    cut_paper_by_picture: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 0,
    },
    hang_material_by_ruled: {
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

const model_name = 'behavior';
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.ATTENCEDANCE_MODEL_NAME = model_name;
