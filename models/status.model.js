const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "status";

const schema = new mongoose.Schema(
    {
        name_la: { type: String, required: true },
        name_en: { type: String, required: true },
        numeric: { type: String, required: true, unique: true },
        deleted_at: { type: Date, default: null },
    },
    DB_TIMESTAMP_CONFIG
);

const StatusModel = mongoose.model(model_name, schema, model_name);

module.exports = StatusModel;
module.exports.StatusModelName = model_name;
