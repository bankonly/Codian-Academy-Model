const mongoose = require("mongoose");
const { BRANCH_MODEL_NAME } = require("./branch_model");
const { PARENT_MODEL_NAME } = require("./parent_model");
const { TEACHER_MODEL_NAME } = require("./teacher_model");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		village: {
			type: String,
			required: true,
		},
		house_unit: {
			type: Number,
			required: true,
		},
		house_number: {
			type: Number,
			required: true,
		},
		district: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		deleted_at: {
			type: Date,
			default: null,
		},
		parent_id: {
			ref: PARENT_MODEL_NAME,
			type: Schema.Types.ObjectId,
			required: true,
		},
		branch_id: {
			ref: BRANCH_MODEL_NAME,
			type: Schema.Types.ObjectId,
			required: true,
		},
		teacher_id: {
			ref: TEACHER_MODEL_NAME,
			type: Schema.Types.ObjectId,
			required: true,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "parent_address";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.PARENT_ADDRESS_MODEL_NAME = model_name;
