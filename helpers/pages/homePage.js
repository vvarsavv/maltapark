'use strict';

const {I, domains} = inject();

module.exports = {

    images: {
        logo: '[class="page-logo"]',
    },

    buttons: {
        signUp: '[href*="signup"]',
        login: '[href*="login"]'

    },

    searchArea: {
        dropdown: '[class*="transition"]',
        dropdownDataValues: (value) => `[data-value="${value}"`,
        searchSelector: '[id="searchselector"]',
        textField: '[name="search"]',
        submitButton: '[type="submit"]'
    },

    /**
     * checks for logo and buttons in page
     */
    verifyLogoHomePage () {
        I.amOnPage(domains.maltaPark_url.domain);
        I.waitForElement(this.images.logo);
        I.seeElement(this.images.logo);
        I.seeElement(this.buttons.signUp);
        I.seeElement(this.buttons.login);
    },

    /**
     * search for a classified
     * @param classifiedsDropdown {String}
     * @param dataValue {String}
     * @param searchFor {String}
     */
    searchClassifieds(classifiedsDropdown, dataValue, searchFor ) {
        this.verifyLogoHomePage();
        I.click(this.searchArea.searchSelector);
        I.click(this.searchArea.dropdownDataValues(dataValue));
        I.waitForText(classifiedsDropdown);
        I.see(classifiedsDropdown);
        I.fillField(this.searchArea.textField, searchFor);
        I.click(this.searchArea.submitButton);
    },
}