import React from 'react'
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';//for animations
type Props = {}

const ProductShimmer = () => {
   return(
        <div className='my-awesome-placeholder'>
            <RectShape color='blue' style={{ width: 30, height: 80 }} />
            <TextBlock rows={7} color='yellow' />
        </div>
    );
}


export default ProductShimmer