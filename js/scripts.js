'use strict';

angular.module('mainSite', ['ui.router', 'ui.bootstrap', 'angular-parallax', 'ngAnimate', 'ngSanitize', 'base64', 'ngCookies']).run(["$rootScope", "$transitions", function ($rootScope, $transitions) {
    $transitions.onSuccess({}, function (trans) {
        $rootScope.$broadcast("stateChanged", trans.router.globals.current);
    });
}]);
"use strict";

routing.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state("index", {
        component: "mainComponent"
    }).state("index.tiles", {
        url: "/",
        component: "tilesComponent"
    }).state("index.view", {
        url: "/:groupId/:id",
        component: "viewComponent"
    }).state("index.blog", {
        url: "/blog",
        component: "blogComponent"
    }).state("index.post", {
        url: "/blog/:id",
        component: "postComponent"
    }).state("index.about", {
        url: "/about",
        templateUrl: "aboutModalContent.html"
    });
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');
}
;
angular.module('mainSite').config(routing);
'use strict';

var mainSite;
(function (mainSite) {
    interceptor.$inject = ["$httpProvider"];
    function interceptor($httpProvider) {
        $httpProvider.interceptors.push(['$rootScope', '$q', '$location', '$cookies', function ($rootScope, $q, $location, $cookies) {
            return {
                'request': function request(config) {
                    config.headers = config.headers || {};
                    //Assume that you store the token in a cookie.
                    var globals = $cookies.getObject('globals') || {};
                    //If the cookie has the token
                    //add the Authorization header in each request
                    if (globals.token) {
                        config.headers.Authorization = 'Bearer ' + globals.token;
                    }
                    return config;
                }
            };
        }]);
    }
    ;
    angular.module('mainSite').config(interceptor);
})(mainSite || (mainSite = {}));
"use strict";
"use strict";

var api;
(function (api) {
    var Api = /** @class */function () {
        function Api($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.onInit();
        }
        Api.prototype.onInit = function () {
            this.basePath = "";
        };
        Api.prototype.bannerImages = function () {
            var d = this.$q.defer();
            this.$http.get(this.basePath + 'banner_images.json').then(function (response) {
                d.resolve(response.data);
            }, function (error) {
                d.reject(error);
            });
            return d.promise;
        };
        Api.$inject = ["$http", "$q"];
        return Api;
    }();
    ;
    angular.module("mainSite").service("API", Api);
})(api || (api = {}));
"use strict";

var user;
(function (user_1) {
    var User = /** @class */function () {
        function User($cookies, WordPressAPI) {
            this.$cookies = $cookies;
            this.WordPressAPI = WordPressAPI;
            this.onInit();
        }
        User.prototype.onInit = function () {
            if (!this.token && this.$cookies.getObject("globals")) {
                this.token = this.$cookies.getObject("globals");
                if (!this.information) {
                    this.fetchMe();
                }
            }
        };
        User.prototype.fetchMe = function () {
            var _this = this;
            this.WordPressAPI.fetchMe().then(function (user) {
                _this.information = user;
            });
        };
        User.$inject = ["$cookies", "WordPressAPI"];
        return User;
    }();
    ;
    angular.module("mainSite").service("User", User);
})(user || (user = {}));
'use strict';

var api;
(function (api) {
    var WordPressApi = /** @class */function () {
        function WordPressApi($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.onInit();
        }
        WordPressApi.prototype.onInit = function () {
            this.basePath = "http://www.richardwincott.co.uk/wordpress/wp-json/";
        };
        WordPressApi.prototype.fetchMe = function () {
            var d = this.$q.defer();
            this.$http.get(this.basePath + 'wp/v2/users/me').then(function (response) {
                d.resolve(response.data);
            }, function (error) {
                d.reject(error);
            });
            return d.promise;
        };
        WordPressApi.prototype.token = function (params) {
            var d = this.$q.defer();
            this.$http.post(this.basePath + 'jwt-auth/v1/token', params).then(function (response) {
                d.resolve(response.data);
            }, function (error) {
                d.reject(error);
            });
            return d.promise;
        };
        WordPressApi.$inject = ["$http", "$q"];
        return WordPressApi;
    }();
    ;
    angular.module("mainSite").service("WordPressAPI", WordPressApi);
})(api || (api = {}));
'use strict';

