const Student = require('./../../../models/Student');

const getUserById = async (req,res) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findOne ({
            studentId
        });

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        return res.status(200).json({
            student
        });

    }catch (error){
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

module.exports = getUserById;