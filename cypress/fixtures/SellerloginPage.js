class SellerloginPage{
    elements={
        Url:() => cy.visit('https://seller.bizb.store/dashboard'),
        email:() => cy.get('input[type="email"]'),
        password:() => cy.get('input[type="password"]'),
        login:() => cy.get('.MuiFormControl-fullWidth > .MuiButtonBase-root > .MuiTypography-root'),
        error_message:() => cy.get('.css-j40lo2'),
        require_email_error:() => cy.get('.css-dygpgh'),
        require_password_error:() => cy.get('.css-19mos14')

    }

//Log In with Valid Credentials
    Valid_Login(){
        this.elements.Url()
        this.elements.email().type('haris.anwar@codistan.org')
        this.elements.password().type('Check@1122')
        this.elements.login().contains('Login').click()
    }

//Log In with Invalid Email and valid Password   
    Invalid_Email(){
        this.elements.Url()
        this.elements.email().type('haris.anwarcodistan.org')
        this.elements.password().type('Check@1122')
        this.elements.login().contains('Login').click()
        //this.elements.error_message().contains('User not found')
        this.elements.error_message().contains('Invalid email format')         // invalid error message
    }

// Log in with Invalid Password and valid Email
    Invalid_Password(){
        this.elements.Url()
        this.elements.email().type('haris.anwar@codistan.org')
        this.elements.password().type('1122')
        this.elements.login().contains('Login').click()
        this.elements.error_message().contains('Incorrect password')
    }

// Log in with Missing Email and Password
    Empty_Fields(){
        this.elements.Url()
        //this.elements.email().type('')
        //this.elements.email().click()
        //this.elements.password().type('')
        //this.elements.password().click()
        this.elements.login().contains('Login').click()
        this.elements.require_email_error().contains('Email is required')
        this.elements.require_password_error().contains('Password is required')
        this.elements.error_message().contains('Mandatory(*) fields are required')              //check
    }

// Log in with Missing Email and Valid Password
    Missing_Email(){
        this.elements.Url()
        //this.elements.email().type('')
        this.elements.password().type('Check@1122')
        this.elements.login().contains('Login').click()
        this.elements.require_email_error().contains('Email is required')
        //this.elements.error_message().contains('User not found')
        this.elements.error_message().contains('Mandatory(*) fields are required')  //check
    }

// Log in with Missing Password and valid Email
    Missing_Password(){
        this.elements.Url()
        this.elements.email().type('haris.anwar@codistan.org')
        //this.elements.password().type('')
        this.elements.login().contains('Login').click()
        //this.elements.error_message().contains('User not found')
        this.elements.error_message().contains('Incorrect password')     //needs to verify
        //this.elements.require_password_error().contains('Password is required')
        this.elements.require_password_error().contains('Mandatory(*) fields are required')

    }

//Invalid Email and Password
    Invalid_Login(){
        this.elements.Url()
        this.elements.email().type('harisanwar@codistan.org')
        this.elements.password().type('Check1122')
        this.elements.login().contains('Login').click()
        this.elements.error_message().contains('User not found')
    }

// Miss Email and Invalid Password
    Missing_Email_Invalid_Password(){
        this.elements.Url()
        //this.elements.email().type('')
        //this.elements.email().click()
        this.elements.password().type('Check@22')
        this.elements.login().contains('Login').click()
        this.elements.require_email_error().contains('Email is required')
        this.elements.error_message().contains('Mandatory(*) fields are required')
        //this.elements.error_message().contains('User not found')
    }

// Miss Password and Invalid Email
    Missing_Password_Invalid_Email(){
        this.elements.Url()
        this.elements.email().type('haris@codistan.org')
        //this.elements.password().type('')
        this.elements.login().contains('Login').click()
        this.elements.require_password_error().contains('Password is required')
        //this.elements.error_message().contains('User not found')
        this.elements.error_message().contains('Mandatory(*) fields are required')
        
    }
    

}

module.exports = new SellerloginPage();