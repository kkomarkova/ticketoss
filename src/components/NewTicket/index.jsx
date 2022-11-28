import React,{ useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Box from '@mui/material/Box';
import ProfileImg from "../../images/pb.jpg";
import { 
    FormContainer, 
    FormPB 
} from "../../styles/Style";

import { createTicket } from "../../store/actions/ticket";



const requiredField = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">   
                This field is required!
            </div>
        );
    }
};

const validName = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The ticketname should be more than 3 characters.
            </div>
        );
    }
};
const NewTicket = () => {
    
    const form = useRef();
    const checkBtn = useRef();

    const [userId, setUserId] = useState("6342f741fe731b83c0bfcef1");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [number, setNumber] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { response } = useSelector((state) => state.response);
    const dispatch = useDispatch();

    const onChangeUserId = (e) => {
        const userId = e.target.value;
        setUserId(userId);
    };
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
    };
    
    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    };

    const onChangeEventDate = (e) => {
        const eventDate = e.target.value;
        setEventDate(eventDate);
    };

    const onChangeLocation = (e) => {
        const location = e.target.value;
        setLocation(location);
    };

    const onChangeCategory = (e) => {
        const category = e.target.value;
        setCategory(category);
    };

    const onChangeNumber = (e) => {
        const number = e.target.value;
        setNumber(number);
    };

    const handleCreation = (e) => {
        e.preventDefault();

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(
                createTicket(
                    userId,
                    name,
                    description,
                    price,
                    eventDate,
                    location,
                    category,
                    number
                ))
                .then(() => {
                    setSuccessful(true);
                    //alert("Ticket created successfully");
                    })
                .catch(() => {
                    setSuccessful(false);
                    //alert("Ticket creation failed");
                });
        }
    };

    return (
        <>
        <FormContainer className="card card-container">
        <FormPB
        className="profileIMG"
          src={ProfileImg}
          alt="profile-img"
        />
            
                <Form onSubmit={handleCreation} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                {/* <label htmlFor="userId">User</label> */}
                                <Input
                                    type="hidden"
                                    className="form-control"
                                    name="userId"
                                    value={userId}
                                    onChange={onChangeUserId}
                                    validations={[requiredField]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={onChangeName}
                                    validations={[requiredField, validName]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={description}
                                    onChange={onChangeDescription}
                                    validations={[requiredField]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    value={price}
                                    onChange={onChangePrice}
                                    validations={[requiredField]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <Input
                                    type="date"
                                    className="form-control"
                                    name="eventDate"
                                    value={eventDate}
                                    onChange={onChangeEventDate}
                                    validations={[requiredField]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <Input
                                    type="text"     
                                    className="form-control"
                                    name="location"
                                    value={location}
                                    onChange={onChangeLocation}
                                    validations={[requiredField]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    value={category}
                                    onChange={onChangeCategory}
                                    validations={[requiredField]}
                                />  
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Number</label>
                                <Input
                                    type="number"
                                    className="form-control"
                                    name="number"
                                    value={number}
                                    onChange={onChangeNumber}
                                    validations={[requiredField]}
                                />
                            </div>
                        </div>
                        )}
                            {response && (
                                <div className="form-group">
                                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                    {response.message}
                                    </div>
                                </div>
                            )}
                            <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
>
                    <CheckButton ref={checkBtn}>Create</CheckButton>
                    </Box>
                </Form>
            </FormContainer>
        </>
    );
};

export default NewTicket;

