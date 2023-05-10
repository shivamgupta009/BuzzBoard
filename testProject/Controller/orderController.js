const order = require('../model/order');



exports.createOrder = async (req, res, next) => {

    try {
        let { orderId,itemName,cost,order_date,delivery_date } = req.body;

        const createDetials = await order.create({
            orderId, itemName, cost, order_date, delivery_date,

        })
    

        return res.send(
            {
                error: false,
                status: 200,
                message: 'Order Created.',
                result: createDetials
            }
        )
    }
    catch (error) {
        console.log(error)
        next(error);

    }
}


exports.updateOrder = async (req, res, next) => {
    try {

        let {orderId} = req.body

        const updateOrder = await order.update({
           delivery_date
        },

            {
                where: {
                    [Op.and]: [
                 
                        { orderId }
                    ]
                },
            })
  

        return res.send(
            {
                error: false,
                status: 200,
                message: 'order Updated ',
                result: updateOrder
            }
        )
    }
    catch (error) {
     next(error);

    }
}


exports.listOfOrder = async (req, res, next) => {
    try {

        let { order_date} = req.body;

        const limit = 10;
        const offset = (page - 1) * limit;

        const { count, rows: list } = await order.findAndCountAll({
            where: {
                [Op.and]: [
                    { order_date },
                 
                ]
            },
          
            order: [
                ["id", "DESC"]

            ],
            limit,
            offset,
        });

        return res.send(
            {
                error: false,
                status: 200,
                message: 'List Of orders .',
                result: list,
                pageCount: count,
            }
        )
    }
    catch (error) {
        next(error)

    }
}

exports.getbyId = async(req, res, next) =>{
    
    try {
        const { orderId } = req.body
        const resultData = await order.findAll({
            where: { orderId },
            
        })
        return res.status(200).json({
            error: false,
            message: "Data Fetched Successfully",
            result: resultData
        
        })
    }
    catch(error){
        next(error)
    }
}

exports.deleteOrder = async(req, res, next) =>{
    
    try {
        const { orderId } = req.body
        const resultData = await order.delete({
            where: { orderId },
            
        })
        return res.status(200).json({
            error: false,
            message: "Order Deleted Successfully",
            result: resultData
        
        })
    }
    catch(error){
        next(error)
    }
}


