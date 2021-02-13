import React from 'react';

import './custom-button.styles.scss';

// import CustomButtonContainer from './custom-button.styles';

const CustomButton  = //se pueden quitar todas las props para user css component he borrado isGoogleSignIn para que vaya con component css
({children, inverted, isGoogleSignIn, ...otherProps}) =>(
    <button className = {`${isGoogleSignIn ? 'google-sign-in':''} ${inverted ? 'inverted':''} custom-button`} {...otherProps}>
        {children}
    </button>
    // <CustomButtonContainer{...otherProps}>
    //     {children}
    // </CustomButtonContainer>
)

export default CustomButton;