const {I, homePage, classifiedsList, searchResultsPage} = inject();

Feature('find books');

Scenario('Maltapark: Search for computer books in the books classifieds', async function () {
    homePage.searchClassifieds('Books', classifiedsList.all_classifieds.books, 'computer');
    searchResultsPage.searchSection('computer');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');

Scenario('Maltapark: Search for statue antiques in the antiques classifieds', async function () {
    homePage.searchClassifieds('Antiques', classifiedsList.all_classifieds.antiques, 'statue');
    searchResultsPage.searchSection('statue');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');