import api from "./api";

const sendEmail = (
    to, 
    subject, 
    body
    ) => {
    return api.post("email", {
        to, 
        subject, 
        body
    });
}

const EmailService = {
    sendEmail
}

export default EmailService;