var blog;
(function (blog) {
    var blogController = /** @class */function () {
        function blogController($scope, $http, User) {
            this.$scope = $scope;
            this.$http = $http;
            this.User = User;
            this.archives = [];
            this.connError = false;
            this.user = User;
            this.onInit();
        }
        blogController.prototype.onInit = function () {
            var _this = this;
            this.$http({
                method: 'GET',
                // url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/posts'
                url: 'https://spreadsheets.google.com/feeds/list/1VPC3UFQ-7PL0TLkCKIO3gcJcIZZh5EmL2HfrJc4H11o/od6/public/values?alt=json-in-script&callback=x'
            }).then(function (response) {
                var data = JSON.parse(response.data.toString().substring(18, response.data.toString().length - 2)).feed.entry;
                _this.posts = data;
                _this.posts.forEach(function (post) {
                    post.ide = post.id.$t.substring(post.id.$t.length - 5, post.id.$t.length);
                    if (_this.archives.indexOf(post.gsx$date.$t.substring(0, post.gsx$date.$t.length - 3)) == -1) {
                        _this.archives.push(post.gsx$date.$t.substring(0, post.gsx$date.$t.length - 3));
                    }
                });
                /* that.posts = response.data;
                for (var i = 0; i < that.posts.length; i++)
                {
                    that.fetchReplies(i, that.posts[i].id);
                    if (that.posts[i].featured_media > 0)
                        that.fetchFeaturedImage(i, that.posts[i].featured_media);
                } */
            }, function () {
                _this.connError = true;
            });
        };
        blogController.prototype.getValue = function (item, key) {
            return item['gsx$' + key].$t;
        };
        blogController.prototype.fetchReplies = function (index, id) {
            var that = this;
            this.$http({
                method: 'GET',
                url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/comments?post=' + id
            }).then(function (response) {
                that.posts[index].comments = response.data;
            });
        };
        blogController.prototype.fetchFeaturedImage = function (index, id) {
            var that = this;
            this.$http({
                method: 'GET',
                url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/media/' + id
            }).then(function (response) {
                that.posts[index].featured_image = response.data;
            });
        };
        blogController.$inject = ["$scope", "$http", "User"];
        return blogController;
    }();
    ;
    angular.module('mainSite').component('blogComponent', {
        controller: blogController,
        controllerAs: "$ctrl",
        templateUrl: "partials/blog/blog.html"
    });
})(blog || (blog = {}));
'use strict';

var post;
(function (post_1) {
    var postController = /** @class */function () {
        function postController($scope, $http, $stateParams, $window) {
            this.$scope = $scope;
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.$window = $window;
            this.onInit();
        }
        postController.prototype.onInit = function () {
            var _this = this;
            this.$window.scrollTo(0, 0);
            this.$http({
                method: 'GET',
                // url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/posts'
                url: 'https://spreadsheets.google.com/feeds/list/1VPC3UFQ-7PL0TLkCKIO3gcJcIZZh5EmL2HfrJc4H11o/od6/public/values?alt=json-in-script&callback=x'
            }).then(function (response) {
                var data = JSON.parse(response.data.toString().substring(18, response.data.toString().length - 2)).feed.entry;
                var posts = data;
                posts.forEach(function (post) {
                    post.ide = post.id.$t.substring(post.id.$t.length - 5, post.id.$t.length);
                });
                _this.post = posts.filter(function (post) {
                    return post.ide == _this.$stateParams.id;
                })[0];
            });
            /* this.$http({
                method: 'GET',
                url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/posts/' + that.$stateParams.id
            })
            .then(function (response) {
                that.post = response.data;
                      if (that.post.featured_media > 0)
                    that.fetchFeaturedImage(that.post.featured_media);
            });
                  this.$http({
                method: 'GET',
                url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/comments?post=' + that.$stateParams.id
            })
            .then(function (response) {
                that.comments = response.data;
            }); */
        };
        postController.prototype.getValue = function (item, key) {
            return item ? item['gsx$' + key].$t : undefined;
        };
        postController.prototype.fetchFeaturedImage = function (id) {
            var that = this;
            this.$http({
                method: 'GET',
                url: 'http://www.richardwincott.co.uk/wordpress/wp-json/wp/v2/media/' + id
            }).then(function (response) {
                that.post.featured_image = response.data;
            });
        };
        postController.prototype.changeUrl = function (url) {
            window.location = url;
            this.$window.scrollTo(0, 0);
        };
        ;
        postController.$inject = ["$scope", "$http", "$stateParams", "$window"];
        return postController;
    }();
    ;
    angular.module('mainSite').component('postComponent', {
        controller: postController,
        controllerAs: "$ctrl",
        templateUrl: "partials/blog/post.html"
    });
})(post || (post = {}));
"use strict";

