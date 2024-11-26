const fields = {
    duns_number: `
        <div class="form-group">
            <label id="label-dunsNumber" for="dunsNumber">DUNS Number <span class="required">*</span></label>
            <input type="text" id="dunsNumber" maxlength="9" required placeholder="Enter DUNS Number (9 digits)">
        </div>
    `,
    supplier_name: `
        <div class="form-group">
            <label id="label-country" for="country">Country <span class="required">*</span></label>
            <input type="text" id="country" required placeholder="Enter Country">
        </div>
        <div class="form-group">
            <label id="label-supplierName" for="supplierName">Supplier Name <span class="required">*</span></label>
            <input type="text" id="supplierName" required placeholder="Enter Supplier Name (letters and digits)">
        </div>
    `,
    business_id: `
        <div class="form-group">
            <label id="label-country" for="country">Country <span class="required">*</span></label>
            <input type="text" id="country" required placeholder="Enter Country">
        </div>
        <div class="form-group">
            <label id="label-businessId" for="businessId">Business ID <span class="required">*</span></label>
            <input type="text" id="businessId" required placeholder="Enter Business ID">
        </div>
    `,
    email_website: `
        <div class="form-group">
            <label id="label-country" for="country">Country <span class="required">*</span></label>
            <input type="text" id="country" required placeholder="Enter Country">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" required placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="wbesite">Website</label>
            <input type="text" id="website" required placeholder="Enter website">
        </div>
    `,
    phone_number: `
        <div class="form-group">
            <label id="label-country" for="country">Country <span class="required">*</span></label>
            <input type="text" id="country" required placeholder="Enter Country">
        </div>
        <div class="form-group">
            <label id="label-phoneNumber" for="phoneNumber">Phone Number <span class="required">*</span></label>
            <input type="text" id="phoneNumber" required placeholder="Enter Phone Number">
        </div>
    `
};