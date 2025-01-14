const Student = require('../../../models/Student');
const generateAuthToken = require('../../../functions/generateAuthToken');

const authenticate = async ( req,res ) => {
    const { studentId }  = req.body;
    
    try {
        const student = await Student.findOne({
            studentId
        });

        const accessToken = generateAuthToken({student});

        if (!student) {
            return res.status(404).json({message: 'Student not found'});
        }

        res.status(200).json({message: 'Student found' , accessToken});
    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

module.exports = authenticate;