require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function($) {
    var aRow = $('.dashboard-row')[1];
    var bRow = $('.dashboard-row')[3];
    var cRow = $('.dashboard-row')[4];
    var aPanelCells = $(aRow).children('.dashboard-cell');
    var bPanelCells = $(bRow).children('.dashboard-cell');
    var cPanelCells = $(cRow).children('.dashboard-cell');
    // Adjust the cells' width
    $(aPanelCells[0]).css('width', '20%');
    $(aPanelCells[1]).css('width', '80%');  
    $(bPanelCells[0]).css('width', '20%');
    $(bPanelCells[1]).css('width', '80%'); 
    $(cPanelCells[0]).css('width', '20%');
    $(cPanelCells[1]).css('width', '80%'); 
});