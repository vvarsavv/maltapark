const {homePage, classifiedsList, searchResultsPage} = inject();

Feature('Search classifieds test scenarios');

Scenario('MaltaPark: Search for computer books in the books classifieds', async function () {
    homePage.searchClassifieds('Books', classifiedsList.all_classifieds.books, 'computer');
    searchResultsPage.searchSection('computer');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');

Scenario('MaltaPark: Search for statue antiques in the antiques classifieds', async function () {
    homePage.searchClassifieds('Antiques', classifiedsList.all_classifieds.antiques, 'statue');
    searchResultsPage.searchSection('statue');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');