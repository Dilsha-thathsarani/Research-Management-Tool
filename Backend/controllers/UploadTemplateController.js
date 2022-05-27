import UplaodTemplateRoute from "../models/UploadTemplate.js";

export const UploadTemplate = async (req, res) => {
  console.log(req.body);
  const AdminName = req.body.AdminName;
  const Title = req.body.Title;
  const SchemaType = req.body.SchemaType;
  const Template = req.body.song;
  const Description = req.body.Description;

  const newType = new UplaodTemplateRoute({
    AdminName,
    Title,
    Template,
    SchemaType,
    Description,
  });

  newType
    .save()
    .then(() => {
      res.json("Upload Template Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTypes = async (req, res) => {
  await UplaodTemplateRoute.find()
    .then((createtypes) => {
      res.json(createtypes);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
