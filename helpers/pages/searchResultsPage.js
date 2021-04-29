'use strict';

const {I, homePage} = inject();

module.exports = {

    results: {
        resultsTextElement: '[class="page-searchsummary"]',
        featuredBox: '[class*="item featured"]',
        classifiedsBox: '[class*="classifieds"]',
        dataItemID: '[name="ItemID"]',
    },

    classifiedItem: {
        classified: (itemId) => `//*[@data-itemid="${itemId}"]`,
        classifiedHeader: '//*[@class="header"]',
        classifiedPrice: '//*[@class="price"]'
    },

    text: {
        noResults: 'No results found.'
    },

    /**
     * checks for logo and buttons in page
     */
    verifySearchResultsPage () {
        I.waitForElement(homePage.images.logo, 5);
        I.seeElement(homePage.images.logo);
        I.seeElement(homePage.buttons.signUp);
        I.seeElement(homePage.buttons.login);
    },

    /**
     * checks for search results
     * @param searchResult {String}
     */
    searchSection(searchResult) {
        this.verifySearchResultsPage();
        I.see(`You searched for: ${searchResult}`);
    },

    /**
     * grabs item's text and price by choosing the first featured item
     */
    grabItemDetails: async function () {
        const numOfElements = await I.grabNumberOfVisibleElements(this.results.featuredBox);

        if (numOfElements === 0) {
            I.waitForText(this.text.noResults)
            I.see(this.text.noResults);
        }

        else {
            const grabItemIds = await I.grabValueFromAll(`${this.results.classifiedsBox} ${this.results.dataItemID}`);
            const firstFeaturedItem = grabItemIds.shift();

            I.scrollTo(`${this.classifiedItem.classified(firstFeaturedItem)} ${this.classifiedItem.classifiedHeader}`);
            const grabFeaturedText = await I.grabTextFrom(`${this.classifiedItem.classified(firstFeaturedItem)} ${this.classifiedItem.classifiedHeader}`);
            const grabFeaturedPrice = await I.grabTextFrom(`${this.classifiedItem.classified(firstFeaturedItem)} ${this.classifiedItem.classifiedPrice}`);
            I.say(`First item title: ${grabFeaturedText}, priced @ ${grabFeaturedPrice}`);
        }
    }
}