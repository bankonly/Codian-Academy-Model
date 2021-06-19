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
		img: { type: String, required: true },
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "gallery";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.GALLERY_MODEL_NAME = model_name;
