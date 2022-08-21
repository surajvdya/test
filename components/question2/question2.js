import React, { useState } from "react";
import { Col, Row, Input } from "reactstrap";

function Questions2({ formData, setFormData, setStep }) {
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');

    // program to check if a number is prime or not

    // take input from the user
    const Check = event => {
        setNumber(event.target.value);
        const number = event.target.value;
        let isPrime = true;

        // check if number is equal to 1
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }

        // check if number is greater than 1
        else if (number > 1) {

            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                alert(`${number} is a prime number`);
            } else {
                alert(`${number} is a not prime number`);
            }
        }

        // check if number is less than 1
        else {
            alert("The number is not a prime number.");
        }
    }


    return (
        <>
            <div className="questions">
                <h2>Write a method to return if a given number is a prime number.</h2>
                <Input type="number" name="number" onChange={Check} value={number} />
                {text}
            </div>
        </>
    );
}
export default Questions2;
