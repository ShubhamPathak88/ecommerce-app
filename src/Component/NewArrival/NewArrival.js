import React, { useState } from 'react'
import './NewArrival.css'

import b1 from '../../assets/images/blog/b1.jpg'

import arrivals1 from '../../assets/images/collection/arrivals1.png'
import arrivals2 from '../../assets/images/collection/arrivals2.png'
import arrivals3 from '../../assets/images/collection/arrivals3.png'
import arrivals4 from '../../assets/images/collection/arrivals4.png'
import arrivals5 from '../../assets/images/collection/arrivals5.png'
import arrivals6 from '../../assets/images/collection/arrivals6.png'
import arrivals7 from '../../assets/images/collection/arrivals7.png'
import arrivals8 from '../../assets/images/collection/arrivals8.png'

import SingleNewArrival from '../SingleNewArrival/SingleNewArrival'
import { NewArrivalObject } from '../Feature/Object'
const NewArrival = () => {
	
	const[data,setData]=useState([])

    const AddItem = (id)=>{
        let newData = NewArrivalObject.filter((item)=>{
            return item.id==id
        })
		setData([...data,newData[0]])	
    }
   
  return<>
  <section id="new-arrivals" className="new-arrivals">
			<div className="container">
				<div className="section-header">
					<h2>new arrivals</h2>
				</div>
				<div className="new-arrivals-content">
					<div className="row">
						{NewArrivalObject.map((item, key)=><SingleNewArrival onclick={AddItem} item={item}/>)}
					</div>
				</div>
				
			</div>
		</section>
		
  
  </>
}

export default NewArrival