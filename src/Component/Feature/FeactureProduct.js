import React from 'react'
import 	'./FeatureProduct.css'
import f1 from '../../assets/images/features/f1.jpg';
import f2 from '../../assets/images/features/f2.jpg';
import f3 from '../../assets/images/features/f3.jpg';
import f4 from '../../assets/images/features/f4.jpg'

const FeactureProduct = () => {
  return<>
  
		
  <section id="feature" className="feature">
			<div className="container">
				<div className="section-header">
					<h2>featured products</h2>
				</div>
				<div className="feature-content">
					<div className="row">
						<div className="col-sm-3">
							<div className="single-feature">
								<img src={f1} alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">designed sofa</a></h3>
									<h5>$160.00</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-feature">
								<img src={f2} alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">dinning table </a></h3>
									<h5>$200.00</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-feature">
								<img src={f3} alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">chair and table</a></h3>
									<h5>$100.00</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-feature">
								<img src={f4} alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">modern arm chair</a></h3>
									<h5>$299.00</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
  </>
}

export default FeactureProduct