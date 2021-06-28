const mongoose = require("mongoose");
const { YEAR_MODEL_NAME } = require("./year_model");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year_id: [{
      ref: YEAR_MODEL_NAME,
      type: Schema.Types.ObjectId,
      required: true,
    }],
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const model_name = "subject_group";
module.exports = mongoose.model(model_name, schema, model_name);
module.exports.SUBJECT_GROUP_MODEL_NAME = model_name;
