import adoptModel from "../models/adoptmodel.js";
import categoryModel from "../models/categoryModel.js";
import orderModel from "../models/orderModel.js";

import fs from "fs";
import slugify from "slugify";
import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();

//payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

export const createAdoptController = async (req, res) => {
  try {
    const { name, description,  category,  shipping } =
      req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
    
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const adopts = new adoptModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      adopts.photo.data = fs.readFileSync(photo.path);
      adopts.photo.contentType = photo.type;
    }
    await adopts.save();
    res.status(201).send({
      success: true,
      message: "Adopt Created Successfully",
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing Adopt",
    });
  }
};

//get all Adopt
export const getAdoptController = async (req, res) => {
  try {
    const adopts = await adoptModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: adopts.length,
      message: "ALlAdopts",
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting adopts",
      error: error.message,
    });
  }
};
// get single adopt
export const getSingleAdoptController = async (req, res) => {
  try {
    const adopt = await adoptModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single Adopt Fetched",
      adopt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single Adopt",
      error,
    });
  }
};

// get photo
export const AdoptPhotoController = async (req, res) => {
  try {
    const adopt = await adoptModel.findById(req.params.pid).select("photo");
    if (adopt.photo.data) {
      res.set("Content-type", adopt.photo.contentType);
      return res.status(200).send(adopt.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

//delete controller
export const deleteAdoptController = async (req, res) => {
  try {
    await adoptModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Adopt Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting adopt",
      error,
    });
  }
};

//upate adopta
export const updateAdoptController = async (req, res) => {
  try {
    const { name, description,  category, shipping } =
      req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
  
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const adopts = await adoptModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      adopts.photo.data = fs.readFileSync(photo.path);
      adopts.photo.contentType = photo.type;
    }
    await adopts.save();
    res.status(201).send({
      success: true,
      message: "Adopt Updated Successfully",
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updte adopt",
    });
  }
};

// filters
export const AdoptFiltersController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const adopts = await adoptModel.find(args);
    res.status(200).send({
      success: true,
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering Adopts",
      error,
    });
  }
};

// adopt count
export const AdoptCountController = async (req, res) => {
  try {
    const total = await adoptModel.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in adopt count",
      error,
      success: false,
    });
  }
};

// adopt list base on page
export const AdoptListController = async (req, res) => {
  try {
    const perPage = 15;
    const page = req.params.page ? req.params.page : 1;
    const adopts = await adoptModel
      .find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in per page ctrl",
      error,
    });
  }
};

// search adopt
export const searchAdoptController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await adoptModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
      .select("-photo");
    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Adopt API",
      error,
    });
  }
};

// similar adopts
export const realtedAdoptController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const adopts = await adoptModel
      .find({
        category: cid,
        _id: { $ne: pid },
      })
      .select("-photo")
      .limit(3)
      .populate("category");
    res.status(200).send({
      success: true,
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error while geting related adopt",
      error,
    });
  }
};

// get prdocyst by catgory
export const AdoptCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    const adopts = await adoptModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      category,
      adopts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting adopts",
    });
  }
};

//payment gateway api
//token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//payment
export const brainTreePaymentController = async (req, res) => {
  try {
    const {  cart, nonce } = req.body;
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    let newTransaction = gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      function (error, result) {
        if (result) {
          const order = new orderModel({
            adopts: cart,
            payment: result,
            buyer: req.user._id,
          }).save();
          res.json({ ok: true });
        } else {
          res.status(500).send(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};


