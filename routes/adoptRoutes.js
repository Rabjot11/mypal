import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createAdoptController,
  deleteAdoptController,
  getAdoptController,
  getSingleAdoptController,
  AdoptCategoryController,
  AdoptCountController,
  AdoptFiltersController,
  AdoptListController,
  AdoptPhotoController,
  realtedAdoptController,
  searchAdoptController,
  updateAdoptController,
} from "../controllers/adoptController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-adopt",
  requireSignIn,
  isAdmin,
  formidable(),
  createAdoptController
);
//routes
router.put(
  "/update-adopt/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateAdoptController
);

//get products
router.get("/get-adopt", getAdoptController);

//single product
router.get("/get-adopt/:slug", getSingleAdoptController);

//get photo
router.get("/adopt-photo/:pid", AdoptPhotoController);

//delete rproduct
router.delete("/delete-adopt/:pid", deleteAdoptController);

//filter product
router.post("/adopt-filters", AdoptFiltersController);

//product count
router.get("/adopt-count", AdoptCountController);

//product per page
router.get("/adopt-list/:page", AdoptListController);

//search product
router.get("/search/:keyword", searchAdoptController);

//similar product
router.get("/related-adopt/:pid/:cid", realtedAdoptController);

//category wise product
router.get("/adopt-category/:slug", AdoptCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
