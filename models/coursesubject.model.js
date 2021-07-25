const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "subject";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, default:null },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const CourseSubjectModel = mongoose.model(model_name, schema, model_name);

module.exports = CourseSubjectModel;
module.exports.CourseSubjectModelName = model_name;
