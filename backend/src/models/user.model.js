import mongoose, { Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 1,
        maxLength: 30,
    }, 
    email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
}, 
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50,
}




}
, 
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;