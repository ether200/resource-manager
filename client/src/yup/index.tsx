import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Please provide a valid mail')
    .required('Mail is required'),
  password: Yup.string().required('Password is required'),
});

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .required('Please enter your name!')
    .matches(/^[aA-zZ]+$/, 'Name must have only letters and no spaces'),
  email: Yup.string()
    .email('Please provide a valid mail')
    .required('Mail is required'),
  password: Yup.string()
    .required('Please enter a password')
    .min(8, 'Password must have at least 8 characters'),
  passwordConfirm: Yup.string().test(
    'password-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export const SubjectSchema = Yup.object({
  subjectName: Yup.string()
    .required('Please enter a subject name')
    .max(16, 'Subject name max 16 characters'),
});

export const ResourceSchema = Yup.object({
  title: Yup.string()
    .required('Please enter a title')
    .max(16, 'Title name max 16 characters'),
  url: Yup.string()
    .required('Please enter a video URL')
    .url('Please enter a valid URL'),
  tag: Yup.string().notRequired().max(10, 'Tag name 10 characters max'),
});
