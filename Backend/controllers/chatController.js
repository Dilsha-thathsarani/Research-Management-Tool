import chatForum from "../models/chatForum.js";

//insert message details to the db
export const sendMsg = async (req, res) => {
  try {
    const { group_id, groupID, stdName, stdEmail, subject, message } = req.body;

    const newMsg = new chatForum({
      group_id,
      groupID,
      stdName,
      stdEmail,
      subject,
      message,
    });

    await newMsg.save().then(() => {
      res.json(newMsg);
    });
  } catch (err) {
    console.log("err");
    res.status(500).json(err);
  }
};

//Get a message details
export const getMsg = async (req, res) => {
  const group_id = req.params.group_id;
  console.log("id:", group_id);
  chatForum
    .find({ group_id: group_id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

//Get all message details
export const getAllMsg = async (req, res) => {
  chatForum
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

//delete a message details
export const deleteMsg = async (req, res) => {
  const msgID = req.params.id;
  chatForum
    .findByIdAndDelete(msgID)
    .then((data) => {
      res.status(200).send({ status: "Request  deleted" });
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