var login;
(function (login) {
    var loginContoller = /** @class */function () {
        function loginContoller($scope, $cookies, User, WordPressAPI) {
            this.$scope = $scope;
            this.$cookies = $cookies;
            this.User = User;
            this.WordPressAPI = WordPressAPI;
            this.user = User;
            this.onInit();
        }
        loginContoller.prototype.onInit = function () {};
        loginContoller.prototype.login = function () {
            var _this = this;
            this.error = "";
            this.loading = true;
            this.user.token = undefined;
            this.user.information = undefined;
            this.WordPressAPI.token({
                username: this.username,
                password: this.password
            }).then(function (token) {
                _this.$cookies.putObject('globals', token);
                _this.user.token = token;
                _this.User.fetchMe();
                _this.error = "<strong>SUCCESS</strong>: Logged in as <strong>" + _this.user.token.user_display_name + "</strong>";
            }, function (error) {
                _this.error = error.data.message;
            })["finally"](function () {
                _this.loading = false;
            });
        };
        loginContoller.prototype.logout = function () {
            this.$cookies.remove('globals');
            this.user.token = undefined;
            this.user.information = undefined;
            this.error = undefined;
        };
        loginContoller.prototype.close = function () {
            this.$scope.$parent.$close();
        };
        loginContoller.$inject = ["$scope", "$cookies", "User", "WordPressAPI"];
        return loginContoller;
    }();
    angular.module("mainSite").component("loginComponent", {
        controller: loginContoller,
        controllerAs: '$ctrl',
        templateUrl: 'loginModalContent.html'
    });
})(login || (login = {}));
"use strict";

var main;
(function (main) {
    var mainController = /** @class */function () {
        function mainController($scope, $base64, $uibModal, $state, $stateParams, $window, $timeout, User, WordPressAPI, API) {
            this.$scope = $scope;
            this.$base64 = $base64;
            this.$uibModal = $uibModal;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.$window = $window;
            this.$timeout = $timeout;
            this.User = User;
            this.WordPressAPI = WordPressAPI;
            this.API = API;
            this.user = User;
            this.onInit();
        }
        mainController.prototype.onInit = function () {
            this.title = "Richard Wincott";
            this.currentRouteName = this.$state.current.name;
            var that = this;
            this.$scope.$on('stateChanged', function (event, state) {
                that.currentRouteName = state.name;
                that.toggleMenu = false;
            });
            if (this.$stateParams.id) console.log(this.$stateParams.id);
            this.isViewerVisible = false;
            if (this.$stateParams.id == undefined) {
                // do nothing
            } else {
                this.isViewerVisible = true;
            }
            this.loginStatus = {
                isopen: false
            };
        };
        mainController.prototype.loadBannerImage = function () {
            var _this = this;
            this.API.bannerImages().then(function (images) {
                _this.images = images;
                _this.randomNo = Math.floor(Math.random() * images.length);
            });
        };
        mainController.prototype.openLoginModal = function () {
            var that = this;
            var loginModal = this.$uibModal.open({
                component: "loginComponent",
                backdrop: 'static'
            });
        };
        ;
        mainController.prototype.openLinkedin = function () {
            window.open("http://www.linkedin.com/in/richard-wincott-91040b134", "_blank");
        };
        mainController.prototype.changeUrl = function (url) {
            this.isViewerVisible = !this.isViewerVisible;
            window.location = url;
            this.$window.scrollTo(0, 0);
        };
        ;
        mainController.prototype.openUrl = function (url) {
            window.open(url);
        };
        ;
        mainController.$inject = ["$scope", "$base64", "$uibModal", "$state", "$stateParams", "$window", "$timeout", "User", "WordPressAPI", "API"];
        return mainController;
    }();
    ;
    angular.module('mainSite').component('mainComponent', {
        controller: mainController,
        controllerAs: '$ctrl',
        templateUrl: "./partials/main/main.html"
    });
})(main || (main = {}));
"use strict";

