import mongoose from "mongoose";

const razOrderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    amount:{
        type:Number,
        required:true,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    address: {
        type: String,
        reuired: true,
    },
    razorpay_order_id: {
        type: String,
    },
    razorpay_signature: {
        type: String,
        
    },
    razorpay_payment_id: {
        type: String,
    
    },
    status:{
        type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("razOrder", razOrderSchema);
