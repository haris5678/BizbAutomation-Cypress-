class UploadProduct{
    elements={

        Navigate_to_product:() => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').contains('Products'),
        Navigate_to_UploadProduct:() => cy.get('[href="/dashboard/uploadproductdetail"] > .MuiButtonBase-root').contains('Upload Product'),
        //Url:() => cy.visit('https://seller.bizb.store/dashboard/uploadproductdetail'),
        ProductName:() => cy.get(':nth-child(2) > .MuiInputBase-root'),
        Category_dropdown:() => cy.get('.css-6py1s3 > .MuiInputBase-root > #demo-simple-select'),
        Wait_1000:() => cy.wait(1000),
        Wait_4000:() => cy.wait(4000),
        Wait_6000:() => cy.wait(6000),
        First_option_Category:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Slider_first_option:() => cy.get('[aria-hidden="true"][data-index="1"]'),
        Slider_third_option:() => cy.get('[aria-hidden="true"][data-index="3"]'),
        Fabric_dropdown:() => cy.get('.css-1sbba4m > .MuiInputBase-root > #demo-simple-select'),
        First_option_Fabric:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Orignal_price:() => cy.get(':nth-child(11) > .MuiInputBase-root').click({ force: true }),
        Sale_price:() => cy.get(':nth-child(13) > .MuiInputBase-root').click({ force: true }),
        First_image:() => cy.get('input[type="file"]').eq(0).attachFile('image1.jpg', { subjectType: 'input' }),
        Second_image:() => cy.get('input[type="file"]').eq(1).attachFile('image2.jpg', { subjectType: 'input' }),
        Third_image:() => cy.get('input[type="file"]').eq(2).attachFile('image3.jpg', { subjectType: 'input' }),
        Fourth_image:() => cy.get('input[type="file"]').eq(3).attachFile('image4.jpg', { subjectType: 'input' }),
        First_HD_image:() => cy.get('input[type="file"]').eq(0).attachFile('HD_image_1.jpg', { subjectType: 'input' }),
        Second_HD_image:() => cy.get('input[type="file"]').eq(1).attachFile('HD_image_2.jpg', { subjectType: 'input' }),
        Third_HD_image:() => cy.get('input[type="file"]').eq(2).attachFile('HD_image_3.jpg', { subjectType: 'input' }),
        Fourth_HD_image:() => cy.get('input[type="file"]').eq(3).attachFile('HD_image_4.jpg', { subjectType: 'input' }),
        Description:() => cy.get('.css-xpket9 > .MuiInputBase-root'),
        //size section
        //*********************************** */
        Size:() => cy.get(':nth-child(30) > .MuiButtonBase-root > .PrivateSwitchBase-input'), //samll
        // Size:() => cy.get(':nth-child(27) > .MuiButtonBase-root > .PrivateSwitchBase-input'), //medium
        // Size:() => cy.get(':nth-child(28) > .MuiButtonBase-root > .PrivateSwitchBase-input'), //large
        // Size:() => cy.get(':nth-child(28) > .MuiButtonBase-root > .PrivateSwitchBase-input'), //extra large
        //*********************************** */
        Style_dropdown:() => cy.get(':nth-child(1) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Style:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Occasion_dropdown:() => cy.get(':nth-child(2) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Occasion:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Pattern_dropdown:() => cy.get(':nth-child(3) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Pattern:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Brand_dropdown:() => cy.get(':nth-child(4) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Brand:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Collection_dropdown:() => cy.get(':nth-child(5) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Collection:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Seasonal_dropdown:() => cy.get(':nth-child(6) > .w-full > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select'),
        First_option_Seasonal:() => cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        Terms_condition:() => cy.get(':nth-child(5) > .col-span-9 > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input'),
        Submit_button:() => cy.get('.col-span-9 > .flex > .MuiButtonBase-root')
        //Category:() => 
    }
    Valid_Product_Upload(){
        this.elements.Navigate_to_product().click()
        this.elements.Navigate_to_UploadProduct().click()
        this.elements.ProductName().type('Example Product')
        this.elements.Category_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Category().click()
        this.elements.Slider().click()                      //Once Used
        this.elements.Fabric_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Fabric().click()
        this.elements.Orignal_price().type('50')
        this.elements.Sale_price().type('37')
        this.elements.First_image()
        this.elements.Wait_4000()
        this.elements.Second_image()
        this.elements.Wait_4000()
        this.elements.Third_image()
        this.elements.Wait_4000()
        this.elements.Fourth_image()
        this.elements.Wait_4000()
        this.elements.Description().type('Test description')
        this.elements.Size().click()
        this.elements.Style_dropdown().click()
        this.elements.First_option_Style().click()
        this.elements.Occasion_dropdown().click()
        this.elements.First_option_Occasion().click()
        this.elements.Pattern_dropdown().click()
        this.elements.First_option_Pattern().click()
        this.elements.Brand_dropdown().click()
        this.elements.First_option_Brand().click()
        this.elements.Collection_dropdown().click()
        this.elements.First_option_Collection().click()
        this.elements.Seasonal_dropdown().click()
        this.elements.First_option_Seasonal().click()
        this.elements.Terms_condition().click()
        this.elements.Submit_button().click()

    }

    Minimum_Valid_Data(){
        this.elements.Navigate_to_product().click()
        this.elements.Navigate_to_UploadProduct().click()
        this.elements.ProductName().type('Test_Product2')
        this.elements.Category_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Category().click()
        this.elements.Slider_third_option().click() 
        this.elements.Wait_1000()  
        this.elements.Fabric_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Fabric().click()
        this.elements.Orignal_price().type('50')
        this.elements.Sale_price().type('37')
        this.elements.First_image()
        this.elements.Wait_4000()
        this.elements.Second_image()
        this.elements.Wait_4000()
        this.elements.Third_image()
        this.elements.Wait_4000()
        this.elements.Fourth_image()
        this.elements.Wait_4000()
        this.elements.Description().type('Minimum Valid Data')
        this.elements.Size().click() 
        this.elements.Terms_condition().click()
        this.elements.Submit_button().click()            

    }


    Maximum_Image_Size(){
        this.elements.Navigate_to_product().click()
        this.elements.Navigate_to_UploadProduct().click()
        this.elements.ProductName().type('Test_Product3')
        this.elements.Category_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Category().click()
        this.elements.Slider_third_option().click() 
        this.elements.Wait_1000()  
        this.elements.Fabric_dropdown().click()
        this.elements.Wait_1000()
        this.elements.First_option_Fabric().click()
        this.elements.Orignal_price().type('50')
        this.elements.Sale_price().type('37')
        this.elements.First_HD_image()
        this.elements.Wait_6000()
        this.elements.Second_HD_image()
        this.elements.Wait_6000()
        this.elements.Third_HD_image()
        this.elements.Wait_6000()
        this.elements.Fourth_HD_image()
        this.elements.Wait_6000()
        this.elements.Description().type('Minimum Valid Data')
        this.elements.Size().click() 
        this.elements.Terms_condition().click()
        this.elements.Submit_button().click()            

    }
    

}
module.exports = new UploadProduct();