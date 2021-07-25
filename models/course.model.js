const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { CourseToolModelName } = require("./coursetool.model");
const { UserModelName } = require("./user.model");
const { CourseSubjectModelName } = require("./coursesubject.model");
const { CourseTypeModelName } = require("./coursetype.model");

const model_name = "course";
const schema = new mongoose.Schema(
  {
    
    name: { type: String, required: true },
    desc: { type: String, required: true },
    course_for: { type: String, required: true },
    price: { type: Number, required: true },
    is_free: { type: Boolean, default: false },
    thumbnail: [{ type: String, default: null }],
    is_publish: { type: Boolean, default: false },
    is_approved: { type: Boolean, default: false },
    deleted_at: { type: Date, default: null },
    course_tool_id: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: CourseToolModelName }],
    course_type_id: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: CourseTypeModelName }],
    course_subject_id: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: CourseSubjectModelName }],
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: UserModelName },
  },
  DB_TIMESTAMP_CONFIG
);

const CourseModel = mongoose.model(model_name, schema, model_name);

module.exports = CourseModel;
module.exports.CourseModelName = model_name;
