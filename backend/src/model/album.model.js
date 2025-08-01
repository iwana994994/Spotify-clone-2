import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
   song: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song"}]
}, { timestamps: true });

const Album = mongoose.model("Album", albumSchema);
export default Album