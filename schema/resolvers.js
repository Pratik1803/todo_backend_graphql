const { TaskModel } = require("../models/task.model");
const { UserModel } = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const resolvers = {
  Query: {
    greet: (parent, args) => {
      return args.msg;
    },

    // FOR USERS
    createUser: async (parent, args) => {
      try {
        const newUser = new UserModel(args.userDetails);
        const result = await newUser.save();
        return result;
      } catch (error) {
        console.log(`Err in creating user: ${error}`);
        return null;
      }
    },

    loginUser: async (parent, args) => {
      try {
        const input = args.input;
        const user = await UserModel.findOne({ username: input.username });
        if (!user) return null;
        const res = await bcryptjs.compare(input.password, user.password);
        if (!res) return null;
        return user;
      } catch (error) {
        console.log(`Err in authenticating user: ${error}`);
        return null;
      }
    },

    // FOR TASKS

    createTask: async (parent, args) => {
      try {
        const newTask = new TaskModel(args.task);
        const res = await newTask.save();
        if (!res) return null;
        return res;
      } catch (error) {
        console.log(`Err in creating task: ${error}`);
        return null;
      }
    },

    getTasks: async (parent, args) => {
      try {
        const uid = args.uid;
        const res = await TaskModel.find({ uid: uid });
        if (res.length <= 0) return null;
        return res;
      } catch (error) {
        console.log(`Err in getting tasks: ${error}`);
        return null;
      }
    },

    completeTask: async (parent, args) => {
      try {
        const res = await TaskModel.findByIdAndUpdate(args.taskID, {
          completed: true,
        });
        if (!res) return null;
        return res;
      } catch (error) {
        console.log(`Err in completing task: ${error}`);
        return null;
      }
    },
  },
};

module.exports = { resolvers };
