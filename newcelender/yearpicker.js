// $(function() {  
//     $('.yearpicker').yearpicker();
//   });

//   $(function() {  
//     $('.yearpicker').yearpicker({
//     autoHide: true,
//     year: null,
//     startYear: 2014,
//     endYear: 2022,
//     itemTag: 'li',
//     selectedClass: 'selected',
//     disabledClass: 'disabled',
//     hideClass: 'hide',
//     highlightedClass: 'highlighted'
// });
// });

// jSuites.calendar(document.getElementById('calendar'), {
//   type: 'year-month-picker',
//   format: 'MMM-YYYY',
//   validRange: [ '2020-02-01', '2022-12-31' ]
// });


$(document).ready(function(){
  $("#datepicker").datepicker({
     format: "yyyy",
     viewMode: "years", 
     minViewMode: "years",
     autoclose:true
  });   
})