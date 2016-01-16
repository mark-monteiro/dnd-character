$(function () {
   // Init Tooltips
   $('[data-toggle="tooltip"]').each(function() {
      var elem = $(this);

      if (elem.hasClass('overflow-ellipses') && this.offsetHeight < this.scrollHeight || this.offsetWidth < this.scrollWidth)
         return;

      elem.tooltip({
         'trigger': 'hover'
      });
   });

   // Init Datatables
   $('.datatable').each(function() {
      var dataTable = $(this);

      dataTable = dataTable.DataTable({
         // dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
         //      "<'row'<'col-sm-12'tr>>" +
         //      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
      });
   });

   // Init datatable search forms
   $('.search-form').each(function() {
      var fieldset = $(this);
      var searchInputs = fieldset.find(":input");
      var targetTable = $(fieldset.data('target'));

      targetTable.closest('.dataTables_wrapper').find('.dataTables_filter').remove();

      searchInputs.change(function(event) {
         targetTable.DataTable().draw();
      });

      searchInputs.filter("[type='text']").keyup(function() {
         targetTable.DataTable().draw();
      });

      $.fn.dataTable.ext.search.push(
         function( settings, data, dataIndex ) {
            var success = true;

            searchInputs.each(function() {
               var inputValid;
               var input = $(this);
               if(input.val() == "") return;

               var target = input.data('target-col');
               var filterData = input.val().toLowerCase();
               var targetData = data[target].toLowerCase();

               if(input.data('match-type') === 'contains') {
                  inputValid = targetData.indexOf(filterData) > -1;
               }
               else
               {
                  inputValid = filterData == targetData;
               }

                return success = success && inputValid;
            });

            return success;
         }
      );
   });
});
