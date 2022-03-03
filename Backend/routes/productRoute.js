const express = require("express");
const {
    getAllProducts,
    getAdminProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getOneProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
} = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
//product routes
router
    .route("/admin/products/create")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/products/getAll").get(getAllProducts);


router.route("/products/getOne/:id").get(getOneProduct);

//admin route
router.route("/admin/products/getAll").get((isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts));

router
    .route("/admin/products/update/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

router
    .route("/admin/products/delete/:id")
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

//revies routs

router.route("/products/review").put(isAuthenticatedUser, createProductReview);

router.route("/products/allReviews").get(getProductReviews)

router.route("/products/review/delete").delete(isAuthenticatedUser, deleteReview);


module.exports = router;
