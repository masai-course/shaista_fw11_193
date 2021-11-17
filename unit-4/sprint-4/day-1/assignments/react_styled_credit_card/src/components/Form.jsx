import React, { useState } from 'react';

import styled from 'styled-components';


const FormDiv = styled.div`
    border:1px solid black;
    width: 60%;
    margin: 10px auto;
    `;

const CardForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 50%;

`;

const Submit = styled.button`
	text-transform: uppercase;
    color: white;
    background-color:black;
	margin: 10px 0 10px 50px;
    width:200px
`;

const Label = styled.label`
	text-transform: uppercase;
	color: #afaca0;
	margin-bottom: 10px;
`;

const Input = styled.input`
	border: none;
	outline: none;
	border-bottom: 2px solid #f6425b;
	margin-bottom: 10px;
`;


const Form = () => {
    const [text, setText] = useState({
        name: "",
        cardNo: "",
        expiryMonth: "",
        expiryYear:"",
        cvc:""
   });

    const handleInput = (e) => {
        setText(e.target.value);
        // alert(e.target.value);
      };

    	return (
		<FormDiv>
			<h3>Payment Details: </h3>
			<CardForm>
				{/* Cardholder name */}
				<Label htmlFor='name'>Cardholder Name</Label>
				<Input type='text' value={text.name} name='name' id='name' onChange={handleInput}  />

				{/* Card Number */}
				<Label htmlFor='cardNo'>Card Number</Label>
				<Input type='number' value={text.cardNo} name='cardNo' id='cardNo' onChange={handleInput} />

				{/* Expiry Month */}
				<Label htmlFor='expiryMonth'>Expiry Month</Label>
				<Input type='number' value={text.expiryMonth}  name='expiryMonth' id='expiryMonth' onChange={handleInput}  />

				{/* Expiry Year */}
				<Label htmlFor='expiryYear'>Expiry Year</Label>
				<Input type='number' value={text.expiryYear}  name='expiryYear' id='expiryYear' onChange={handleInput} />

				{/* CVC  */}
				<Label htmlFor='cvc'>CVC</Label>
				<Input type='number' name='cvc' id='cvc'value={text.cvc}    onChange={handleInput}  />
                <Submit>SUBMIT</Submit>
			</CardForm>
		</FormDiv>
	);
};

export default Form;