import mongoose from "mongoose";

const razorOrderSchema = new mongoose.Schema(
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
    order_id: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("razorOrder", razorOrderSchema);
