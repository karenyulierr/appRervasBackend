import mongoose from 'mongoose';

export const db = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://root:ptwgG47d8FOVPJNq@cluster0.h5lqkds.mongodb.net/?retryWrites=true&w=majority')
        console.log("se conecto correctamente ")
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1);
    }
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));