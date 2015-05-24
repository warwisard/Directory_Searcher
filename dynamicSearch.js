var dynamicSearch = angular.module('dynamicSearch', ['angular.chosen']);

 

dynamicSearch.directive('searcherDirective', function () {
    return {

        template: '<div>'
	+'<div class="row">'
		+'<div class="btn btn-default pull-right" ng-click="clearFilter()"  style="border:1px solid black">Clear Filter</div>'
	+'</div>'
	+'<div class="form-horizontal">'
        +'<div class="form-group">'
		+'<span ng-style="getStyle()" ng-repeat="item in searchObjectArray">'
            +'<div class="horOrVert" ng-class="getVertClass()" ng-style="getVertical()">'
            +'<label for="{{displayObject[item.key]}}">{{displayObject[item.key]}}</label>'
			+'<select id="{{displayObject[item.key]}}" class="dynamicSearch" id="chosen_{{item.key}}" data-placeholder="Select Last Name" ng-model="changeSearch.edit[item.key]" ng-options="item for item in checkforDups(' + "'" + '{{item.key}}' + "'" + ')" chosen>'
			+'</select>'
        +'</div>'
        +'</span>'
        +'</div>'
    +'</div>'
+'</div>',

        replace: true,

        link: function (scope, element, attributes) {
            
            scope.getVertClass = function(){
                var vertChk = scope.vertical ? scope.vertical : false
                if(vertChk === 'false' || vertChk === false){
                    return 'col-sm-3';
                }
            };
            
            scope.getVertical = function(){
                var vertChk = scope.vertical ? scope.vertical : false
                if(vertChk === 'true'){
                    return {'display':'block'};
                }else{
                    return {'display':'inline-block'};
                }
            }
            
           scope.changeSearch = new Object();

            var filterReset = angular.copy(scope.searchObject)

            //var searchList = []

            //var fillList = []

 

            scope.checkforDups = function (key) {

                var returnList = [];

                angular.forEach(scope.searchLists, function (item) {

                    if (returnList.indexOf(item[key]) == -1) {

                        returnList.push(item[key])

                    }

                });

                return returnList;

            };

            scope.getStyle = function(){
                if(scope.ngStyle){
                    return scope.ngStyle
                }
            };

            scope.$watch('changeSearch', function (newValue, oldValue, element) {

                angular.forEach(scope.changeSearch.edit, function (value, key) {

                    scope.searchObject[key] = value                   

                });

               

                

            },true);

 

            scope.clearFilter = function () {

                angular.forEach(scope.searchObject, function (value, key) {

                    scope.searchObject[key] = ''

                    scope.changeSearch.edit = ''

                    if (key !== '{{key}}') {

                        var changer = 'chosen_' + key

                        $('#' + changer).trigger('chosen:updated')

                    }

                })

            }

 

            scope.$watch('searchObject', function () {

                update()

            });

            function update() {

                scope.searchObjectArray = []

                for (var key in scope.searchObject) {

                    scope.searchObjectArray.push({ key: key, value: scope.searchObject[key] })

                }

 

                if (!(scope.displayObject)) {

                    scope.displayObject = angular.copy(scope.searchObject)

                    angular.forEach(scope.displayObject, function (value, key) {

                        scope.displayObject[key] = key

 

                    })

                } else {

                    angular.forEach(scope.displayObject, function (value, key) {

                    if (value === '') {                       

                        scope.displayObject[key] = key

                        }

                    })

                }

            }

            

            scope.$watch(attributes.displayObject, function (value) {

                attributes.displayObject = attributes.searchObject;

            })

            //scope.$watch(scope.searchObject, function (value) {

            //    var test = scope.searchObject;

            //})

            //scope.$watch(attributes.searchLists, function () {

            //    element.chosen('chosen:updated');

            //});

 

 

 

            //scope.$watch('displayObject',function(value){

            //    if(!(value)){

            //        attributes.displayObject = attributes.searchObject

            //    }

            //})

        },

        scope: {

            searchObject: "=",

            displayObject: "=?",

            searchLists: "=",
            ngStyle: "=?",
            vertical: "@?"

            //,

            //clearFilter: function(){

            //    searchObject = filterReset;

            //}

        }

    };

 

});