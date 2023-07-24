const { Router } = require('express');

const getApps = require('../controller/getAppsControllers');
const getTypes = require('../controller/getTypesController');

const router = Router();

router.get('/apps/landing', getApps('landing'));
router.get('/apps/react', getApps('react'));
router.get('/apps', getTypes);

module.exports = router;