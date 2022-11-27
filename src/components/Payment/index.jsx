import React from "react";
class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:''
        };
    }
    onCreatePayment=()=>{
        let paymentInfo={
              CardNumber:this.refs.CardNumber.value,
              OwnerName:this.refs.OwnerName.value,
              SafetyCode:this.refs.SafetyCode.value,
              ExpiryDate:this.refs.ExpiryDate.value
        
            };
            fetch('https://localhost:7067/api/Payment', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(paymentInfo)}).then(r=>r.json()).then(res=>{
                    if(res){
                        this.setState({message:'Payment created successfully'});
                    }
                })
        }
    render(){
        return(
          <div>
            <h2>Please Enter Payment Details...</h2>
            <p>
              <label>Card Number:<input type="text"  ref="CardNumber"></input></label>
            </p>
            <p>
              <label>Name:<input type="text" ref="OwnerName"></input></label>
            </p>
            <p>
              <label>Safety Code:<input type="text" ref="ExpiryDate"></input></label>
            </p>
            <p>
              <label>Expiry date:<input type="text" ref="SafetyCode"></input></label>
            </p>
            <button onClick={this.onCreatePayment}>Create</button>
                  <p>{this.state.message}</p>
                  </div>
        
        )
      }
}

// const Payment = (props) => {
//     return (
//         <>
//         <h3 value={"CardNumber"}>{props.CardNumber}</h3>
//         <h3 value={"OwnerName"}>{props.OwnerName}</h3>
//         <h3 value={"ExpiryDate"}>{props.ExpiryDate}</h3>
//         <h3 value={"SafetyCode"}>{props.SafetyCode}</h3>
//         </>
//         );
//         };
export default Payment;