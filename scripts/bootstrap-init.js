$(function () {
   $('[data-toggle="tooltip"]').each(function() {
      var elem = $(this);

      if (elem.hasClass('overflow-ellipses') && this.offsetHeight < this.scrollHeight || this.offsetWidth < this.scrollWidth)
         return;

      elem.tooltip({
         'trigger': 'hover'
      });
   });
});
