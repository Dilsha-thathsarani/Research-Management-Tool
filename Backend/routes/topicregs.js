import express from "express";
const router = express.Router();
import TopicReg from "../models/TopicReg.js";
import Topic from "../models/TopicReg.js";

router.route("/").post((req, res) => {
  const tid = req.body.tid;
  const groupID = req.body.groupID;
  const groupName = req.body.groupName;
  const rField = req.body.rField;
  const rTopic = req.body.rTopic;
  const leaderEmail = req.body.leaderEmail;
  const comment = req.body.comment;

  const newTopic = new TopicReg({
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
  });

  newTopic
    .save()
    .then(() => {
      res.json("Topic Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all topics
router.get("/", (req, res) => {
  TopicReg.find().exec((err, Topic) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      topicRouter: Topic,
    });
  });
});

//get single topic
router.get("/:id", (req, res) => {
  let topicid = req.params.id;

  TopicReg.find({ _id: topicid }).exec((err, Topic) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      topicRouter: Topic,
    });
  });
});

//update single record

router.route("/:id").put(async (req, res) => {
  let topicid = req.params.id;
  const {
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
    status,
  } = req.body;

  const updateTopic = {
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
    status,
  };

  const update = await TopicReg.findByIdAndUpdate(topicid, updateTopic)
    .then(() => {
      res.status(200).send({ status: "Updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error update" });
    });
});

router.route("/:id").delete(async (req, res) => {
  let topicid = req.params.id;
  await TopicReg.findByIdAndDelete(topicid)
    .then(() => {
      res.status(200).send({ status: "Deleted!" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error delete" });
    });
});

export default router;
