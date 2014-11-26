(function($){var config;function makeRequest(url,callback,params){var successHandler=function(data){if($.isFunction(callback)){callback(data)}};$.ajax({data:params,dataType:"jsonp",success:successHandler,type:"GET",url:url+"?host="+config.host+"&apikey="+config.apikey+"&jsonp=?"})}$.jChartbeat=function(newConfig){config=$.extend({},config,newConfig);return this};$.jChartbeat.realTimeBaseUrl="http://api.chartbeat.com";$.jChartbeat.historicalBaseUrl="http://chartbeat.com/dashapi";$.jChartbeat.apiBaseUrl="http://api.chartbeat.com";$.jChartbeat.paths={alerts:"/alerts/",dataSeries:"/data_series/",dayDataSeries:"/day_data_series/",histogram:"/histogram/",pages:"/pages/",pathSummary:"/pathsummary/",quickstats:"/quickstats/",recent:"/recent/",snapshots:"/snapshots/",stats:"/stats/",summary:"/summary/",topPages:"/toppages/",liveQuickstats:"/live/quickstats/v3"};$.jChartbeat.alerts=function(callback,params){var request=$.jChartbeat.historicalBaseUrl+$.jChartbeat.paths.alerts;makeRequest(request,callback,params)};$.jChartbeat.dataSeries=function(callback,params){var request=$.jChartbeat.historicalBaseUrl+$.jChartbeat.paths.dataSeries;makeRequest(request,callback,params)};$.jChartbeat.dayDataSeries=function(callback,params){var request=$.jChartbeat.historicalBaseUrl+$.jChartbeat.paths.dayDataSeries;makeRequest(request,callback,params)};$.jChartbeat.histogram=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.histogram;makeRequest(request,callback,params)};$.jChartbeat.pages=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.pages;makeRequest(request,callback,params)};$.jChartbeat.pathSummary=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.pathSummary;makeRequest(request,callback,params)};$.jChartbeat.quickstats=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.quickstats;makeRequest(request,callback,params)};$.jChartbeat.liveQuickstats=function(callback,params){var request=$.jChartbeat.apiBaseUrl+$.jChartbeat.paths.liveQuickstats;makeRequest(request,callback,params)};$.jChartbeat.recent=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.recent;makeRequest(request,callback,params)};$.jChartbeat.snapshots=function(callback,params){var request=$.jChartbeat.historicalBaseUrl+$.jChartbeat.paths.snapshots;params["api"]="pages";makeRequest(request,callback,params)};$.jChartbeat.stats=function(callback){var request=$.jChartbeat.historicalBaseUrl+$.jChartbeat.paths.stats;makeRequest(request,callback)};$.jChartbeat.summary=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.summary;makeRequest(request,callback,params)};$.jChartbeat.toppages=function(callback,params){var request=$.jChartbeat.realTimeBaseUrl+$.jChartbeat.paths.topPages;makeRequest(request,callback,params)}})(jQuery);