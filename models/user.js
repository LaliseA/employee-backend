const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", //Use created_at to store the created date
      updatedAt: "updated_at", //
    },
  }
);

module.exports = mongoose.model("User", UserSchema);
