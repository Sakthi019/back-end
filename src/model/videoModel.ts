import mongoose, { Schema, Document } from 'mongoose';

interface Video extends Document {
    blobUrl: string;
    videoName: string;
}

const videoSchema: Schema<Video> = new Schema({
    blobUrl: { type: String, required: true },
    videoName: { type: String, required: true }
});

const VideoModel = mongoose.model<Video>('video', videoSchema);
export default VideoModel;
