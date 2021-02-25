import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      validate: [validator.isAlpha, `Name can't contain numbers`],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'A password is required'],
      minlength: 8,
      maxlength: 16,
    },
  },
  {
    versionKey: false,
  }
);

// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.method('comparePassword', function (password) {
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(password, this.password, (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
