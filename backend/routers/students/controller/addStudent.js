const Student = require('../../../models/Student');

const addStudent = async (req,res) => {
    const { firstName, lastName, email, studentId, password, phoneNumber, address } = req.body;
    try {   
        const student = new Student({
            firstName,
            lastName,
            email,
            studentId,
            password,
            phoneNumber,
            address
        });

        await student.save();

        res.status(201).json({message: 'Student added successfully'});
    }catch(error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

module.exports = addStudent;