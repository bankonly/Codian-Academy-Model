const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "course_type";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, default: null },
    desc: { type: String, default: null },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const CourseTypeModel = mongoose.model(model_name, schema, model_name);

module.exports = CourseTypeModel;
module.exports.CourseTypeModelName = model_name;
