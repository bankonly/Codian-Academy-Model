const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		teacher_id: {
			type: Schema.Types.ObjectId,
			ref: TEACHER_MODEL_NAME,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		like: {
			type: Number,
			default: 0,
		},
		is_completed: {
			type: Boolean,
			default: false,
		},
		img: [
			{
				type: String,
				default: null,
			},
		],
		student_id: [
			{
				type: Schema.Types.ObjectId,
				ref: STUDENT_MODEL_NAME,
				require: true,
			},
		],
		branch_id: {
			type: Schema.Types.ObjectId,
			ref: BRANCH_MODEL_NAME,
			required: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "blog_task";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.BLOG_TASK_MODEL = model_name;
