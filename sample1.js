// var orders = [
//   { OrderID: 10248, CustomerID: "VINET", OrderDate: new Date(1996, 6, 3), ShippedDate: new Date(1996, 6, 15), Freight: 32.38, ShipCountry: "France", IsShipped: true },
//   { OrderID: 10249, CustomerID: "TOMSP", OrderDate: new Date(1996, 6, 4), ShippedDate: new Date(1996, 6, 9), Freight: 11.61, ShipCountry: "Germany", IsShipped: true },
//   { OrderID: 10250, CustomerID: "HANAR", OrderDate: new Date(1996, 6, 7), ShippedDate: new Date(1996, 6, 11), Freight: 65.83, ShipCountry: "Brazil", IsShipped: false },
//   { OrderID: 10251, CustomerID: "VICTE", OrderDate: new Date(1996, 6, 7), ShippedDate: new Date(1996, 6, 14), Freight: 41.34, ShipCountry: "France", IsShipped: true },
//   { OrderID: 10252, CustomerID: "SUPRD", OrderDate: new Date(1996, 6, 8), ShippedDate: new Date(1996, 6, 10), Freight: 51.3, ShipCountry: "Belgium", IsShipped: false },
//   { OrderID: 10253, CustomerID: "HANAR", OrderDate: new Date(1996, 6, 9), ShippedDate: new Date(1996, 6, 15), Freight: 58.17, ShipCountry: "Brazil", IsShipped: true },
//   { OrderID: 10254, CustomerID: "CHOPS", OrderDate: new Date(1996, 6, 10), ShippedDate: new Date(1996, 6, 22), Freight: 22.98, ShipCountry: "Switzerland", IsShipped: true },
//   { OrderID: 10255, CustomerID: "RICSU", OrderDate: new Date(1996, 6, 11), ShippedDate: new Date(1996, 6, 14), Freight: 148.33, ShipCountry: "Switzerland", IsShipped: true },
//   { OrderID: 10256, CustomerID: "WELLI", OrderDate: new Date(1996, 6, 14), ShippedDate: new Date(1996, 6, 16), Freight: 13.97, ShipCountry: "Brazil", IsShipped: true },
//   { OrderID: 10257, CustomerID: "HILAA", OrderDate: new Date(1996, 6, 15), ShippedDate: new Date(1996, 6, 21), Freight: 81.91, ShipCountry: "Venezuela", IsShipped: true }
// ];
// var filterData = new ej.data.DataManager(orders).executeLocal(
//   // new ej.data.Query().where('CustomerID', 'equal', 'Résumé', true, true)
//   // Checking OrderID in an array
//   // new ej.data.Query().where('OrderID', 'notin', [10248, 10249], true, true)
//   // new ej.data.Query().where('IsShipped', 'notin', [false], false, false)

//   // // Case-insensitive, ignore accents for CustomerID
//   // new ej.data.Query().where('CustomerID', 'notin', ['Résumé', 'Café'], true, true)

//   // // Case-sensitive, ignore accents for CustomerID
//   // new ej.data.Query().where('CustomerID', 'in', ['Résumé', 'Café'], false, true)

//   // // Case-insensitive, do not ignore accents for ShipCountry
//   // new ej.data.Query().where('ShipCountry', 'in', ['España', 'México'], true, false)

//   // // 'notin' check for ShipCountry
//   // new ej.data.Query().where('ShipCountry', 'in', ['FrancE', 'Germany'], true, false)
//   new ej.data.Query().where('OrderDate', 'in', [new Date('07/15/1996'), new Date('07/10/1996'), , new Date('07/09/1996')], true, false)
//   // new ej.data.Query().where('ShippedDate', 'in', [new Date('07/15/1996'), new Date('07/10/1996'), , new Date('07/09/1996')], false, false)
 
//   // // Checking if OrderDate is in a specific set
//   // new ej.data.Query().where('OrderDate', 'in', [new Date(2023, 0, 1), new Date(1996, 7, 15)], false, false)

