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

const PaymentService = {
    createPayment,
    getAllPayments,
    getOrderByUserId
};

export default PaymentService;