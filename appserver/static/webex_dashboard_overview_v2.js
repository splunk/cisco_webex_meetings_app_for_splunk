require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function($) {
    var aRow = $('.dashboard-row')[0];
    var aPanelCells = $(aRow).children('.dashboard-cell');
    // Adjust the cells' width
    $(aPanelCells[0]).css('width', '33.3%');
    $(aPanelCells[1]).css('width', '66.6%');  
});