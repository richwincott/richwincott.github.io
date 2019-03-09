"use strict";angular.module("mainSite",["ui.router","ui.bootstrap","angular-parallax","ngAnimate","ngSanitize","base64","ngCookies"]).run(["$rootScope","$transitions",function(n,a){a.onSuccess({},function(a){n.$broadcast("stateChanged",a.router.globals.current)})}]);
"use strict";function routing(t,o,e){t.state("index",{component:"mainComponent"}).state("index.tiles",{url:"/",component:"tilesComponent"}).state("index.view",{url:"/:groupId/:id",component:"viewComponent"}).state("index.blog",{url:"/blog",component:"blogComponent"}).state("index.post",{url:"/blog/:id",component:"postComponent"}).state("index.about",{url:"/about",templateUrl:"aboutModalContent.html"}),o.otherwise("/"),e.hashPrefix("")}routing.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("mainSite").config(routing);
"use strict";var mainSite;!function(e){function t(e){e.interceptors.push(["$rootScope","$q","$location","$cookies",function(e,t,n,i){return{request:function(e){e.headers=e.headers||{};var t=i.getObject("globals")||{};return t.token&&(e.headers.Authorization="Bearer "+t.token),e}}}])}t.$inject=["$httpProvider"],angular.module("mainSite").config(t)}(mainSite||(mainSite={}));
"use strict";var api;!function(t){var n=function(){function t(t,n){this.$http=t,this.$q=n,this.onInit()}return t.prototype.onInit=function(){this.basePath=""},t.prototype.bannerImages=function(){var n=this.$q.defer();return this.$http.get(this.basePath+"banner_images.json").then(function(t){n.resolve(t.data)},function(t){n.reject(t)}),n.promise},t.$inject=["$http","$q"],t}();angular.module("mainSite").service("API",n)}(api||(api={}));
"use strict";var user;!function(t){var e=function(){function t(t,e){this.$cookies=t,this.WordPressAPI=e,this.onInit()}return t.prototype.onInit=function(){!this.token&&this.$cookies.getObject("globals")&&(this.token=this.$cookies.getObject("globals"),this.information||this.fetchMe())},t.prototype.fetchMe=function(){var e=this;this.WordPressAPI.fetchMe().then(function(t){e.information=t})},t.$inject=["$cookies","WordPressAPI"],t}();angular.module("mainSite").service("User",e)}(user||(user={}));
"use strict";var api;!function(t){var e=function(){function t(t,e){this.$http=t,this.$q=e,this.onInit()}return t.prototype.onInit=function(){this.basePath="http://www.richardwincott.co.uk/wordpress/wp-json/"},t.prototype.fetchMe=function(){var e=this.$q.defer();return this.$http.get(this.basePath+"wp/v2/users/me").then(function(t){e.resolve(t.data)},function(t){e.reject(t)}),e.promise},t.prototype.token=function(t){var e=this.$q.defer();return this.$http.post(this.basePath+"jwt-auth/v1/token",t).then(function(t){e.resolve(t.data)},function(t){e.reject(t)}),e.promise},t.$inject=["$http","$q"],t}();angular.module("mainSite").service("WordPressAPI",e)}(api||(api={}));
"use strict";
"use strict";var blog;!function(t){var o=function(){function t(t,o,e){this.$scope=t,this.$http=o,this.User=e,this.archives=[],this.connError=!1,this.user=e,this.onInit()}return t.prototype.onInit=function(){var e=this;this.$http({method:"GET",url:"https://spreadsheets.google.com/feeds/list/1VPC3UFQ-7PL0TLkCKIO3gcJcIZZh5EmL2HfrJc4H11o/od6/public/values?alt=json-in-script&callback=x"}).then(function(t){var o=JSON.parse(t.data.toString().substring(18,t.data.toString().length-2)).feed.entry;e.posts=o,e.posts.forEach(function(t){t.ide=t.id.$t.substring(t.id.$t.length-5,t.id.$t.length),-1==e.archives.indexOf(t.gsx$date.$t.substring(0,t.gsx$date.$t.length-3))&&e.archives.push(t.gsx$date.$t.substring(0,t.gsx$date.$t.length-3))})},function(){e.connError=!0})},t.prototype.getValue=function(t,o){return t["gsx$"+o].$t},t.prototype.fetchReplies=function(o,t){var e=this;this.$http({method:"GET",url:"http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/comments?post="+t}).then(function(t){e.posts[o].comments=t.data})},t.prototype.fetchFeaturedImage=function(o,t){var e=this;this.$http({method:"GET",url:"http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/media/"+t}).then(function(t){e.posts[o].featured_image=t.data})},t.$inject=["$scope","$http","User"],t}();angular.module("mainSite").component("blogComponent",{controller:o,controllerAs:"$ctrl",templateUrl:"partials/blog/blog.html"})}(blog||(blog={}));
"use strict";var post;!function(t){var o=function(){function t(t,o,n,e){this.$scope=t,this.$http=o,this.$stateParams=n,this.$window=e,this.onInit()}return t.prototype.onInit=function(){var n=this;this.$window.scrollTo(0,0),this.$http({method:"GET",url:"https://spreadsheets.google.com/feeds/list/1VPC3UFQ-7PL0TLkCKIO3gcJcIZZh5EmL2HfrJc4H11o/od6/public/values?alt=json-in-script&callback=x"}).then(function(t){var o=JSON.parse(t.data.toString().substring(18,t.data.toString().length-2)).feed.entry;o.forEach(function(t){t.ide=t.id.$t.substring(t.id.$t.length-5,t.id.$t.length)}),n.post=o.filter(function(t){return t.ide==n.$stateParams.id})[0]})},t.prototype.getValue=function(t,o){return t?t["gsx$"+o].$t:void 0},t.prototype.fetchFeaturedImage=function(t){var o=this;this.$http({method:"GET",url:"http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/media/"+t}).then(function(t){o.post.featured_image=t.data})},t.prototype.changeUrl=function(t){window.location=t,this.$window.scrollTo(0,0)},t.$inject=["$scope","$http","$stateParams","$window"],t}();angular.module("mainSite").component("postComponent",{controller:o,controllerAs:"$ctrl",templateUrl:"partials/blog/post.html"})}(post||(post={}));
"use strict";var main;!function(t){var i=function(){function t(t,i,n,o,e,s,a,r,h,l){this.$scope=t,this.$base64=i,this.$uibModal=n,this.$state=o,this.$stateParams=e,this.$window=s,this.$timeout=a,this.User=r,this.WordPressAPI=h,this.API=l,this.user=r,this.onInit()}return t.prototype.onInit=function(){this.title="Richard Wincott",this.currentRouteName=this.$state.current.name;var n=this;this.$scope.$on("stateChanged",function(t,i){n.currentRouteName=i.name,n.toggleMenu=!1}),this.$stateParams.id&&console.log(this.$stateParams.id),this.isViewerVisible=!1,null==this.$stateParams.id||(this.isViewerVisible=!0),this.loginStatus={isopen:!1}},t.prototype.loadBannerImage=function(){var i=this;this.API.bannerImages().then(function(t){i.images=t,i.randomNo=Math.floor(Math.random()*t.length)})},t.prototype.openLoginModal=function(){this.$uibModal.open({component:"loginComponent",backdrop:"static"})},t.prototype.openLinkedin=function(){window.open("http://www.linkedin.com/in/richard-wincott-91040b134","_blank")},t.prototype.changeUrl=function(t){this.isViewerVisible=!this.isViewerVisible,window.location=t,this.$window.scrollTo(0,0)},t.prototype.openUrl=function(t){window.open(t)},t.$inject=["$scope","$base64","$uibModal","$state","$stateParams","$window","$timeout","User","WordPressAPI","API"],t}();angular.module("mainSite").component("mainComponent",{controller:i,controllerAs:"$ctrl",templateUrl:"./partials/main/main.html"})}(main||(main={}));
"use strict";var login;!function(o){var t=function(){function o(o,t,n,s){this.$scope=o,this.$cookies=t,this.User=n,this.WordPressAPI=s,this.user=n,this.onInit()}return o.prototype.onInit=function(){},o.prototype.login=function(){var t=this;this.error="",this.loading=!0,this.user.token=void 0,this.user.information=void 0,this.WordPressAPI.token({username:this.username,password:this.password}).then(function(o){t.$cookies.putObject("globals",o),t.user.token=o,t.User.fetchMe(),t.error="<strong>SUCCESS</strong>: Logged in as <strong>"+t.user.token.user_display_name+"</strong>"},function(o){t.error=o.data.message}).finally(function(){t.loading=!1})},o.prototype.logout=function(){this.$cookies.remove("globals"),this.user.token=void 0,this.user.information=void 0,this.error=void 0},o.prototype.close=function(){this.$scope.$parent.$close()},o.$inject=["$scope","$cookies","User","WordPressAPI"],o}();angular.module("mainSite").component("loginComponent",{controller:t,controllerAs:"$ctrl",templateUrl:"loginModalContent.html"})}(login||(login={}));
"use strict";var tiles;!function(i){var e=function(){function i(i,e,t){this.$scope=i,this.$log=e,this.tilesService=t,this.onInit()}return i.prototype.onInit=function(){this.tilesVisible=!0,this.tiles2Visible=!1,this.tiles=this.tilesService.tiles,this.tiles2=this.tilesService.tiles2,this.tilesStatus={isopen1:!1,isopen2:!1,isopen3:!1,isopen4:!1,isopen5:!1,isopen6:!1,isopen7:!1},this.tile2Status={isopen1:!1,isopen2:!1,isopen3:!1,isopen4:!1,isopen5:!1,isopen6:!1,isopen7:!1,isopen8:!1,isopen9:!1,isopen10:!1,isopen11:!1}},i.prototype.changeUrl=function(i){this.isViewerVisible=!this.isViewerVisible,window.location=i},i.prototype.remove=function(i,e){1==i?this.tiles.splice(e,1):2==i&&this.tiles2.splice(e,1)},i.prototype.openUrl=function(i){window.open(i)},i.$inject=["$scope","$log","tilesService"],i}();angular.module("mainSite").component("tilesComponent",{controller:e,controllerAs:"$ctrl",templateUrl:"partials/tiles/tiles.html"})}(tiles||(tiles={}));
"use strict";var tiles;tiles||(tiles={}),angular.module("mainSite").service("tilesService",function(){return{tiles:[{title:"Emoji Jump",thumbnail:"assets/img/mw27.jpg",status:"Ongoing",type:"Personal",url:"https://repentantsandykernel--richardwincott.repl.co/"},{title:"USBMusic (React)",thumbnail:"assets/img/mw26.jpg",status:"Completed",type:"Personal",url:"../usbmusic",githuburl:"https://github.com/richwincott/usbmusic"},{title:"Chat",thumbnail:"assets/img/mw25.jpg",status:"Ongoing",type:"Demo",url:"www.richardwincott.co.uk:8181"},{title:"Spikes",thumbnail:"assets/img/mw24.jpg",status:"Complete",type:"Game",url:"www.richardwincott.co.uk:8282",githuburl:"https://github.com/richwincott/spikes"},{title:"Mario",thumbnail:"assets/img/mw23.jpg",status:"Ongoing",type:"Game",url:"../mario",githuburl:"https://github.com/richwincott/mario"},{title:"Account Login Demo C#",thumbnail:"assets/img/mw22.jpg",status:"Complete",type:"Demo",url:"../shop"},{title:"Blackhawks Dashboard",thumbnail:"assets/img/mw21.jpg",status:"Employment",type:"Work",url:"content/img/blackhawks-dashboard-1.jpg"},{title:"FortressGB Website",thumbnail:"assets/img/mw20.jpg",status:"Employment",type:"Work",url:"http://www.fortressgb.com/"},{title:"Friends of Pishiobury",thumbnail:"assets/img/mw1.jpg",status:"Ongoing",type:"Work",url:"http://www.friendsofpishioburypark.co.uk/"},{title:"EDF Energy Internship",thumbnail:"assets/img/mw0.jpg",status:"Completed",type:"Work",url:"../projects/portfolio"},{title:"Parallax Demo",thumbnail:"assets/img/mw15.jpg",status:"Completed",type:"Demo",url:"../projects/parallax"},{title:"WordPress Site",thumbnail:"assets/img/mw16.jpg",status:"N/A",type:"Development",url:"../wordpress"}],tiles2:[{title:"AJAX Page Load Demo",thumbnail:"assets/img/mw17.jpg",status:"Completed",type:"Demo",url:"../projects/ajaxpageload"},{title:"iOS7 MusicApp Redesign",thumbnail:"assets/img/mw18.jpg",status:"Completed",type:"Demo",url:"../projects/ios7musicappredesign/showcase.pdf"},{title:"my tumblr.",thumbnail:"assets/img/mw14.jpg",status:"Ongoing",type:"Personal",url:"../projects/mytumblr"},{title:"My Films",thumbnail:"assets/img/mw13.jpg",status:"Completed",type:"Personal",url:"../films"},{title:"Facebook Slide Menu",thumbnail:"assets/img/mw12.jpg",status:"Completed",type:"Demo",url:"../projects/fbslidemenu"},{title:"Prints",thumbnail:"assets/img/mw2.jpg",status:"In Progress",type:"Work",url:"../projects/prints"},{title:"Panels",thumbnail:"assets/img/mw3.jpg",status:"Completed",type:"Practice",url:"../projects/panels"},{title:"USBMusicv2",thumbnail:"assets/img/mw4.jpg",status:"Completed",type:"Personal",url:"../projects/usbmusicv2"},{title:"CSS Zen Gdn. Recreation",thumbnail:"assets/img/mw8.jpg",status:"Completed",type:"Practice",url:"../projects/csszengardenrecreation"},{title:"PHP Uploader",thumbnail:"assets/img/mw9.jpg",status:"Completed",type:"Personal",url:"../projects/phpuploader"},{title:"ASP/Javascript Chat",thumbnail:"assets/img/mw10.jpg",status:"Completed",type:"Personal",url:"../projects/aspjavascriptchat"},{title:"Richs Proxy",thumbnail:"assets/img/mw11.jpg",status:"Completed",type:"Personal",url:"../projects/richsproxy"}]}});
"use strict";var view;!function(t){var i=function(){function t(t,i,e,s){this.$scope=t,this.$stateParams=i,this.$sce=e,this.tilesService=s,this.onInit()}return t.prototype.onInit=function(){this.tiles=this.tilesService.tiles,this.tiles2=this.tilesService.tiles2;var t=this.$stateParams.id,i=this.$stateParams.groupId,e="";1==i?e=this.tiles[t].url:2==i&&(e=this.tiles2[t].url),this.trustedURL=this.$sce.trustAsResourceUrl(e)},t.prototype.changeUrl=function(t){this.isViewerVisible=!this.isViewerVisible,window.location=t},t.$inject=["$scope","$stateParams","$sce","tilesService"],t}();angular.module("mainSite").component("viewComponent",{controller:i,controllerAs:"$ctrl",templateUrl:"partials/view/view.html"})}(view||(view={}));