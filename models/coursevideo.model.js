const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { CourseModelName } = require("./course.model");
const { StatusModelName } = require("./status.model");

const model_name = "videos";

const schema = new mongoose.Schema(
    {
        episode: { type: Number, required: true },
        title: { type: String, required: true },
        desc: { type: String, default: null },
        video_path: { type: String, required: true },
        last_watch_time: { type: Number, default: 0 },
        video_time: { type: Number, default: 0 },
        course_id: { type: mongoose.Schema.Types.ObjectId, ref: CourseModelName, required: true },
        is_completed: { type: Boolean, default: false },
        is_sized_resolution: { type: Boolean, default: false },
        snipped_file: [  { path: { type: String, default: null }, name: { type: String, default: null } }],
        deleted_at: { type: Date, default: null },
    },
    DB_TIMESTAMP_CONFIG
);

const CourseVideoModel = mongoose.model(model_name, schema, model_name);

module.exports = CourseVideoModel;
module.exports.CourseVideoModelName = model_name;