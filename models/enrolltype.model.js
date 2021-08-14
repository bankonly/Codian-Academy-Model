const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "enroll_type";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    numeric: { type: Number, required: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const EnrollTypeModel = mongoose.model(model_name, schema, model_name);

module.exports = EnrollTypeModel;
module.exports.EnrollTypeModelName = model_name;
