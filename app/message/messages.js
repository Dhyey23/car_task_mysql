/* eslint-disable no-undef */
const messages = {registeredSuccess: { messaege: 'You are registered successfully' },
    alreadyRegisteredUser: { messaege: 'User Already registered' },
    loginSuccess: { messaege: 'You are logged in successfully' },
    loginEmailNotRegistered: { messaege: 'Email not registered' },
    wrongpass: { messaege: 'Password doesnt match' },
    emailReq: { messaege: 'Email id is required' },
    passReq: { messaege: 'Password is required' },
    fistNameReq: { messaege: 'Firstname required' },
    lastNameReq: { messaege: 'Lastname required' },
    updatedUsername: { messaege: 'Username successfully updated' },
    updatedPassword: { messaege: 'Password successfully updated' },
    process: { messaege: 'you can edit now' },
    invalidCredentials: { messaege: 'Invalid credentials' },
    doNotChangeEmail: { messaege: 'Cannot change email and password' },
    changePass: { messaege: 'Password changed successfully' },
    orderSucess: { messaege: 'Order placed successfully' },
    unAuthorized: { messaege: 'You are unauthorized!' },
    alreadyLoggedin: { messaege: 'Already logged in' },
    productRegistered: { messaege: 'Already Registered Product' },
    routeNotFound: { message: 'Route Not Found!' },
    getBlogs: { message: 'The Blogs are here' },
    registerSucess: { message: 'Registered succesfully' },
    updateBlogs: { message: 'The Blogs are updated' },
    deletBlogs:{ message: 'The Blogs are deleted'},
    setBlogs: { message: 'The Blogs are created' },
    pleaseAddText: { message: 'Please add text ' },
    titleRequired:{message:'Title is required'},
    desciptionRequired:{message:'Description is required'},
    blogNotFound:{message:'There is no blog Presnt with specified Id'},
    userNamePattern:{message:'The pattern for username should be: user_123 or user.124'},
    emailPattern:{message:'Please enter a valid email like user123@gmail.com'},
    validMobile:{message:'Please enter valid mobile with country code'},
    validGender:{message:'Please enter a valid gender, the options are 1.Male 2.Female 3.Others'},
    mandatoryFields:{message:'Please add all fields'},
    duplicateTitle:{message:'You cannot use same title please change title name'},
    userNotFound:{message:'User not found'},
    brandIDNotFound:{message:'Brand Id not found'},
    carIDNotFound:{message:'Car Id not found'},
    sellerIDNotFound:{message:'seller Id not found'},
    IDNotFound:{message:'Id not exist'},



    bothIdDiff:{message:'The id you requested in params and id of email you provided are not same'}
}

module.exports = messages 
