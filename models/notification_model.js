const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		teacher_id: {
			type: Schema.Types.ObjectId,
			ref: "teacher",
		},
		parent_id: [
			{
				type: Schema.Types.ObjectId,
				ref: "parent",
			},
		],
		branch_id: {
			type: Schema.Types.ObjectId,
			ref: BRANCH_MODEL_NAME,
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
		img: [
			{
				type: String,
				required: true,
			},
		],
		readed: [
			{
				type: Schema.Types.ObjectId,
				ref: "parent",
				default: [],
			},
		],
		deleted: [
			{
				type: Schema.Types.ObjectId,
				ref: "parent",
				default: [],
			},
		],
		deleted_at: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "notification";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.NOTICICATION_MODEL_NAME = model_name;
