const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      lowercase: true,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      lowercase: true,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    websiteLink: {
      type: String,
      required: true,
    },
    toolsLogo: {
      type: String,
      required: true,
    },
    toolsImage: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      required: false,
    },
    youtubeLink: {
      type: String,
      required: false,
    },
    discordLink: {
      type: String,
      required: false,
    },
    twitterLink: {
      type: String,
      required: false,
    },
    linkedinLink: {
      type: String,
      required: false,
    },
    videoReviewLink: {
      type: String,
      required: false,
    },
    ratings: {
      type: Number,
      
    },
    favourite: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "pending",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
