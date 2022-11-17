import React,{ useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { 
    FormContainer, 
    FormPB 
} from "../../styles/Style";

import { createTicket } from "../../store/actions/ticket";

const NewTicket = () => {
    
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [number, setNumber] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { response } = useSelector((state) => state.message);
    const dispatch = useDispatch();


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
                    alert("Ticket created successfully");
                    })
                .catch(() => {
                    setSuccessful(false);
                    alert("Ticket creation failed");
                });
        }
    };

    return (
        <>
            <FormContainer>
                <FormPB 
                    src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                    alt="Ticket"
                />
                <Form onSubmit={handleCreation} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={onChangeName}
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
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="eventDate"
                                    value={eventDate}
                                    onChange={onChangeEventDate}
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
                                />  
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Number</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="number"
                                    value={number}
                                    onChange={onChangeNumber}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Create</button>
                            </div>
                        </div>
                    )}
                    {response && (
                        <div className="form-group">
                            <div
                                className={ successful ? "alert alert-success" : "alert alert-danger" }
                                role="alert"
                            >
                                {response.message}
                            </div>
                        </div>
                    )}
                </Form>
            </FormContainer>
        </>
    );
};

export default NewTicket;

