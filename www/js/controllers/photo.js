/**
 * Created by upamune on 15/12/31.
 */

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state) {

  var options = {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    popoverOptions: Camera.PopoverOptions,
    targetWidth: 500,
    targetHeightWidth: 500,
    saveToPhotoAlbum: false
  };

  $scope.takePhoto = function() {
    "use strict";
    console.log('take photo was clicked');
    //Camera Plugin

    options.sourceType = Camera.PictureSourceType.CAMERA;

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," + photo;
      $state.go('tab.photo-detail');
    });


  };

  $scope.choosePhoto = function() {
    "use strict";
    console.log('will link up to photoLibrary');

    options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," + photo;
      console.log($rootScope.imgURI);
      $state.go('tab.photo-detail');
    });
  };

});
