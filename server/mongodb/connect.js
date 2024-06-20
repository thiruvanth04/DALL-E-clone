import mongoose from "mongoose";

const connectBD =(url) => {
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
        .then(()=> console.log(' mongoDB connected'))
        .catch((err) => console.log(err))

}
export default connectBD;