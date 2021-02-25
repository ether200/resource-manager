import mongoose from 'mongoose';
import validator from 'validator';

const resourceScheema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    url: {
      type: String,
      required: [true, 'An URL is required'],
      validate: [validator.isURL, 'Please provide a valid URL'],
    },
    tag: {
      type: String,
      lowercase: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
  },
  {
    versionKey: false,
  }
);

const Resource = mongoose.model('Resource', resourceScheema);

export default Resource;
