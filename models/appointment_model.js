const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		teacher_id: {
			type: Schema.Types.ObjectId,
			ref: TEACHER_MODEL_NAME,
		},
		parent_id: [
			{
				type: Schema.Types.ObjectId,
				ref: PARENT_MODEL_NAME,
			},
		],
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		appointment_place: {
			type: String,
			default: null,
		},
		appointment_date: {
			type: Date,
			required: true,
		},
		appointment_moved: [
			{
				moved_date: {
					type: Date,
					default: null,
				},
				parent_id: {
					type: Schema.Types.ObjectId,
					ref: PARENT_MODEL_NAME,
				},
			},
		],
		is_accepted: {
			type: Boolean,
			default: false,
		},
		is_completed: {
			type: Boolean,
			default: false,
		},
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
const model_name = "appointment";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.APPOINTMENT_MODEL_NAME = model_name;
