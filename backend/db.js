const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://om:MongoDB@cluster0.6j2klfh.mongodb.net/")

const userRegSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const UserLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const inventorySchema = new mongoose.Schema({
    itemName: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String
    },
    branch: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        required: true
    },
      // Conditionally required field for event name, only if event is true
      eventName: { 
        type: String, 
        required: function() { 
            return this.event === true; 
        }, 
        validate: {
            // validator: function(value: string) {
            validator: function(value) {
                // Ensure eventName is not empty if event is true
                return this.event === false || (this.event === true && value && value.length > 0);
            },
            message: "Event name is required if the item is used in an event."
        }
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 

    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    },
});

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    date: { 
        type: Date, 
        required: true 
    },
    time: { 
        type: String, 
        required: true 
    },
    venue: { 
        type: String, 
        required: true 
    },
    organizer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 

    },
    participants: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 

    },
    updatedAt: { 
        type: Date, 
        default: Date.now 

    }
});
  
  
const User = mongoose.model('User', userRegSchema);
const Inventory = mongoose.model('Inventory', inventorySchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = {
    User,
    Inventory,
    Event
}