var tiles;
(function (tiles) {
    var tilesController = /** @class */function () {
        function tilesController($scope, $log, tilesService) {
            this.$scope = $scope;
            this.$log = $log;
            this.tilesService = tilesService;
            this.onInit();
        }
        tilesController.prototype.onInit = function () {
            this.tilesVisible = true;
            this.tiles2Visible = false;
            this.tiles = this.tilesService.tiles;
            this.tiles2 = this.tilesService.tiles2;
            this.tilesStatus = {
                isopen1: false,
                isopen2: false,
                isopen3: false,
                isopen4: false,
                isopen5: false,
                isopen6: false,
                isopen7: false
            };
            this.tile2Status = {
                isopen1: false,
                isopen2: false,
                isopen3: false,
                isopen4: false,
                isopen5: false,
                isopen6: false,
                isopen7: false,
                isopen8: false,
                isopen9: false,
                isopen10: false,
                isopen11: false
            };
        };
        tilesController.prototype.changeUrl = function (url) {
            this.isViewerVisible = !this.isViewerVisible;
            window.location = url;
        };
        ;
        tilesController.prototype.remove = function (group, id) {
            if (group == 1) {
                this.tiles.splice(id, 1);
            } else if (group == 2) {
                this.tiles2.splice(id, 1);
            }
        };
        ;
        tilesController.prototype.openUrl = function (url) {
            window.open(url);
        };
        ;
        tilesController.$inject = ["$scope", "$log", "tilesService"];
        return tilesController;
    }();
    ;
    angular.module('mainSite').component('tilesComponent', {
        controller: tilesController,
        controllerAs: '$ctrl',
        templateUrl: "partials/tiles/tiles.html"
    });
})(tiles || (tiles = {}));
"use strict";

