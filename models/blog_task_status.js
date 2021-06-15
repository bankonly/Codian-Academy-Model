const mongoose = require("mongoose");
const { BLOG_TASK_MODEL } = require("./blog_task_model");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		blog_task_id: {
			type: Schema.Types.ObjectId,
			ref: BLOG_TASK_MODEL,
		},
		status: {
			type: String,
			enum: ["done", "backlog"],
			default: "backlog",
		},
		student_id:
		{
			type: Schema.Types.ObjectId,
			ref: STUDENT_MODEL_NAME,
			require: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "blog_task_status";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.BLOG_TASK_STATUAS_MODEL = model_name;
