var ordersDetails = [
    { id: 10001, customerId: "ALFKI", quantity: 1, price: 2.3, shipped: false, orderDate: new Date(1991, 4, 15), city: "Berlin", shipName: "Simons bistro", country: "Denmark", requiredDate: new Date(1996, 6, 16), address: "Kirchgasse 6" },
    { id: 10002, customerId: "ALFKI", quantity: 3, price: 3.3, shipped: true, orderDate: new Date(1990, 3, 4), city: "Madrid", shipName: "Queen Cozinha", country: "Brazil", requiredDate: new Date(1996, 8, 11), address: "Avda. Azteca 123" },
    { id: 10003, customerId: "ANTON", quantity: 2, price: 4.3, shipped: true, orderDate: new Date(1957, 10, 30), city: "Cholchester", shipName: "Frankenversand", country: "Germany", requiredDate: new Date(1996, 9, 7), address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo" },
    { id: 10004, customerId: "BLONP", quantity: 4, price: 5.3, shipped: false, orderDate: new Date(1930, 9, 22), city: "Marseille", shipName: "Ernst Handel", country: "Austria", requiredDate: new Date(1996, 11, 30), address: "Magazinweg 7" },
    { id: 10005, customerId: "BOLID", quantity: 5, price: 6.3, shipped: true, orderDate: new Date(1953, 1, 18), city: "Tsawassen", shipName: "Hanari Carnes", country: "Switzerland", requiredDate: new Date(1997, 11, 3), address: "1029 - 12th Ave. S." },
    { id: 10006, customerId: "ALFKI", quantity: 2, price: 4.6, shipped: false, orderDate: new Date(1991, 4, 15), city: "Berlin", shipName: "Simons bistro", country: "Denmark", requiredDate: new Date(1996, 6, 16), address: "Kirchgasse 6" },
    { id: 10007, customerId: "ALFKI", quantity: 4, price: 6.6, shipped: true, orderDate: new Date(1990, 3, 4), city: "Madrid", shipName: "Queen Cozinha", country: "Brazil", requiredDate: new Date(1996, 8, 11), address: "Avda. Azteca 123" },
    { id: 10008, customerId: "ANTON", quantity: 3, price: 8.6, shipped: true, orderDate: new Date(1957, 10, 30), city: "Cholchester", shipName: "Frankenversand", country: "Germany", requiredDate: new Date(1996, 9, 7), address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo" },
    { id: 10009, customerId: "BLONP", quantity: 5, price: 10.6, shipped: false, orderDate: new Date(1930, 9, 22), city: "Marseille", shipName: "Ernst Handel", country: "Austria", requiredDate: new Date(1996, 11, 30), address: "Magazinweg 7" },
    { id: 10010, customerId: "BOLID", quantity: 6, price: 12.6, shipped: true, orderDate: new Date(1953, 1, 18), city: "Tsawassen", shipName: "Hanari Carnes", country: "Switzerland", requiredDate: new Date(1997, 11, 3), address: "1029 - 12th Ave. S." },
    { id: 30, customerId: "dummy", quantity: 20, price: 23.23, shipped: true, orderDate: new Date(1991, 4, 15), city: "Add new", shipName: "dummyname", country: "dummycountry", requiredDate: new Date(1991, 4, 15), address: "dummyaddress" }
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
