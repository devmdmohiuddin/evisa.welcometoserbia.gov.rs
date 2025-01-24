import mongoose from 'mongoose';

export async function dbConnect() {
    try {
        if(mongoose.connections[0].readyState) {
            console.log("Mongodb is already connected");
            return;
        }

        mongoose.connect(process.env.MONGO_URI);

    } catch(error) {
        console.error('Something goes wrong!');
        console.error(error);
    }  
}