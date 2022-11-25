const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    certificate: {
      type: Object,
      default: {},
    },
    participants: {
      type: Array,
      default: [],
    },
    totalParticipants: Number,
    zip: Number,
    city: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
EventSchema.plugin(toJSON);
EventSchema.plugin(paginate);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
