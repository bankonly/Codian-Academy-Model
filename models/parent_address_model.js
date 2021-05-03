const mongoose = require("mongoose");
const { YEAR_MODEL_NAME } = require("./year_model");
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
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "parent_address";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.PARENT_ADDRESS_MODEL_NAME = model_name;
