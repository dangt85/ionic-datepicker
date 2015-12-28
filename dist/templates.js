(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('template.html',
    '<div class="datepicker-modal-container">\n' +
    '  <div class="datepicker-modal">\n' +
    '\n' +
    '      <div class="datepicker-modal-head datepicker-balanced white bold">\n' +
    '        <div class="datepicker-modal-title">{{datepickerCtrl.getSelectedWeekday()}}</div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="center datepicker-balanced-light">\n' +
    '        <div class="row">\n' +
    '          <div class="col datepicker-month-js datepicker-month" ng-click="datepickerCtrl.changeType(\'month\')">\n' +
    '            {{datepickerCtrl.getSelectedMonth() | limitTo: 3 | uppercase}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col datepicker-day-of-month" ng-click="datepickerCtrl.changeType(\'date\')">\n' +
    '            {{datepickerCtrl.selectedDate | date: \'d\'}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col datepicker-year-js datepicker-year" ng-click="datepickerCtrl.changeType(\'year\')">\n' +
    '            {{datepickerCtrl.selectedDate | date: \'yyyy\'}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="datepicker-month-content-js datepicker-content" ng-show="datepickerCtrl.showType(\'month\')">\n' +
    '        <div class="row center" ng-repeat="month in datepickerCtrl.getMonths() track by $index">\n' +
    '          <div class="col datepicker-selection" ng-class="{\n' +
    '                  \'datepicker-selected\': datepickerCtrl.isSelectedMonth($index),\n' +
    '                  \'datepicker-current\': datepickerCtrl.isActualMonth($index)\n' +
    '                  }" ng-click="datepickerCtrl.selectMonth($index)">\n' +
    '            {{month | limitTo: 3}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="datepicker-content visible-overflow" ng-show="datepickerCtrl.showType(\'date\')">\n' +
    '        <div class="row col center">\n' +
    '          {{datepickerCtrl.getTempMonth()}} {{datepickerCtrl.tempDate | date: \'yyyy\'}}\n' +
    '        </div>\n' +
    '        <div class="row center">\n' +
    '          <div class="col bold" ng-repeat="dayOfWeek in datepickerCtrl.getDaysOfWeek() track by $index">\n' +
    '            {{dayOfWeek | limitTo: 1 | uppercase}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row center" ng-repeat="row in datepickerCtrl.rows track by $index">\n' +
    '          <div class="col no-padding" ng-repeat="col in datepickerCtrl.cols track by $index" ng-class="{\n' +
    '                  \'datepicker-date-col\': datepickerCtrl.isDefined(datepickerCtrl.getDate($parent.$index, $index)),\n' +
    '                  \'datepicker-selected\': datepickerCtrl.isSelectedDate(datepickerCtrl.getDate($parent.$index, $index)),\n' +
    '                  \'datepicker-current\' : datepickerCtrl.isActualDate(datepickerCtrl.getDate($parent.$index, $index)),\n' +
    '                  \'datepicker-disabled\': datepickerCtrl.isDisabled(datepickerCtrl.getDate($parent.$index, $index))\n' +
    '                  }">\n' +
    '\n' +
    '            <div class="datepicker-date-cell" ng-click="datepickerCtrl.selectDate(datepickerCtrl.getDate($parent.$index, $index))">\n' +
    '              {{ datepickerCtrl.getDate($parent.$index, $index) | date: \'d\' }}\n' +
    '            </div>\n' +
    '\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="datepicker-year-content-js datepicker-content" ng-show="datepickerCtrl.showType(\'year\')">\n' +
    '        <div class="row center" ng-repeat="year in datepickerCtrl.getYears() track by $index">\n' +
    '          <div class="col datepicker-selection" ng-class="{\n' +
    '                  \'datepicker-selected\': datepickerCtrl.isSelectedYear(year),\n' +
    '                  \'datepicker-current\': datepickerCtrl.isActualYear(year)\n' +
    '                  }" ng-click="datepickerCtrl.selectYear(year)">\n' +
    '            {{year}}\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="datepicker-modal-buttons">\n' +
    '        <button class="datepicker-cancel-js button button-clear button-small col-offset-33">CANCEL</button>\n' +
    '        <button class="datepicker-ok-js button button-clear button-small datepicker-color-balanced-light">OK</button>\n' +
    '      </div>\n' +
    '\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
