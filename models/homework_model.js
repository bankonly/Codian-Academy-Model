const mongoose = require("mongoose");
const { CLASSES_MODEL_NAME } = require("./class_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const { SUBJECT_MODEL_NAME } = require("./subject_model");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		class_id:
		{
			type: Schema.Types.ObjectId,
			ref: CLASSES_MODEL_NAME,
			default: null,
		},

		subject_id: {
			type: Schema.Types.ObjectId,
			ref: SUBJECT_MODEL_NAME,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		pdf_file: {
			type: String,
			default: null,
		},
		dead_line: {
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
const model_name = "homework";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.HOMEWORK_MODEL_NAME = model_name;
