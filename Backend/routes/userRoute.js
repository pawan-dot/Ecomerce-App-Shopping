const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole,
    deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth")

const router = express.Router();

router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);

router.route("/user/password/forgot").post(forgotPassword);

router.route("/user/password/reset/:token").put(resetPassword);

router.route("/user/logout").get(logout);

router.route("/user/details").get(isAuthenticatedUser, getUserDetails);

router.route("/user/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/user/update/profile").put(isAuthenticatedUser, updateProfile);

router
    .route("/admin/users")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
    .route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;