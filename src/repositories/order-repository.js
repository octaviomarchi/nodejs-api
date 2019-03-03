'use strict'

const mongoose = require('mongoose');
const order = mongoose.model('Order');


exports.get = async () => {    
    var res = await order.find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}