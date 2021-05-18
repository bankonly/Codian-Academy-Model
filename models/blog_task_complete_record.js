const mongoose = require("mongoose");
const { BLOG_TASK_MODEL } = require("./blog_task_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");

const Schema = mongoose.Schema;

const schema = new Schema(
	{
		blog_task_id: {
			type: Schema.Types.ObjectId,
			ref: BLOG_TASK_MODEL,
		},
		completer_id: {
			type: Schema.Types.ObjectId,
			refPath: "on_model",
		},
		on_model: {
			type: String,
			enum: [PARENT_MODEL_NAME, TEACHER_MODEL_NAME],
			required: true,
		},
		is_completed: {
			type: Boolean,
			default: false,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "blog_task_complete_record";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.BLOG_TASK_COMPLETE_RECORD_MODEL = model_name;
