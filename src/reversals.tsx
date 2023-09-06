import React from 'react'
import ReversalRow from './reversalRow'
import { Reversal } from './reversal';

export default function Reversals() {
    function getData(): Reversal[] { // It would obviously paginated and/or we need to use something like generators
        return [
            new Reversal("Emma Smith", "US", "1/2/2020", "phone", "1/2/2021", "06:00", "1/2/2021", "09:00"),
            new Reversal("Benjamin Johnson", "Europe", "12/2/2020", "web app", "2/1/2021", "06:30", "1/2/2021", "23:00"),
            new Reversal("Olivia Davis", "Europe", "1/2/2020", "web app", "2/2/2021", "13:00", "2/2/2021", "20:00"),
            new Reversal("Ethan Anderson", "US", "1/11/2011", "web app", "2/1/2021", "13:00", "2/2/2021", "16:00"),
            new Reversal("Sophia Wilson", "US", "2/1/2020", "phone", "2/1/2021", "22:00", "2/2/2021", "5:00"),
            new Reversal("Liam Martinez", "Europe", "1/1/2020", "web app", "1/1/2021", "11:00", "11/1/2021", "12:00")
        ]
    }

    return (
         <table border={1}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Customer Location</th>
                <th>Sign up date</th>
                <th>Request Source</th>
                <th>Investment Date</th>
                <th>Investment Time</th>
                <th>Refund Request Date</th>
                <th>Refund Request Time</th>
                <th>Approved or Denied</th>
            </tr>
            </thead>
            <tbody>
                {getData().map((row, i) => (
                    <ReversalRow key={i} item={row} />
                ))}
            </tbody>
         </table>
    )
}