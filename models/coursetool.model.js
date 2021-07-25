const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "course_tool";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const CourseToolModel = mongoose.model(model_name, schema, model_name);

module.exports = CourseToolModel;
module.exports.CourseToolModelName = model_name;
