const router = require ('express').Router();

const getStudents = require('./controller/getStudent').getStudents;
const getStudent = require('./controller/getStudent').getStudent;
const addStudent = require('./controller/addStudent');
const authenticate = require('./controller/authenticate');

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.post('/authenticate', authenticate);

module.exports = router;