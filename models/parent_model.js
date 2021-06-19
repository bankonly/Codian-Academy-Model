const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{

		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		nationality: {
			type: String,
			default: null,
		},
		tribe: {
			// Zon phao
			type: String,
			default: null,
		},
		working_place: {
			type: String,
			default: null,
		},
		job_title: {
			type: String,
			default: null,
		},
		branch_id: {
			type: Schema.Types.ObjectId,
			ref: BRANCH_MODEL_NAME,
			required: true
		},
		phone_number: [
			{
				type: Number,
				required: true,
			},
		],
		gender: {
			type: String,
			enum: ["male", "female"],
			default: null,
		},
		refresh_token: {
			type: String,
			default: null,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const model_name = "parent";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.PARENT_MODEL_NAME = model_name;