var tiles;
(function (tiles) {
    function tilesService() {
        return {
            tiles: [{
                "title": "Emoji Jump",
                "thumbnail": "assets/img/mw27.jpg",
                "status": "Ongoing",
                "type": "Personal",
                "url": "https://repentantsandykernel--richardwincott.repl.co/"
            }, {
                "title": "USBMusic (React)",
                "thumbnail": "assets/img/mw26.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../usbmusic",
                "githuburl": "https://github.com/richwincott/usbmusic"
            }, {
                "title": "Chat",
                "thumbnail": "assets/img/mw25.jpg",
                "status": "Ongoing",
                "type": "Demo",
                "url": "www.richardwincott.co.uk:8181"
            }, {
                "title": "Spikes",
                "thumbnail": "assets/img/mw24.jpg",
                "status": "Complete",
                "type": "Game",
                "url": "www.richardwincott.co.uk:8282",
                "githuburl": "https://github.com/richwincott/spikes"
            }, {
                "title": "Mario",
                "thumbnail": "assets/img/mw23.jpg",
                "status": "Ongoing",
                "type": "Game",
                "url": "../mario",
                "githuburl": "https://github.com/richwincott/mario"
            }, {
                "title": "Account Login Demo C#",
                "thumbnail": "assets/img/mw22.jpg",
                "status": "Complete",
                "type": "Demo",
                "url": "../shop"
            }, {
                "title": "Blackhawks Dashboard",
                "thumbnail": "assets/img/mw21.jpg",
                "status": "Employment",
                "type": "Work",
                "url": "content/img/blackhawks-dashboard-1.jpg"
            }, {
                "title": "FortressGB Website",
                "thumbnail": "assets/img/mw20.jpg",
                "status": "Employment",
                "type": "Work",
                "url": "http://www.fortressgb.com/"
            }, {
                "title": "Friends of Pishiobury",
                "thumbnail": "assets/img/mw1.jpg",
                "status": "Ongoing",
                "type": "Work",
                "url": "http://www.friendsofpishioburypark.co.uk/"
            }, {
                "title": "EDF Energy Internship",
                "thumbnail": "assets/img/mw0.jpg",
                "status": "Completed",
                "type": "Work",
                "url": "../projects/portfolio"
            }, {
                "title": "Parallax Demo",
                "thumbnail": "assets/img/mw15.jpg",
                "status": "Completed",
                "type": "Demo",
                "url": "../projects/parallax"
            }, {
                "title": "WordPress Site",
                "thumbnail": "assets/img/mw16.jpg",
                "status": "N/A",
                "type": "Development",
                "url": "../wordpress"
            }],
            tiles2: [{
                "title": "AJAX Page Load Demo",
                "thumbnail": "assets/img/mw17.jpg",
                "status": "Completed",
                "type": "Demo",
                "url": "../projects/ajaxpageload"
            }, {
                "title": "iOS7 MusicApp Redesign",
                "thumbnail": "assets/img/mw18.jpg",
                "status": "Completed",
                "type": "Demo",
                "url": "../projects/ios7musicappredesign/showcase.pdf"
            }, {
                "title": "my tumblr.",
                "thumbnail": "assets/img/mw14.jpg",
                "status": "Ongoing",
                "type": "Personal",
                "url": "../projects/mytumblr"
            }, {
                "title": "My Films",
                "thumbnail": "assets/img/mw13.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../films"
            }, {
                "title": "Facebook Slide Menu",
                "thumbnail": "assets/img/mw12.jpg",
                "status": "Completed",
                "type": "Demo",
                "url": "../projects/fbslidemenu"
            }, {
                "title": "Prints",
                "thumbnail": "assets/img/mw2.jpg",
                "status": "In Progress",
                "type": "Work",
                "url": "../projects/prints"
            }, {
                "title": "Panels",
                "thumbnail": "assets/img/mw3.jpg",
                "status": "Completed",
                "type": "Practice",
                "url": "../projects/panels"
            }, {
                "title": "USBMusicv2",
                "thumbnail": "assets/img/mw4.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../projects/usbmusicv2"
            }, {
                "title": "CSS Zen Gdn. Recreation",
                "thumbnail": "assets/img/mw8.jpg",
                "status": "Completed",
                "type": "Practice",
                "url": "../projects/csszengardenrecreation"
            }, {
                "title": "PHP Uploader",
                "thumbnail": "assets/img/mw9.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../projects/phpuploader"
            }, {
                "title": "ASP/Javascript Chat",
                "thumbnail": "assets/img/mw10.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../projects/aspjavascriptchat"
            }, {
                "title": "Richs Proxy",
                "thumbnail": "assets/img/mw11.jpg",
                "status": "Completed",
                "type": "Personal",
                "url": "../projects/richsproxy"
            }]
        };
    }
    angular.module('mainSite').service('tilesService', tilesService);
})(tiles || (tiles = {}));
"use strict";

var view;
(function (view) {
    var viewController = /** @class */function () {
        function viewController($scope, $stateParams, $sce, tilesService) {
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            this.$sce = $sce;
            this.tilesService = tilesService;
            this.onInit();
        }
        viewController.prototype.onInit = function () {
            this.tiles = this.tilesService.tiles;
            this.tiles2 = this.tilesService.tiles2;
            var id = this.$stateParams.id;
            var groupId = this.$stateParams.groupId;
            var url = "";
            if (groupId == 1) url = this.tiles[id].url;else if (groupId == 2) url = this.tiles2[id].url;
            this.trustedURL = this.$sce.trustAsResourceUrl(url);
        };
        viewController.prototype.changeUrl = function (url) {
            this.isViewerVisible = !this.isViewerVisible;
            window.location = url;
        };
        ;
        viewController.$inject = ["$scope", "$stateParams", "$sce", "tilesService"];
        return viewController;
    }();
    ;
    angular.module('mainSite').component('viewComponent', {
        controller: viewController,
        controllerAs: "$ctrl",
        templateUrl: "partials/view/view.html"
    });
})(view || (view = {}));