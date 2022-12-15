import api from "./api";

const createPayment = (
    CardNumber,
    OwnerName,
    ExpiryDate,
    SafetyCode,
    UserId
    
    ) => {
    return api.post("/Payment", {
    CardNumber,
    OwnerName,
    ExpiryDate,
    SafetyCode,
    UserId
    });
};
const getAllPayments = () => {
    return api.get("/Ticket/GetAllPayments");
};

const getOrderByUserId = (id) => {
    return api.get(`/Order/buyerid/${id}`);
};

const createOrder = (
    Order
    ) => {
    return api.post("/Order", Order={
        orderId,
        tickets:[
            {
                id,
                tokenID,
                name,
                description,
                price,
                creationDate,
                expirationDate,
                eventDate,
                location,
                verification,
                number,
                category,
                userId
            }
        ],
        price,
        buyerId
    });
};

const PaymentService = {
    createPayment,
    getAllPayments,
    getOrderByUserId,
    createOrder
};

export default PaymentService;