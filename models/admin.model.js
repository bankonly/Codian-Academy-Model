const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "admin";

const schema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, default: null },
        img: { type: String, default: null },
        deleted_at: { type: Date, default: null },
        is_super_admin: { type: Boolean, default: false },
    },
    DB_TIMESTAMP_CONFIG
);

const AdminModel = mongoose.model(model_name, schema, model_name);

module.exports = AdminModel;
module.exports.AdminModelName = model_name;
