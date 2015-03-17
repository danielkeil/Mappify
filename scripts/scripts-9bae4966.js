!function(){"use strict";function e(){return function(e){return e}}function a(e,a){e.state("root",{url:"/",views:{sidebar:{controller:"SidebarController",controllerAs:"sidebar",templateUrl:"/subsection-sidebar/sidebar.tpl.html"},map:{controller:"MainController",controllerAs:"main",templateUrl:"/subsection-main/main.tpl.html"}}}),a.otherwise("/")}function t(){}angular.module("mappifyApp",["mappifyApp.sidebar","mappifyApp.main","zenubu.ngStrap","mappify","ui.router"]).controller("AppCtrl",t).filter("translate",e).config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),angular.module("mappifyApp").run(["$templateCache",function(e){e.put("/subsection-main/main.tpl.html","<div ng-if=main.showMap><mappify id=map datasource=main.datasource config=main.config></mappify></div>"),e.put("/subsection-sidebar/sidebar.tpl.html",'<div class=col-xs-12><div class="h3 text-center">Mappify</div><br></div><div class=clearfix></div><ul class=navigation><li ng-repeat="config in sidebar.availableConfigs"><a href="" ng-click=config.open()><i class="fa fa-fw" ng-class="\'fa-\'+config.icon"></i> {{config.title}}</a></li></ul><div class=col-xs-12><hr><button href=/subscribe class="btn btn-primary btn-block text-left"><i class="fa fa-fw fa-cogs"></i> Generate AngularJS App</button></div><div class=col-xs-12 style="position: absolute; bottom: 15px"><button class="btn btn-info btn-block text-left" ng-click=main.refreshConfig() id=refreshButton><i class="fa fa-fw fa-refresh"></i> Refresh map</button><hr><button class="btn btn-block text-left" ng-class="(main.autoRefresh)?\'btn-success\':\'btn-warning\'" ng-click=main.refreshConfig() id=autoRefresh><i class="fa fa-fw" ng-class="(main.autoRefresh)?\'fa-toggle-on\':\'fa-toggle-off\'"></i> Autorefresh <span ng-if=main.autoRefresh>on</span> <span ng-if=!main.autoRefresh>off</span></button></div>'),e.put("/bower_components/angular-bootstrap-forms/src/zenubuForm.tpl.html","<form name=Form ng-submit=submit() novalidate><div ng-transclude></div></form>"),e.put("/bower_components/angular-bootstrap-forms/src/zenubuInput.tpl.html","<ng-form name=innerForm><div ng-class=\"{'has-error' : hasError()}\" class=\"form-group has-feedback\"><label ng-if=hasLabel>{{label}}</label><div ng-class=\"{'input-group' : inputGroup}\"><input type={{validation.type}} class=form-control name=input ng-class=\"{'input-lg': large}\" ng-if=!sameAs ng-trim=false ng-model=model[field] ng-maxlength={{validation.maxLength}} ng-minlength={{validation.minLength}} ng-change=change validator-regex={{validation.regex.pattern}} max={{validation.max}} min={{validation.min}} ng-required={{validation.required}} placeholder=\"{{ placeholder |translate }}\"> <input type={{validation.type}} class=form-control name=input ng-if=!!sameAs ng-change=change ng-trim=false ng-model=model[field] password-verify=model[sameAs] ng-maxlength={{validation.maxLength}} ng-minlength={{validation.minLength}} max={{validation.max}} min={{validation.min}} ng-required=validation.required placeholder=\"{{ placeholder |translate }}\"> <span class=\"fa fa-fw fa-asterisk single-input-feedback\" ng-class=\"{'text-danger' : hasError(), 'has-label': hasLabel}\" ng-if=validation.required focus-input></span></div><p ng-if=hasError() class=help-block><label class=control-label><span ng-show=innerForm.input.$error.validatorRegex>{{ validation.regex.error | translate }}</span> <span ng-show=innerForm.input.$error.email>{{ 'EMAIL_ERROR' | translate }}</span> <span ng-show=innerForm.input.$error.number>{{ 'NUMBER_ERROR' | translate }}</span> <span ng-show=innerForm.input.$error.required>{{ 'REQUIRED_ERROR' | translate }}</span> <span ng-show=innerForm.input.$error.maxlength>{{ 'MAXLENGTH_ERROR' | translate:{length:validation.maxLength} }}</span> <span ng-show=innerForm.input.$error.minlength>{{ 'MINLENGTH_ERROR' | translate:{length:validation.minLength} }}</span> <span ng-show=innerForm.input.$error.max>{{ 'MAX_ERROR' | translate:{length:validation.max} }}</span> <span ng-show=innerForm.input.$error.min>{{ 'MIN_ERROR' | translate:{length:validation.min} }}</span> <span ng-show=innerForm.input.$error.passwordVerify>{{ 'PASSWORD_NO_MATCH' | translate }}</span></label></p></div></ng-form>"),e.put("/bower_components/angular-bootstrap-forms/src/zenubuReset.tpl.html",'<a class="btn btn-primary no-icon" ng-click=reset() ng-disabled="isSaving() || isPristine() || disabled"><span ng-transclude></span></a>'),e.put("/bower_components/angular-bootstrap-forms/src/zenubuSelect.tpl.html",'<div><div ng-switch=validation.type ng-class="{\'has-error\' : hasError()}" class="form-group has-feedback"><label ng-if=hasLabel>{{label}}</label><div ng-switch-when=array><ui-select ng-model=model[field] theme=bootstrap ng-required={{validation.required}}><ui-select-match placeholder="{{ placeholder |translate }}">{{ $select.selected}}</ui-select-match><ui-select-choices repeat="item in valueObject | filter: $select.search"><div ng-bind-html="item | highlight: $select.search"></div></ui-select-choices></ui-select></div><div ng-switch-when=translatableArray><ui-select ng-model=model[field] theme=bootstrap ng-required={{validation.required}}><ui-select-match placeholder="{{ placeholder |translate }}">{{ translatablePrefix + $select.selected.code | translate}}</ui-select-match><ui-select-choices repeat="item.code as item in valueObject | filter: $select.search"><div ng-bind-html=" item.name | highlight: $select.search"></div></ui-select-choices></ui-select></div><span class=select-feedback ng-if=validation.required focus-select ng-class="{\'text-danger\' : hasError(), \'has-label\': hasLabel}"><i class="fa fa-fw fa-sort"></i> <i class="fa fa-fw fa-asterisk single-input-feedback"></i></span> <span class="fa fa-fw fa-sort single-input-feedback" ng-class="{\'text-danger\' : hasError(), \'has-label\': hasLabel}" ng-if=!validation.required focus-select></span><div ng-if=hasError() class=help-block><label class=control-label><span>{{ \'REQUIRED_ERROR\' | translate }}</span></label></div></div></div>'),e.put("/bower_components/angular-bootstrap-forms/src/zenubuSubmit.tpl.html",'<button type=submit class="btn btn-primary no-icon" ng-disabled="isSaving() || disabled"><span ng-transclude></span></button>'),e.put("/subsection-sidebar/modals/dataSource/dataSource.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><label>displayName</label><input ng-model="modal.ds.displayName"><h6>service</h6><div ng-repeat="service in modal.availableServices"><div ng-click=modal.toggleServiceSelection(service.id) ng-class="modal.isServiceSelected(service.id) ? \'bg-warning\' : \'\'" style="height: 100px; width: 100px">{{service.displayName}}</div></div><label>concept</label><select></select><input ng-model=modal.ds.concept placeholder="http://dbpedia.org/ontology/University"></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/download/download.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><textarea readonly=readonly style="resize: none">{{modal.config | json}}</textarea><a class=list-group-item ng-href="{{ modal.blobURL }}" download=config.json target=_blank><i class="fa fa-fw fa-cloud-download"></i> Download config.json</a></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/layout/layout.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><zenubu-form submit-function=modal.close model=modal.layout validation-object=modal.validation><div class=modal-body><label>Please define the center of your map below.</label><div class=row><zenubu-input class=col-xs-4 field=lat placeholder=Latitude label=Latitude></zenubu-input><zenubu-input class=col-xs-4 field=lng placeholder=Longitude label=Longitude></zenubu-input><zenubu-input class=col-xs-4 field=zoom placeholder=Zoom label=Zoom></zenubu-input></div><div style="margin-bottom: 5px"><strong>Preview</strong></div><leaflet defaults=modal.mapDefaults center=modal.layout layers=modal.layers width=100% height=300></leaflet></div><div class=modal-footer><zenubu-submit class=btn-success><i class="fa fa-fw fa-save"></i> Save</zenubu-submit></div></zenubu-form></div></div></div>'),e.put("/subsection-sidebar/modals/load/load.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><textarea ng-model=modal.json>\n\n                </textarea></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/mapSettings/mapSettings.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><textarea ng-model=modal.mapSettings>\n\n                </textarea></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/markerStyle/markerStyle.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><zenubu-form submit-function=modal.close validation-object={} model=modal><div class="modal-body row"><div class=col-xs-12><label>Please select a marker and colors.</label></div><div class=col-xs-6><div><label>Current Marker:</label><i class="fa fa-fw" ng-class="\'fa-\'+ modal.markers.m1.icon.icon" style="width: 30px;font-size: 18px; padding: 4px; margin: 4px"></i></div><div><label>Colors</label><div class=row><zenubu-input-group model=modal.markers.m1.icon><zenubu-select class=col-xs-6 field=markerColor type=array value-object=modal.availableColors label=unselected></zenubu-select></zenubu-input-group><zenubu-input-group model=modal.markers.m2.icon><zenubu-select class=col-xs-6 field=markerColor type=array value-object=modal.availableColors label=selected></zenubu-select></zenubu-input-group></div></div></div><div class=col-xs-6><leaflet defaults=modal.mapDefaults center=modal.layout markers=modal.markers layers=modal.layers width=100% height=100px></leaflet></div><div class=col-xs-12><hr><label>Available icons</label><div class=clearfix><br></div><input class=form-control ng-model=modal.search.$ placeholder="Search the icons, try currency or circle"><div class=clearfix><br></div><div class=iconBox ng-class="(filtered.length < 16)? \'flex-rows-single\' : \'flex-rows-multiple\' "><span ng-repeat="icon in filtered = (modal.availableMarkerStyles | filter : modal.search) " class=btn ng-click="modal.markers.m1.icon.icon = icon.id;modal.markers.m2.icon.icon = icon.id" ng-class="{\'btn-info\': modal.markers.m1.icon.icon === icon.id}"><i class="fa fa-fw" ng-class="\'fa-\' + icon.id"></i></span></div></div><div class=clearfix></div></div><div class=modal-footer><zenubu-submit class=btn-success><i class="fa fa-fw fa-save"></i> Save</zenubu-submit></div></zenubu-form></div></div></div>'),e.put("/subsection-sidebar/modals/popups/popups.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><textarea ng-model=modal.popups>\n\n                </textarea></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/sponate/sponate.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><textarea ng-model=modal.sponate>\n\n                </textarea></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/subsection-sidebar/modals/tileLayer/tileLayer.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header>{{modal.title}} <i class="fa fa-times close" ng-click=modal.cancel()></i></div><div class=modal-body><label style="margin-bottom: 15px">Please select the tile layers your map should provide.</label><div class=row><div class=col-xs-6 ng-repeat="(key,val) in modal.availableTileLayer.google"><div class=tile-layer-preview style=background-image:url(images/{{key}}.png) ng-click="modal.tl.google[key] = !modal.tl.google[key]"><div class=preview-inactive ng-if=!modal.tl.google[key]></div><span class=badge>Google: {{key}}</span> <span class=fa-stack><i class="fa fa-3x fa-circle fa-stack-1x" style="color: white"></i> <i class="fa fa-3x fa-stack-1x" ng-class="(modal.tl.google[key])?\'fa-check-circle-o text-success\':\'fa-times-circle-o text-danger\'"></i></span></div></div><div class=col-xs-6><div class=tile-layer-preview style=background-image:url(images/osm.png) ng-click="modal.tl.osm.standard = !modal.tl.osm.standard"><div class=preview-inactive ng-if=!modal.tl.osm.standard></div><span class=badge>osm: standard</span> <span class=fa-stack><i class="fa fa-3x fa-circle fa-stack-1x" style="color: white"></i> <i class="fa fa-3x fa-stack-1x" ng-class="(modal.tl.osm.standard)?\'fa-check-circle-o text-success\':\'fa-times-circle-o text-danger\'"></i></span></div></div></div></div><div class=clearfix></div><div class=modal-footer><button class="btn btn-success" ng-click=modal.close()><i class="fa fa-fw fa-save"></i> Save</button></div></div></div></div>'),e.put("/bower_components/angular-strap/src/alert/alert.tpl.html","<div class=alert ng-class=\"[type ? 'alert-' + type : null]\"><button type=button class=close ng-if=dismissable ng-click=$hide()>&times;</button> <strong ng-bind=title></strong>&nbsp;<span ng-bind-html=content></span></div>"),e.put("/bower_components/angular-strap/src/aside/aside.tpl.html",'<div class=aside tabindex=-1 role=dialog><div class=aside-dialog><div class=aside-content><div class=aside-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=aside-title ng-bind=title></h4></div><div class=aside-body ng-bind=content></div><div class=aside-footer><button type=button class="btn btn-default" ng-click=$hide()>Close</button></div></div></div></div>'),e.put("/bower_components/angular-strap/src/datepicker/datepicker.tpl.html",'<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class=text-center><th><button tabindex=-1 type=button class="btn btn-default pull-left" ng-click=$selectPane(-1)><i class={{$iconLeft}}></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex=-1 type=button class="btn btn-default btn-block text-strong" ng-click=$toggleMode()><strong style="text-transform: capitalize" ng-bind=title></strong></button></th><th><button tabindex=-1 type=button class="btn btn-default pull-right" ng-click=$selectPane(+1)><i class={{$iconRight}}></i></button></th></tr><tr ng-show=showLabels ng-bind-html=labels></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class=text-center ng-repeat="(j, el) in row"><button tabindex=-1 type=button class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click=$select(el.date) ng-disabled=el.disabled><span ng-class="{\'text-muted\': el.muted}" ng-bind=el.label></span></button></td></tr></tbody></table></div>'),e.put("/bower_components/angular-strap/src/dropdown/dropdown.tpl.html",'<ul tabindex=-1 class=dropdown-menu role=menu><li role=presentation ng-class="{divider: item.divider}" ng-repeat="item in content"><a role=menuitem tabindex=-1 ng-href={{item.href}} ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind=item.text></a> <a role=menuitem tabindex=-1 href=javascript:void(0) ng-if="!item.divider && item.click" ng-click=$eval(item.click);$hide() ng-bind=item.text></a></li></ul>'),e.put("/bower_components/angular-strap/src/modal/modal.tpl.html",'<div class=modal tabindex=-1 role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title ng-bind=title></h4></div><div class=modal-body ng-bind=content></div><div class=modal-footer><button type=button class="btn btn-default" ng-click=$hide()>Close</button></div></div></div></div>'),e.put("/bower_components/angular-strap/src/popover/popover.tpl.html","<div class=popover><div class=arrow></div><h3 class=popover-title ng-bind=title ng-show=title></h3><div class=popover-content ng-bind=content></div></div>"),e.put("/bower_components/angular-strap/src/select/select.tpl.html",'<ul tabindex=-1 class="select dropdown-menu" ng-show=$isVisible() role=select><li ng-if=$showAllNoneButtons><div class=btn-group style="margin-bottom: 5px; margin-left: 5px"><button type=button class="btn btn-default btn-xs" ng-click=$selectAll()>{{$allText}}</button> <button type=button class="btn btn-default btn-xs" ng-click=$selectNone()>{{$noneText}}</button></div></li><li role=presentation ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role=menuitem tabindex=-1 ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind=match.label></span></a></li></ul>'),e.put("/bower_components/angular-strap/src/tab/tab.tpl.html",'<ul class=nav ng-class=$navClass role=tablist><li ng-repeat="$pane in $panes track by $index" ng-class="$index == $panes.$active ? $activeClass : \'\'"><a role=tab data-toggle=tab ng-click=$setActive($index) data-index="{{ $index }}" ng-bind-html=$pane.title></a></li></ul><div ng-transclude class=tab-content></div>'),e.put("/bower_components/angular-strap/src/timepicker/timepicker.tpl.html",'<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height=100%><thead><tr class=text-center><th><button tabindex=-1 type=button class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex=-1 type=button class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class=text-center><button tabindex=-1 style="width: 100%" type=button class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled=row[0].disabled><span ng-class="{\'text-muted\': row[0].muted}" ng-bind=row[0].label></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class=text-center><button tabindex=-1 ng-if=row[1].date style="width: 100%" type=button class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled=row[1].disabled><span ng-class="{\'text-muted\': row[1].muted}" ng-bind=row[1].label></span></button></td><td ng-if=showAM>&nbsp;</td><td ng-if=showAM><button tabindex=-1 ng-show="i == midIndex - !isAM * 1" style="width: 100%" type=button ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click=$switchMeridian() ng-disabled=el.disabled>AM</button> <button tabindex=-1 ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type=button ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click=$switchMeridian() ng-disabled=el.disabled>PM</button></td></tr></tbody><tfoot><tr class=text-center><th><button tabindex=-1 type=button class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex=-1 type=button class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>'),e.put("/bower_components/angular-strap/src/tooltip/tooltip.tpl.html",'<div class="tooltip in" ng-show=title><div class=tooltip-arrow></div><div class=tooltip-inner ng-bind=title></div></div>'),e.put("/bower_components/angular-strap/src/typeahead/typeahead.tpl.html",'<ul tabindex=-1 class="typeahead dropdown-menu" ng-show=$isVisible() role=select><li role=presentation ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role=menuitem tabindex=-1 ng-click="$select($index, $event)" ng-bind=match.label></a></li></ul>'),e.put("/bower_components/angular-strap-patches/src/dropdown/dropdown.tpl.html",'<ul tabindex=-1 class=dropdown-menu role=menu ng-controller="DropdownCtrl as vm"><li role=presentation ng-repeat="item in content" ng-class="{divider: item.divider}" ng-click=vm.execute(item) ng-hide=vm.hide(item) ng-show=vm.show(item)><a ng-if=item.template compile=item.template></a> <a ng-if="item.templateArray && !vm.model[item.field]" compile=item.templateArray[0]></a> <a ng-if="item.templateArray && vm.model[item.field]" compile=item.templateArray[1]></a></li></ul>')}]),function(){"use strict";function e(e,t,i,n){var l=this;l.title=a,l.tl=t.tileLayer,l.availableTileLayer=i,l.cancel=function(){e.dismiss()},l.close=function(){n.setTileLayer(l.tl),e.close(l.tl)}}var a="Change TileLayers";angular.module("mappifyApp.sidebar.tileLayer",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:70,title:a,fileName:"tileLayer",icon:"globe",ctrl:e},n={tileLayer:["scaffoldingConfigModel",function(e){var a=e.getCurrentConfig("tileLayer");return{tileLayer:a}}],availableTileLayer:["tileLayerModel",function(e){return e.getTileLayers()}]};t.registerConfig(i,n)}]),e.$inject=["$modalInstance","tileLayer","availableTileLayer","scaffoldingConfigModel"]}(),function(){"use strict";function e(e){var t=this;t.title=a,t.sponate="",t.cancel=function(){e.dismiss()},t.close=function(){e.close(t.sponate)}}var a="Change Sponate Mapping";angular.module("mappifyApp.sidebar.sponate",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:30,title:a,fileName:"sponate",icon:"random",ctrl:e};t.registerConfig(i)}]),e.$inject=["$modalInstance"]}(),function(){"use strict";function e(e){var t=this;t.title=a,t.popups="",t.cancel=function(){e.dismiss()},t.close=function(){e.close(t.popups)}}var a="Change Popup Template";angular.module("mappifyApp.sidebar.popups",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:90,title:a,fileName:"popups",icon:"share-square-o",ctrl:e};t.registerConfig(i)}]),e.$inject=["$modalInstance"]}(),function(){"use strict";function e(e,t,i){var n=this;n.title=a,n.search={},n.availableMarkerStyles=t,n.availableColors=["red","blue","green","purple","orange","darkred","lightred","beige","darkblue","darkgreen","cadetblue","darkpurple","white","pink","lightblue","lightgreen","gray","black","lightgray"],n.unSelectedColor="blue",n.selectedColor="red",n.icon="star",n.mapDefaults={keyboard:!1,dragging:!1,zoomControl:!1,doubleClickZoom:!1,scrollWheelZoom:!1,tap:!1,attributionControl:!1,zoomAnimation:!1,fadeAnimation:!1,markerZoomAnimation:!1},n.layers={baselayers:{googleRoadmap:{name:"Google Streets",layerType:"ROADMAP",type:"google"}}},n.layout=i,n.markers={m1:{lat:i.lat,lng:i.lng-.03,focus:!1,clickable:!1,draggable:!1,icon:{type:"awesomeMarker",prefix:"fa",icon:n.icon,markerColor:n.unSelectedColor}},m2:{lat:i.lat,lng:i.lng+.03,focus:!1,clickable:!1,draggable:!1,icon:{type:"awesomeMarker",prefix:"fa",icon:n.icon,markerColor:n.selectedColor}}},n.cancel=function(){e.dismiss()},n.close=function(){e.close({marker:n.markers.m1.icon.icon,selected:n.markers.m2.icon.markerColor,unselected:n.markers.m1.icon.markerColor})}}var a="Select Marker Style";angular.module("mappifyApp.sidebar.markerStyle",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:80,title:a,fileName:"markerStyle",icon:"map-marker",ctrl:e},n={availableMarkerStyles:["markerStyleModel",function(e){return e.getMarkerStyles()}],layout:["scaffoldingConfigModel",function(e){var a=e.getCurrentConfig("layout");return{zoom:11,lat:a.viewCenter.latitude,lng:a.viewCenter.longitude}}]};t.registerConfig(i,n)}]),e.$inject=["$modalInstance","availableMarkerStyles","layout"]}(),function(){"use strict";function e(e){var t=this;t.title=a,t.mapSettings="",t.cancel=function(){e.dismiss()},t.close=function(){e.close(t.mapSettings)}}var a="Map Settings";angular.module("mappifyApp.sidebar.mapSettings",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:95,title:a,fileName:"mapSettings",icon:"cog",ctrl:e};t.registerConfig(i)}]),e.$inject=["$modalInstance"]}(),function(){"use strict";function e(e,t){var i=this;i.title=a,i.json="",i.cancel=function(){e.dismiss()},i.close=function(){t.loadConfigModelFromJSON(i.json),e.close(i.json)}}var a="Load Config";angular.module("mappifyApp.sidebar.load",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:0,title:a,fileName:"load",icon:"cloud-upload",ctrl:e};t.registerConfig(i)}]),e.$inject=["$modalInstance","scaffoldingConfigModel"]}(),function(){"use strict";function e(e,t,i){var n=this;n.title=a,n.layout=t,n.validation={lat:{required:!0,type:"number",min:"-90",max:"90"},lng:{required:!0,type:"number",min:"-180",max:"180"},zoom:{required:!0,type:"number",min:"1",max:"22"}},n.mapDefaults={keyboard:!1,dragging:!1,zoomControl:!1,doubleClickZoom:!1,scrollWheelZoom:!1,tap:!1,attributionControl:!1,zoomAnimation:!1,fadeAnimation:!1,markerZoomAnimation:!1},n.layers={baselayers:{googleRoadmap:{name:"Google Streets",layerType:"ROADMAP",type:"google"}}},n.cancel=function(){e.dismiss()},n.close=function(){i.setZoom(n.layout.zoom),i.setViewCenter(n.layout.lat,n.layout.lng),e.close(n.layout)}}var a="Change Zoom/Center";angular.module("mappifyApp.sidebar.layout",["leaflet-directive","mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:60,fileName:"layout",title:a,icon:"location-arrow",ctrl:e},n={layout:["scaffoldingConfigModel",function(e){var a=e.getCurrentConfig("layout");return{zoom:a.zoom,lat:a.viewCenter.latitude,lng:a.viewCenter.longitude}}]};t.registerConfig(i,n)}]),e.$inject=["$modalInstance","layout","scaffoldingConfigModel"]}(),function(){"use strict";function e(e,t){function i(){var e=new Blob([n.config],{type:"application/json"});return URL.createObjectURL(e)}var n=this;n.title=a,n.config=t,n.blobURL=i(),n.cancel=function(){e.dismiss()},n.close=function(){e.close(n.json)}}var a="Download Config";angular.module("mappifyApp.sidebar.download",["mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:100,title:a,fileName:"download",icon:"cloud-download",ctrl:e},n={config:["scaffoldingConfigModel",function(e){return e.getCurrentConfig()}]};t.registerConfig(i,n)}]).config(["$compileProvider",function(e){e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/)}])}(),function(){"use strict";function e(e,t,i){function n(){function e(e){return _.find(t,function(a){return a.id===e})}null!==l.selectedService&&(l.ds.service=e(l.selectedService))}var l=this;l.title=a,l.ds={},l.selectedService=null,l.availableServices=t,l.toggleServiceSelection=function(e){l.selectedService=e===l.selectedService?null:e},l.isServiceSelected=function(e){return e===l.selectedService},l.cancel=function(){e.dismiss()},l.close=function(){n(),i.setSetDataSource(l.ds),e.close(l.ds)}}var a="Change DataSource";angular.module("mappifyApp.sidebar.dataSource",["zenubu.input","mappifyApp.sidebar.configService"]).config(["configServiceProvider",function(t){var i={order:20,title:a,fileName:"dataSource",icon:"database",ctrl:e},n={availableServices:["dataSourceServiceModel",function(e){return e.getDataSourceServices()}]};t.registerConfig(i,n)}]),e.$inject=["$modalInstance","availableServices","scaffoldingConfigModel"]}(),function(){"use strict";function e(){function e(e,a,t){var i={},n=jassa.geo.GeoDataSourceUtils.createGeoDataSourceLabels(e,a,t,i);return n}function a(e){return jassa.sparql.ConceptUtils.createTypeConcept(e)}function t(e,a){var t=jassa.service.SparqlServiceBuilder.http(e,a,{type:"POST"}).cache().virtFix().paginate(1e3).pageExpand(100).create();return t}function i(e){if(e=e.toLowerCase(),"wgs84"===e)return jassa.geo.GeoMapFactoryUtils.wgs84MapFactory;if("wkt"===e)return jassa.geo.GeoMapFactoryUtils.createWktMapFactory("http://www.w3.org/2003/01/geo/wgs84_pos#geometry","bif:st_intersects","bif:st_geomFromText");throw new Error("unsupported GeoMapFactory type")}var n=this;n.create=function(){var n=t("http://akswnc3.informatik.uni-leipzig.de/data/dbpedia/sparql",["http://dbpedia.org"]),l=i("wkt"),o=a("http://dbpedia.org/ontology/University"),s=e(n,l,o);return s}}angular.module("mappifyApp.service.jassaDataSourceFactory",[]).service("jassaDataSourceFactory",e)}(),function(){"use strict";function e(e,a){function t(e){return e.data}function i(e){return n=t(e)}var n,l=this,o={FETCH:"data/tileLayer.json"};l.getTileLayers=function(){return n?a.when(n):e.get(o.FETCH).then(i)}}angular.module("mappifyApp.models.tileLayer",[]).service("tileLayerModel",e),e.$inject=["$http","$q"]}(),function(){"use strict";function e(){function e(e){return angular.copy(e&&s.hasOwnProperty(e)?s[e]:s)}function a(e){s.layout.zoom=e}function t(e,a){s.layout.viewCenter.latitude=e,s.layout.viewCenter.longitude=a}function i(e){s=JSON.parse(e)}function n(e){s.tileLayer=e}function l(e){s.dataSources=s.dataSources||[];var a=_.findIndex(s.dataSources,function(a){return a.displayName===e.displayName});-1===a?s.dataSources.push(e):s.dataSources[a]=e}var o=this,s={layout:{viewCenter:{latitude:51.339018,longitude:12.3797776},zoom:15},tileLayer:{google:{"true":!1}}};return o.setZoom=a,o.setViewCenter=t,o.getCurrentConfig=e,o.loadConfigModelFromJSON=i,o.setTileLayer=n,o.setSetDataSource=l,o}angular.module("mappifyApp.models.scaffoldingConfigModel",[]).service("scaffoldingConfigModel",e)}(),function(){"use strict";function e(e,a){function t(e){return e.data.icons}function i(e){return n=t(e)}var n,l=this,o={FETCH:"data/markerStyle.json"};l.getMarkerStyles=function(){return n?a.when(n):e.get(o.FETCH).then(i)}}angular.module("mappifyApp.models.markerStyleModel",[]).service("markerStyleModel",e),e.$inject=["$http","$q"]}(),function(){"use strict";function e(e){function a(){var a=e.getCurrentConfig();return t.zoom=a.layout.zoom,t.viewCenter=a.layout.viewCenter,t}var t={},i={};return i.createMapConfigFromScafoldingConfig=a,i}angular.module("mappifyApp.models.mapConfigModel",["mappifyApp.models.scaffoldingConfigModel"]).factory("mapConfigModel",e),e.$inject=["scaffoldingConfigModel"]}(),function(){"use strict";function e(e,a){function t(e){return e.data}function i(e){return n=t(e)}var n,l=this,o={FETCH:"data/dataSourceService.json"};l.getDataSourceServices=function(){return n?a.when(n):e.get(o.FETCH).then(i)
},l.getDataSourceServiceByName=function(e){function t(){return _.find(n,function(a){return a.displayName===e})}var i=a.defer();return n?i.resolve(t(e)):l.getDataSourceServices().then(function(){i.resolve(t(e))}),i.promise}}angular.module("mappifyApp.models.dataSourceService",[]).service("dataSourceServiceModel",e),e.$inject=["$http","$q"]}(),function(){"use strict";function e(e,a){var t=this;t.availableConfigs=a.availableConfigs,t.getConfigModel=e.getCurrentConfig}angular.module("mappifyApp.sidebar",["ui.router","mappifyApp.sidebar.layout","mappifyApp.sidebar.configService","mappifyApp.sidebar.load","mappifyApp.sidebar.sponate","mappifyApp.sidebar.mapSettings","mappifyApp.sidebar.popups","mappifyApp.sidebar.download","mappifyApp.sidebar.tileLayer","mappifyApp.sidebar.dataSource","mappifyApp.sidebar.markerStyle","mappifyApp.models.dataSourceService","mappifyApp.models.markerStyleModel","mappifyApp.models.mapConfigModel","mappifyApp.models.tileLayer","mappifyApp.models.scaffoldingConfigModel"]).controller("SidebarController",e),e.$inject=["scaffoldingConfigModel","configService"]}(),function(){"use strict";function e(){function e(e,a,i){_.isFunction(a)&&(i=a,a={}),_.isFunction(i)||(i=function(){}),t[e.order+e.fileName]={description:e,resolveFunctions:a,callbackFunction:i}}function a(e){function a(e,a,t){n.availableConfigs.push({title:e.title,icon:e.icon,open:function(){return i({template:"/subsection-sidebar/modals/"+e.fileName+"/"+e.fileName+".tpl.html",controller:e.ctrl,controllerAs:"modal",resolve:a}).then(t)}})}function i(a){return e.open(a).then(function(e){return e.result})}var n={};return n.availableConfigs=[],_(t).sortBy(function(e){return e.description.order}).forEach(function(e){a(e.description,e.resolveFunctions,e.callbackFunction)}).value(),n}var t={};return a.$inject=["$modal"],{registerConfig:e,$get:a}}angular.module("mappifyApp.sidebar.configService",[]).provider("configService",e)}(),function(){"use strict";function e(e,t,i){var n=this;n.showMap=!0,n.getMapConfig=function(){return e.createMapConfigFromScafoldingConfig()},n.getDataSource=function(){return a(n.getMapConfig(),i)},n.refreshConfig=function(){n.showMap=!1,n.config=n.getMapConfig(),n.datasource=n.getDataSource(),t(function(){n.showMap=!0},500)},n.config={viewCenter:{latitude:51.339018,longitude:12.3797776},zoom:15},n.datasource={},n.datasource.fetchData=function(){return[]}}function a(e,a){var t=a.create(e);return[t]}angular.module("mappifyApp.main",["ui.router","mappifyApp.service.jassaDataSourceFactory"]).controller("MainController",e),e.$inject=["mapConfigModel","$timeout","jassaDataSourceFactory"]}();