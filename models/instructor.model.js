const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { CourseTypeModelName } = require("./coursetype.model");

const model_name = "instructor";

const schema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, default: null },
    img: { type: String, default: null },
    cover_img: { type: String, default: null },
    course_type_id: [{ type: mongoose.Schema.Types.ObjectId, ref: CourseTypeModelName, required: true }],
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const InstructorModel = mongoose.model(model_name, schema, model_name);

module.exports = InstructorModel;
module.exports.InstructorModelName = model_name;
