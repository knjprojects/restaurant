
import React, { Component } from 'react';
type Props = {}

import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	
	render() {
		let images=['https://lh3.googleusercontent.com/p/AF1QipOcWZr9ZP5hMrzQnnfW_Mq1iQo3dGV9gfVgQ1CU=s0','https://lh3.googleusercontent.com/p/AF1QipOT3UBE168bnbFvIkiOnD65EwxNcbiDRx14thF3=s0']
		return (
			<div className='themed p-6'>
			
				<Carousel showThumbs={false}>
				{
						images?.map((img) => { 
							return (
								<div key={img}>
									<Image key={img} src={img} alt='' width={200} height={200} />
								</div>);
						})}
			</Carousel>
			</div>
		);
	}
};
