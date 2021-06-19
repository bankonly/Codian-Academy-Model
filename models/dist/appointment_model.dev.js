"use strict";

var mongoose = require("mongoose");

var _require = require("./branch_model"),
    BRANCH_MODEL_NAME = _require.BRANCH_MODEL_NAME;

var _require2 = require("./parent_model"),
    PARENT_MODEL_NAME = _require2.PARENT_MODEL_NAME;

var _require3 = require("./teacher_model"),
    TEACHER_MODEL_NAME = _require3.TEACHER_MODEL_NAME;

var Schema = mongoose.Schema;
var schema = new Schema({
  teacher_id: {
    type: Schema.Types.ObjectId,
    ref: TEACHER_MODEL_NAME
  },
  parent_id: [{
    type: Schema.Types.ObjectId,
    ref: PARENT_MODEL_NAME
  }],
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  appointment_place: {
    type: String,
    "default": null
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  branch_id: {
    type: Schema.Types.ObjectId,
    ref: BRANCH_MODEL_NAME,
    required: true
  },
  deleted_at: {
    type: Date,
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});
var model_name = "appointment";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.APPOINTMENT_MODEL_NAME = model_name;