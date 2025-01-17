const router = require ('express').Router();

const getStudents = require('./controller/getStudent').getStudents;
const getStudent = require('./controller/getStudent').getStudent;
const addStudent = require('./controller/addStudent');
const authenticate = require('./controller/authenticate');
const getUserById = require('./controller/getUserById');

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.post('/authenticate', authenticate);
router.get('/getUserById/:studentId', getUserById);

module.exports = router;