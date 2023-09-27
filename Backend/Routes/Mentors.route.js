const express = require("express");
const { MentorModel } = require("../models/Mentors.models");
const mentorRouter = express.Router();
mentorRouter.get("/", async (req, res) => {
    try {
        let all_mentor = await MentorModel.find();
        res.send(all_mentor)
    } catch (err) {
        console.log(err);
        res.send({ "message": "Somthing went wrong" });
    }
})
mentorRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let mentor = await MentorModel.find({ _id: id });
        if (mentor.length > 0) {
            res.send(mentor)
        } else {
            res.send({ "message": "Mentor not found" })
        }
    } catch (err) {
        console.log(err);
        res.send({ "message": "Somthing went wrong" });
    }
})
module.exports = {
    mentorRouter
}