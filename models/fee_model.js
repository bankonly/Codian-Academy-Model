const mongoose = require("mongoose");
const { BLOG_TASK_MODEL } = require("./blog_task_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");

const Schema = mongoose.Schema;

const schema = new Schema(
	{
		student_id: {
			type: Schema.Types.ObjectId,
			ref: STUDENT_MODEL_NAME,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		is_paid: {
			type: Boolean,
			default: false,
		},
		pay_date: {
			type: Date,
			required: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "fee";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.FEE_MODEL_NAME = model_name;
