const {homePage, classifiedsList, searchResultsPage} = inject();

Feature('MaltaPark: Search classifieds test scenarios');

Scenario('Search for computer books in the books classifieds', async function () {
    homePage.searchClassifieds('Books', classifiedsList.all_classifieds.books, 'computer');
    searchResultsPage.searchSection('computer');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');

Scenario('Search for statue antiques in the antiques classifieds', async function () {
    homePage.searchClassifieds('Antiques', classifiedsList.all_classifieds.antiques, 'statue');
    searchResultsPage.searchSection('statue');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');

Scenario('Search for ervin cremona art in the art classifieds', async function () {
    homePage.searchClassifieds('Art', classifiedsList.all_classifieds.art, 'ervin cremona');
    searchResultsPage.searchSection('ervin cremona');
    await searchResultsPage.grabItemDetails();
}).tag('@find-books');