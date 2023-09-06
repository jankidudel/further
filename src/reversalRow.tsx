import React from 'react'

export default function ReversalRow({item}) {
    return <tr>
        <td>{ item.name }</td>
        <td>{ item.customerLocation }</td>
        <td>{ item.signupDate }</td>
        <td>{ item.requestSource }</td>
        <td>{ item.investmentDate }</td>
        <td>{ item.investmentTime }</td>
        <td>{ item.refundRequestDate }</td>
        <td>{ item.refundRequestTime }</td>
        <td><strong>{ item.status }</strong></td>
    </tr>
}