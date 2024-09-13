export class ResponseMessage {

    public static Company = {
        companyRegistered: 'Company is registered successfully',
        companyNotRegistered: 'Company is not registered',

    }

    public static User = {
        notRegistered: 'User not registered',
        successfullyRegistered: 'User registered successfully',
        emailNotFound: 'Email not found',
        incorrectPassword: 'Password is incorrect',
        loginSuccessfull: 'Login Successfull',
        incorrectCredentials: 'Email or Password is invald',
        loginNotSuccessfull: 'Login not successful'
    }

    public static Validation = {
        error: 'Validation error',
        enterValidEmail: 'Please enter a valid email address',
        firstNameIsRequired: 'First name is required',
        lastNameIsRequired: 'Last name is required',
        emailIsRequired: 'Email is required',
        passwordLength: 'Password must be at least 6 characters long',
        passwordIsRequired: 'Password is required'
    }

    public static Errors = {
        defaultMessage: 'Something went wrong',
        authenticationMessage: 'Authentication error',
        recordNotFound: 'Record not found',
        internalServerError: 'Internal server error',
        unauthorized: 'Unauthorized',
        forbidden: 'Forbidden',
        noTokenProvided: 'Access denied. No token provided.',
        invalidToken: 'Invalid token.'
    }


}