import React from 'react'
import { NewArrivalObject } from '../Feature/Object'
const SingleNewArrival = (props) => {
  return (
    <>
    <div className='col-lg-3'>
        <div className="single-new-arrival">
            <div className="single-new-arrival-bg">
                <img src={props.item.image} alt="new-arrivals images"/>
                <div className="single-new-arrival-bg-overlay"></div>
                
                
                {props.item.sales? 
                <div className="sale bg-1 text-light">{props.item.sales}</div>:""}




                <div className="new-arrival-cart">
                    
                    <p>
                        <span className="lnr lnr-cart"></span>
                        <a href="#">add <span>to </span> cart</a>
                    </p>
                    <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart"></span>
                        <span className="lnr lnr-frame-expand"></span>
                    </p>
                </div>
            </div>

            <h4><a href="#">{props.item.name}</a></h4>
            <p className="arrival-product-price">{props.item.price}</p>
        </div>
        </div>
    </>
  )
}

export default SingleNewArrival