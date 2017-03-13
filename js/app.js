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




		.controller('AppController', ['$rootScope', '$scope', '$mdSidenav', '$log', '$location', appController])

		.controller('LeftCtrl', ['$rootScope', '$scope', leftController])

		.controller('HomeCtrl', ['$scope', homeCtrl])

		.controller('VideoBlogsCtrl', ['$scope', '$window', videoBlogsCtrl])

		.controller('ChargesCtrl', ['$scope', chargesCtrl])

		.controller('ContactMeCtrl', ['$scope', contactMeCtrl]);





	// Controller functions

	function appController($rootScope, $scope, $mdSidenav, $log, $location) {
		// console.log($location);

		$scope.navTitle = "Home";

		$rootScope.navigationMenu = [
				{ name: 'Home', icon: 'home', 'url': '#/home'},
				// { name: 'Blogs', icon: 'description'},
				{ name: 'Video blogs', icon: 'videocam', 'url': '#/video_blogs'},
				{ name: 'Skills', icon: 'code', 'url': '#/skills'},
				{ name: 'Project', icon: 'view_modules', 'url': '#/projects'},
				{ name: 'Experience', icon: 'linear_scale', 'url': '#/experience'},
				{ name: 'Charges', icon: 'attach_money', 'url': '#/charges'},
				{ name: 'Contact me', icon: 'phone', 'url': '#/contact_me'}
			];

		$rootScope.clientTestimonials = [
				{ client_photo:'img/icon.png', name:'Rahul Singh', designation:'Founder', company:'Ithaka', website:'www.ithaka.com', logo:'img/icon.png', comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'},
				{ client_photo:'img/icon.png', name:'Rahul Singh', designation:'Founder', company:'Ithaka', website:'www.ithaka.com', logo:'img/icon.png', comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'},
				{ client_photo:'img/icon.png', name:'Rahul Singh', designation:'Founder', company:'Ithaka', website:'www.ithaka.com', logo:'img/icon.png', comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'},
			];

		$scope.changeRightScreen = function($index){
			$scope.currentHome = $index;
			$scope.navTitle = $rootScope.navigationMenu[$index].name;
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



		switch($location.$$path){
			case '/home':
				$scope.changeRightScreen($scope.NAV_HOME);
			break;
			case '/video_blogs':
				$scope.changeRightScreen($scope.NAV_VIDEO_BLOGS);
			break;
			case '/skills':
				$scope.changeRightScreen($scope.NAV_SKILLS);
			break;
			case '/projects':
				$scope.changeRightScreen($scope.NAV_PROJECT);
			break;
			case '/experience':
				$scope.changeRightScreen($scope.NAV_EXPERIENCE);
			break;
			case '/charges':
				$scope.changeRightScreen($scope.NAV_CHARGES);
			break;
			case '/contact_me':
				$scope.changeRightScreen($scope.NAV_CONTACT_ME);
			break;
			default:
				$scope.changeRightScreen($scope.NAV_HOME);
			break;
		}


		$scope.openSidenav = function () {
			$mdSidenav('left').open();
		};
	}

	function leftController($rootScope, $scope){

		// $scope.navigationMenu = $rootScope.navigationMenu;

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
							{ title: 'Consulting', amount: '2000', image:'img/charges/consulting.png' }
						]
			},
			{
				name: "Mobile apps",
				charges:[
							{ title: 'Android', amount: '1200', image:'img/charges/android.png' },
							{ title: 'iOS', amount: '1200', image:'img/charges/ios.png' },
							{ title: 'Hybrid app', amount: '1200', image:'img/charges/hybrid.png' },
						]
			},
			{
				name: "Front-end",
				charges:[
							{ title: 'Web designing', amount: '1200', image: 'img/charges/web-development.png' },
						]
			},
			{
				name: "Backend",
				charges:[
							{ title: 'Node.js', amount: '1200', image: 'img/charges/nodejs.png' },
							{ title: 'PHP Developer', amount: '1200', image: 'img/charges/php-developer.png' },
						]
			},
			{
				name: "Misc",
				charges:[
							{ title: 'Server configuration', amount: '1500', image:'img/charges/server.png' },
						]
			},
			{
				name: "Design",
				charges:[
							{ title: 'Photoshop design', amount: '1200', image:'img/charges/photoshop.png' },
						]
			},
		];
	}

	function contactMeCtrl($scope){
		console.log('dfsd');
	}





})();