'use strict';

const {I, homePage} = inject();

module.exports = {

    results: {
        resultsTextElement: '[class="page-searchsummary"]',
        featuredBox: '[class*="item featured"]',
        dataItemID: '[name="ItemID"]',
    },

    featuredItem: {
        featured: (itemId) => `//*[@data-itemid="${itemId}"]`,
        featuredHeader: '//*[@class="header"]',
        featuredPrice: '//*[@class="price"]'
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
        const grabItemIds = await I.grabValueFromAll(this.results.dataItemID);
        const firstFeaturedItem = grabItemIds.shift();
        const grabFeaturedText = await I.grabTextFrom(`${this.featuredItem.featured(firstFeaturedItem)} ${this.featuredItem.featuredHeader}`);
        const grabFeaturedPrice = await I.grabTextFrom(`${this.featuredItem.featured(firstFeaturedItem)} ${this.featuredItem.featuredPrice}`);

        I.say(`First item title: ${grabFeaturedText}, priced @ ${grabFeaturedPrice}`);

    }
}