//   // // Checking if OrderDate is not in a specific set
//   // new ej.data.Query().where('OrderDate', 'notin', [new Date(2023, 0, 1), new Date(2023, 5, 15)], false, false)
  
//   // // Checking Freight charges in a specific set
//   // new ej.data.Query().where('Freight', 'in', [32.45, 50.00], false, false)

//   // // Checking if Freight charges are not in a specific set
//   // new ej.data.Query().where('Freight', 'notin', [10.99, 20.00], false, false)

// );


var ordersDetails = [
  { id: 10001, customerId: "ALFKI", quantity: 1, price: 2.3, shipped: false, orderDate: "1991-05-15T10:40:00", city: "Berlin", shipName: "Simons bistro", country: "Denmark", requiredDate: "1996-07-16T00:00:00", address: "Kirchgasse 6" },
  { id: 10002, customerId: "ALFKI", quantity: 3, price: 3.3, shipped: true, orderDate: "1990-04-04T09:30:00", city: "Madrid", shipName: "Queen Cozinha", country: "Brazil", requiredDate: "1996-09-11T00:00:00", address: "Avda. Azteca 123" },
  { id: 10003, customerId: "ANTON", quantity: 2, price: 4.3, shipped: true, orderDate: "1957-11-30T03:45:00", city: "Cholchester", shipName: "Frankenversand", country: "Germany", requiredDate: "1996-10-07T00:00:00", address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo" },
  { id: 10004, customerId: "BLONP", quantity: 4, price: 5.3, shipped: false, orderDate: "1930-10-22T07:30:00", city: "Marseille", shipName: "Ernst Handel", country: "Austria", requiredDate: "1996-12-30T00:00:00", address: "Magazinweg 7" },
  { id: 10005, customerId: "BOLID", quantity: 5, price: 6.3, shipped: true, orderDate: "1953-02-18T05:50:00", city: "Tsawassen", shipName: "Hanari Carnes", country: "Switzerland", requiredDate: "1997-12-03T00:00:00", address: "1029 - 12th Ave. S." },
  { id: 10006, customerId: "ALFKI", quantity: 2, price: 4.6, shipped: false, orderDate: "1991-05-15T10:40:00", city: "Berlin", shipName: "Simons bistro", country: "Denmark", requiredDate: "1996-07-16T00:00:00", address: "Kirchgasse 6" },
  { id: 10007, customerId: "ALFKI", quantity: 4, price: 6.6, shipped: true, orderDate: "1990-04-04T09:30:00", city: "Madrid", shipName: "Queen Cozinha", country: "Brazil", requiredDate: "1996-09-11T00:00:00", address: "Avda. Azteca 123" },
  { id: 10008, customerId: "ANTON", quantity: 3, price: 8.6, shipped: true, orderDate: "1957-11-30T03:45:00", city: "Cholchester", shipName: "Frankenversand", country: "Germany", requiredDate: "1996-10-07T00:00:00", address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo" },
  { id: 10009, customerId: "BLONP", quantity: 5, price: 10.6, shipped: false, orderDate: "1930-10-22T07:30:00", city: "Marseille", shipName: "Ernst Handel", country: "Austria", requiredDate: "1996-12-30T00:00:00", address: "Magazinweg 7" },
  { id: 10010, customerId: "BOLID", quantity: 6, price: 12.6, shipped: true, orderDate: "1953-02-18T05:50:00", city: "Tsawassen", shipName: "Hanari Carnes", country: "Switzerland", requiredDate: "1997-12-03T00:00:00", address: "1029 - 12th Ave. S." },
  { id: 30, customerId: "dummy", quantity: 20, price: 23.23, shipped: true, orderDate: "1991-05-15T10:40:00", city: "Add new", shipName: "dummyname", country: "dummycountry", requiredDate: "1991-05-15T10:40:00", address: "dummyaddress" }
];



ej.dropdowns.MultiSelect.Inject(ej.dropdowns.CheckBoxSelection);

var flValInput;
var valueComponentIns;
var changing = 'startswith';

var grid = new ej.grids.Grid({
  dataSource: ordersDetails,
  allowPaging: true,
  allowFiltering: true,
  filterSettings: { type: 'Menu' },
  columns: [
    { field: 'id', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
    // { field: 'OrderDate', headerText: 'Order Date', width: 130, textAlign: 'Right', editType: 'datepickeredit' },
      { field: 'customerId', headerText: 'CustomerID', width: '150',
          filter: {
              ui: {
                  create: function(args) {
                      flValInput = new ej.base.createElement('input', { className: 'flm-input' });
                      args.target.appendChild(flValInput);
                  },
                  write: function(args) {
                    
                      if (changing === 'in' || changing === 'notin') {
                          valueComponentIns = createMultiSelectFilter(changing);
                      } else {
                          valueComponentIns = createAutoCompleteFilter(changing);
                      }
                      // valueComponentIns = createAutoCompleteFilter(changing);
                      valueComponentIns.appendTo(flValInput);

                      const oprDropdown = args.parent.filterModule.filterModule.dlgDiv.querySelector('.e-dropdownlist').ej2_instances[0];

                      oprDropdown.change = () => {
                          valueComponentIns.destroy();
                          if (oprDropdown.value === 'in' || oprDropdown.value === 'notin') {
                              valueComponentIns = createMultiSelectFilter(oprDropdown.value);
                          } else {
                              valueComponentIns = createAutoCompleteFilter(oprDropdown.value);
                          }
                          changing = oprDropdown.value;
                          valueComponentIns.appendTo(flValInput);
                      };
                      valueComponentIns.value = args.filteredValue;
                  },
                  read: function(args) {
                      args.fltrObj.filterByColumn(args.column.field, args.operator, valueComponentIns.value);
                  }
              }
          }
      },
      { field: 'orderDate', headerText: 'order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
      { field: 'shipped', headerText: 'Verified', width: 150, editType: 'dropdownedit' }
  ],
  
  actionBegin: function(args) {
      if (args.requestType === 'filterBeforeOpen' && args.columnType === 'string') {
          const stringOperators = [
              { value: 'startswith', text: 'Starts With' },
              { value: 'endswith', text: 'Ends With' },
              { value: 'contains', text: 'Contains' },
              { value: 'equal', text: 'Equal' },
              { value: 'isempty', text: 'Is Empty' },
              { value: 'doesnotstartwith', text: 'Not Starts With' },
              { value: 'doesnotendwith', text: 'Not Ends With' },
              { value: 'doesnotcontain', text: 'Not Contains' },
              { value: 'notequal', text: 'Not Equal' },
              { value: 'isnotempty', text: 'Is Not Empty' },
              { value: 'like', text: 'Like' }
          ];
          if (args.columnName === 'customerId') {
              stringOperators.push({ value: 'in', text: 'In' }, { value: 'notin', text: 'Not In' });
          }
          args.filterModel.customFilterOperators.stringOperator = stringOperators;
      }
  }
});
grid.appendTo('#Grid');

function createAutoCompleteFilter(oprDropdownValue) {
  return new ej.dropdowns.AutoComplete({
    dataSource: new ej.data.DataUtil.distinct(ordersDetails, 'customerId'),
      fields: { text: 'customerId', value: 'customerId' },
      placeholder: 'Enter a value',
      popupHeight: '200px',
      autofill: true,
      sortOrder: 'Ascending',
    //   query: new ej.data.Query().select(['customerId']),
      actionBegin: function () { this.filterType = oprDropdownValue; }
  });
}

function createMultiSelectFilter(oprDropdownValue) {
  return new ej.dropdowns.MultiSelect({
      dataSource: new ej.data.DataUtil.distinct(ordersDetails, 'customerId'),
      fields: { text: 'customerId', value: 'customerId' },
      mode: 'CheckBox',
      placeholder: 'Select a value',
      popupHeight: '200px',
      showSelectAll: true,
    //   query: new ej.data.Query().select(['customerId']),
      actionBegin: function () { this.filterType = oprDropdownValue; }
  });
}