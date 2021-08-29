const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const CourseModel = require("./course.model");

const model_name = "course_section";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: CourseModel },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const CourseSection = mongoose.model(model_name, schema, model_name);

module.exports = CourseSection;
module.exports.CourseSectionName = model_name;
