'use strict';

/**
 * @ngdoc function
 * @name bikesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bikesApp
 */
angular.module('bikesApp')
  .controller('MainCtrl', function($scope) {

    var $ = function(id) {
      return document.getElementById(id)
    };

    var selection;
    $scope.item;

    $scope.$watch('selection', function() {
      console.log(selection);
    })

    var canvas = this.__canvas = new fabric.Canvas('c', {
      preserveObjectStacking: true
    });
    fabric.Image.fromURL('images/dropbar-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 125,
        top: canvas.height / 2 - 151
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/dropout-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 251,
        top: canvas.height / 2 + 76
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/stem-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 93,
        top: canvas.height / 2 - 158
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/headset-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 98,
        top: canvas.height / 2 - 133
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/seatpost.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 170,
        top: canvas.height / 2 - 170
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/sete-oldskool-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 205,
        top: canvas.height / 2 - 200
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/klinge-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 110,
        top: canvas.height / 2 + 90
      }).scale(1);
      canvas.add(oImg);
      canvas.sendBackwards(oImg);
    });
    fabric.Image.fromURL('images/kjede-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 255,
        top: canvas.height / 2 + 85
      }).scale(1);
      canvas.add(oImg);
      canvas.sendBackwards(oImg);
    });
    fabric.Image.fromURL('images/krank-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 93,
        top: canvas.height / 2 + 105
      }).scale(1);
      canvas.add(oImg);
      canvas.bringToFront(oImg);
    });
    fabric.Image.fromURL('images/deepv-svart-machinedR.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 370,
        top: canvas.height / 2 - 30
      }).scale(1);
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
    fabric.Image.fromURL('images/deepv-svart-machinedF.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 52,
        top: canvas.height / 2 - 30
      }).scale(1);
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
    fabric.Image.fromURL('images/dekk-svartR.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 376,
        top: canvas.height / 2 - 37
      }).scale(1);
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
    fabric.Image.fromURL('images/dekk-svartF.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 47,
        top: canvas.height / 2 - 37
      }).scale(1);
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
    fabric.Image.fromURL('images/gaffel-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 + 122,
        top: canvas.height / 2 - 44
      }).scale(1);
      canvas.add(oImg);
    });
    fabric.Image.fromURL('images/ramme-svart.png', function(img) {
      var oImg = img.set({
        left: canvas.width / 2 - 250,
        top: canvas.height / 2 - 125,
        zindex: 1
      }).scale(1);
      canvas.add(oImg);
      canvas.bringToFront(oImg);
    });

    var objs = canvas.getObjects();
    console.log(objs);

    $scope.selectMarco = function() {
      selection = objs[4];
    }

    $scope.selectDropout = function() {
      selection = objs[5];
    }

    $scope.selectTiresF = function() {
      selection = objs[2];
    }

    $scope.selectTiresR = function() {
      selection = objs[0];
    }

    $scope.selectPinon = function() {
      selection = objs[12];
    }

    $scope.selectCadena = function() {
      selection = objs[13];
    }

    $scope.selectPedal = function() {
      selection = objs[14];
    }

    $scope.selectCabezas = function() {
      selection = objs[7];
    }

    $scope.selectSeatpost = function() {
      selection = objs[11];
    }

    $scope.selectManillar = function() {
      selection = objs[8];
    }

    $scope.colorblack = function() {
      selection.filters = [];
      selection.set({
        hasControls: false,
        hasBorders: false,
        selectable: false,
      });
      var tint = new fabric.Image.filters.Tint({
        color: '#222',
        opacity: 0.8
      });
      selection.filters.push(tint);
      selection.applyFilters(canvas.renderAll.bind(canvas));
    }

    $scope.colorred = function() {
      selection.filters = [];
      selection.set({
        hasControls: false,
        hasBorders: false,
        selectable: false,
      });
      var tint = new fabric.Image.filters.Tint({
        color: '#9a1616',
        opacity: 0.8
      });
      selection.filters.push(tint);
      selection.applyFilters(canvas.renderAll.bind(canvas));
    }

    $scope.colorblue = function() {
      selection.filters = [];
      selection.set({
        hasControls: false,
        hasBorders: false,
        selectable: false,
      });
      var tint = new fabric.Image.filters.Tint({
        color: '#16549a',
        opacity: 0.8
      });
      selection.filters.push(tint);
      selection.applyFilters(canvas.renderAll.bind(canvas));
    }

    $scope.colorgreen = function() {
      console.log(selection);
      selection.filters = [];
      selection.set({
        hasControls: false,
        hasBorders: false,
        selectable: false,
      });
      var tint = new fabric.Image.filters.Tint({
        color: '#018b59',
        opacity: 0.8
      });
      selection.filters.push(tint);
      selection.applyFilters(canvas.renderAll.bind(canvas));
      canvas.renderAll();
      console.log(selection._element)
    }

    $scope.changeFRueda = function(url) {
      selection = objs[3];
      selection.filters = [];
      selection._element.src = url;
      if(selection._filteredEl) {
        selection._filteredEl.src = url;
      }
      selection._originalElement.src = url;
      canvas.renderAll();
    }

    $scope.changeRRueda = function(url) {
      selection = objs[1];
      selection.filters = [];
      selection._element.src = url;
      if(selection._filteredEl) {
        selection._filteredEl.src = url;
      }
      selection._originalElement.src = url;
      canvas.renderAll();
    }

    $scope.changeHorquilla = function(url) {
      selection = objs[6];
      selection.filters = [];
      selection._element.src = url;
      if(selection._filteredEl) {
        selection._filteredEl.src = url;
      }
      selection._originalElement.src = url;
      canvas.renderAll();
    }

    $scope.changeSeat = function(url) {
      selection = objs[10];
      selection.filters = [];
      selection._element.src = url;
      if(selection._filteredEl) {
        selection._filteredEl.src = url;
      }
      selection._originalElement.src = url;
      canvas.renderAll();
    }

    $scope.changeManillar = function(url) {
      var objs;
      fabric.Image.fromURL(url, function(img) {

        objs = canvas.getObjects();
        objs[9].filters = [];
        objs[9]._element.src = url;
        if(objs[9]._filteredEl) {
          objs[9]._filteredEl.src = url;
        }
        objs[9]._originalElement.src = url;
        objs[9].set({
          'height': img.height
        });
        objs[9].set({
          'width': img.width
        });

        if (url === 'images/dropbar-svart.png') {
          objs[9].set({
            'left': canvas.width / 2 + 125
          });
          objs[9].set({
            'top': canvas.height / 2 - 151
          });
        }

        if (url === 'images/bullhorns-svart.png') {
          objs[9].set({
            'left': canvas.width / 2 + 134
          });
          objs[9].set({
            'top': canvas.height / 2 - 163
          });
        }

        if (url === 'images/riserbar-svart.png') {
          objs[9].set({
            'left': canvas.width / 2 + 125
          });
          objs[9].set({
            'top': canvas.height / 2 - 170
          });
        }
        canvas.renderAll();

      });
      objs = canvas.getObjects();
      selection = objs[9];
    }

    $scope.saveImg = function() {
      console.log('export image');
      if (!fabric.Canvas.supports('toDataURL')) {
        alert('This browser doesn\'t provide means to serialize canvas to an image');
      } else {
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        var randnum = Math.floor((Math.random() * 100000) + 1); //for unique file name.
        var filename = month + '' + day + '' + year + '' + hours + '' + minutes + '' + seconds + randnum;

        var fileURL = canvas.toDataURL('png');
        window.open(fileURL);
        var link = document.createElement('a');
        link.href = fileURL;
        link.download = 'design' + filename + '.png';
        link.click();
      }
    }

  });
