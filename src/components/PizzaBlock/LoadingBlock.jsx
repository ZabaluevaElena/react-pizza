import React from 'react';
import ContentLoader from "react-content-loader"

const LoadingBlock = () => {

    return (
  
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="140" cy="133" r="132" /> 
    <rect x="8" y="279" rx="0" ry="0" width="265" height="19" /> 
    <rect x="4" y="316" rx="0" ry="0" width="4" height="0" /> 
    <rect x="11" y="317" rx="6" ry="6" width="262" height="86" /> 
    <rect x="11" y="422" rx="0" ry="0" width="88" height="31" /> 
    <rect x="139" y="416" rx="21" ry="21" width="129" height="42" />
  </ContentLoader>
  )

}



export default LoadingBlock;