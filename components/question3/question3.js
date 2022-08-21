import React from "react";

function Question3() {
    const ContentDisplay = () => {
        const arr = ['20','120','111','215','54','78'];
        let max = -Infinity, result = -Infinity;

        for (const value of arr) {
          const nr = Number(value)
      
          if (nr > max) {
            [result, max] = [max, nr] // save previous max
          } else if (nr < max && nr > result) {
            result = nr; // new second biggest
          }
        }
      
        return result;

    }
    return (
        <>
            <div className="questions">
                <h2>Write a method to return the second largest number in an array. ('20','120','111','215','54','78')</h2>
                <h3><b>Answer: </b><ContentDisplay /></h3>
            </div>

        </>
    );
}
export default Question3;
