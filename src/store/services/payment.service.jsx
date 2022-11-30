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
const PaymentService = {
    createPayment,
    getAllPayments,
};

export default PaymentService;