import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import React from 'react'

const HomeSkeleton = ({count}) => {
  return (
   <div className='mx-5'>
    <Skeleton className='me-3 my-3' inline="true" count={count} width={400} height={200}>
     
      
      </Skeleton> 
    
    

   </div>
  )
}

export default HomeSkeleton
