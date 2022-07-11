import User from "../model/User";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "Sorry!! User Not found" });
  }
  return res.status(200).json({ users });
};
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "You have already registered!, Please Signin" });
  }
  const hasedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hasedPassword,
    blogs:[],
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ user });
};

export const login = async (req, res, nest) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "You have not  registered yet !, Please Signup" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "oops!! Incorrect password" });
  }
  return res.status(200).json({ message: "Signin Successfull!" });
};
