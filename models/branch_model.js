const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
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
const model_name = "branch";
const BranchModel = mongoose.model(model_name, schema, model_name);
module.exports = BranchModel;
module.exports.BRANCH_MODEL_NAME = model_name;
