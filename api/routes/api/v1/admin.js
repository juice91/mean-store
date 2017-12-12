var express = require("express");
var passport = require("passport");
var router = express.Router();
var adminController = require(ROOT_FOLDER + "/controllers/api/v1/admin");
var settingsCtrl = require(ROOT_FOLDER + "/controllers/api/v1/site_configuration");
var hSettingsCtrl = require(ROOT_FOLDER + "/controllers/api/v1/main_page_configuration");
var auth = require(ROOT_FOLDER + "/middlewares/authentication");


router.post("/auth", adminController.Auth);
router.get("/settings", settingsCtrl.getSettings);
router.put("/settings", settingsCtrl.saveSettings);
router.post("/settings", settingsCtrl.insertSettings);
router.get("/home-page-settings", hSettingsCtrl.getSettings);
router.put("/home-page-settings",  hSettingsCtrl.saveSettings);
router.post("/home-page-settings",  hSettingsCtrl.insertSettings);
router.post('/sampleInsert',adminController.sampleInsert);
module.exports = router;
