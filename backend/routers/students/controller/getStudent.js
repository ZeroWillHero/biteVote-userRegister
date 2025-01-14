const Student = require('../../../models/Student');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students).status(200);
    } catch (error) {
        res.json({ message: error }).ststus(500);
    }
}

const getStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findOne({ studentId: id });
    
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
    
        return res.status(200).json(student);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
module.exports = { getStudents, getStudent };  