const mongoose = require("mongoose");
const { HOMEWORK_MODEL_NAME } = require("./homework_model");
const { STUDENT_MODEL_NAME } = require("./student_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		homework_id:
		{
			type: Schema.Types.ObjectId,
			ref: HOMEWORK_MODEL_NAME,
			required: true,
		},

		student_id: {
			type: Schema.Types.ObjectId,
			ref: STUDENT_MODEL_NAME,
			required: true,
		},
		point: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			default: null,
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
const model_name = "homework_score";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.HOMEWORK_SCORE_MODEL_NAME = model_name;
