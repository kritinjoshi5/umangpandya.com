(function(){

	angular.module('UmangPandyaApp', ['ngMaterial'])

		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('yellow');
			// $mdThemingProvider.theme('docs-dark', 'default')
			// 	.primaryPalette('yellow')
			// 	.accentPalette('light-blue')
			// 	.dark();
			// $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
		 //  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
		 //  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
		 //  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
		})




		.controller('AppController', ['$scope', '$mdSidenav', appController])

		.controller('LeftCtrl', ['$scope', leftController])

		.controller('HomeCtrl', ['$scope', homeCtrl])

		.controller('VideoBlogsCtrl', ['$scope', '$window', videoBlogsCtrl])

		.controller('ChargesCtrl', ['$scope', chargesCtrl]);





	// Controller functions

	function appController($scope, $mdSidenav) {

			$scope.currentHome = 0;

			$scope.changeRightScreen = function($index){
				$scope.currentHome = $index;
				$mdSidenav('left').close();
			}

			$scope.NAV_HOME = 0;
			// $scope.NAV_BLOGS = 1;
			$scope.NAV_VIDEO_BLOGS = 1;
			$scope.NAV_SKILLS = 2;
			$scope.NAV_PROJECT = 3;
			$scope.NAV_EXPERIENCE = 4;
			$scope.NAV_CHARGES = 5;
			$scope.NAV_CONTACT_ME = 6;

			$scope.openSidenav = function () {
				$mdSidenav('left').open()
					.then(function () {
						$log.debug("open LEFT is done");
					});
			};
	}

	function leftController($scope){

			$scope.navigationMenu = [
				{ name: 'Home', icon: 'home'},
				// { name: 'Blogs', icon: 'description'},
				{ name: 'Video blogs', icon: 'videocam'},
				{ name: 'Skills', icon: 'code'},
				{ name: 'Project', icon: 'view_modules'},
				{ name: 'Experience', icon: 'linear_scale'},
				{ name: 'Charges', icon: 'attach_money'},
				{ name: 'Contact me', icon: 'phone'}
			];

		}




		function rightController($scope){
			$scope.selectedPage = 0;
		}





		function homeCtrl($scope){
			$scope.selectedDeveloper = 0;
			$scope.developmentType = [
				{ name:'Android Developer', image:'img/android-developer.png'},
				{ name:'Web Developer', image:'img/web-developer.png'}
			];

			$scope.showPrevious = function(){
				$scope.selectedDeveloper--;
				if( $scope.selectedDeveloper < 0 ){
					$scope.selectedDeveloper = $scope.developmentType.length - 1;
				}
			}

			$scope.showNext = function(){
				$scope.selectedDeveloper++;
				if( $scope.selectedDeveloper > $scope.developmentType.length - 1 ){
					$scope.selectedDeveloper = 0;
				}
			}

		}






		function videoBlogsCtrl($scope, $window){
			$scope.YouTubeChannel = [
				{	title: 'Android Terminology',
					description: 'Videos on tips and tricks on Android development\nWhat to do before starting any Android project',
					image: 'img/android-terminology-thumbnail.jpg',
					link: 'https://www.youtube.com/channel/UCnym02i35O92ktkZZ1ebzqQ',
					tags:[ 'Learning', 'Tips' ] },
				{	title: 'Pant Chor',
					description: 'Funny videos on random topics\nPant Chor - Not what it sounds like.',
					image: 'img/pant-chor-thumbnail.jpg',
					link: 'https://www.youtube.com/channel/UC92guXpRq35iaSY8AE6gG-w',
					tags:[ 'Funny' ] }
			];

			$scope.openLink = function(link){
				// alert(link);
				$window.open(link, '_blank');
			}
		}


		function chargesCtrl($scope){
			$scope.chargeList = [
				{
					name: "Consulting",
					charges:[
								{ title: 'Consulting', amount: '1200', image:'img/charges/consulting.png' }
							]
				},
				{
					name: "Mobile apps",
					charges:[
								{ title: 'Android', amount: '500', image:'img/charges/android.png' },
								{ title: 'iOS', amount: '650', image:'img/charges/ios.png' },
								{ title: 'Hybrid app', amount: '400', image:'img/charges/hybrid.png' },
							]
				},
				{
					name: "Backend",
					charges:[
								{ title: 'Node.js', amount: '600', image: 'img/charges/nodejs.png' },
								{ title: 'PHP Developer', amount: '400', image: 'img/charges/php-developer.png' },
							]
				},
				{
					name: "Misc",
					charges:[
								{ title: 'Server configuration', amount: '800', image:'img/charges/server.png' },
							]
				},
				{
					name: "Design",
					charges:[
								{ title: 'Photoshop design', amount: '500', image:'img/charges/photoshop.png' },
							]
				},
			];
		}





})();