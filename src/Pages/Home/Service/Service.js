import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} =service;
    const navigate = useNavigate();
    const navigateToServicesDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt='img'/>
            <h2>{name}</h2>
            <p>price: {price}</p>
            <p><small>description: {description}</small></p>
            <button onClick={ () => navigateToServicesDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;