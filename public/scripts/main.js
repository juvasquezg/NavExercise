/**
 *  @author: juvasquezg
 *  @email: <juvasquez88@gmail.com>
 */
'use strict';


(function() {
  // Return ElementById
  var $ = function (id) {
    return document.getElementById(id);
  };

  var _$ = function (c) {
    return document.getElementsByClassName(c);
  };

  var Navegation = function (id, label, url, items) {
    this.id = id;
    this.label = label;
    this.url = url;
    this.items = items;
  };

  // globals
  var navegations = [];


  function doRequest (callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var textResponse = xhr.responseText;
        var jsonResponse = JSON.parse(textResponse);
        var items = jsonResponse.items;
        callback(null, items);
      }
    };
    xhr.open('GET', '/api/nav.json', true);
    xhr.send();
  }


  function init() {
    doRequest(loadNavegations);
  }


  function loadNavegations(err, items) {
    for (var i = 0; i < items.length; i++) {
      navegations.push(new Navegation(i, items[i].label, items[i].url, items[i].items));
    }
    createNav(navegations);
  }


  function createNav(navegations) {
      // Create Navegation
    for (var i = 0; i < navegations.length; i++) {
      $('items').appendChild(buildItem(navegations[i]));
      if (navegations[i].items.length !== 0) {
        $(navegations[i].id.toString()).appendChild(createUl(navegations[i].id));
        for (var j = 0; j < navegations[i].items.length; j++) {
          $('subitems' + navegations[i].id.toString()).appendChild(buildSubItem(navegations[i].items[j]));
        }
      }
    }
  }


  function createUl(id) {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'subitems' + id.toString());
    ul.setAttribute('class', 'subitems');
    return ul;
  }


  function buildSubItem(request) {
    var innerLink = document.createElement('a');
    innerLink.setAttribute('href', request.url);
    innerLink.appendChild(document.createTextNode(request.label));
    var li = document.createElement('li');
    li.appendChild(innerLink);
    return li;
  }


  function buildItem(request) {
    var innerLink = document.createElement('a');
    innerLink.setAttribute('href', request.url);
    innerLink.appendChild(document.createTextNode(request.label));
    innerLink.setAttribute('class', 'down');
    var li = document.createElement('li');
    li.appendChild(innerLink);
    li.setAttribute('id', request.id.toString());
    return li;
  }

  function hideNav() {
  	hideTranslucent();
    $('navegation').style.display = 'none';
    $('container').style.marginLeft = '0px';
    $('button-open').style.display = 'block';
    $('button-close').style.display = 'none';
    $('huge-logo').style.display = 'none';
  }

  function showNav () {
    showTranslucent();
    $('navegation').style.display = 'inline-block';
    $('container').style.marginLeft = '300px';
    $('button-open').style.display = 'none';
    $('button-close').style.display = 'block';
    $('huge-logo').style.display = 'block';
  }

  function showActiveSubItems (e) {
    var subitems = e.target.parentElement.getElementsByClassName('subitems');
    if (subitems.length !== 0 && e.target.nodeName === 'A') {
      if (e.target.className === 'down') {
        e.target.className = 'up';
      } else {
        e.target.className = 'down';
      }
      for (var i = 0; i < subitems.length;  i++) {
        if (subitems[i].style.display === 'block') {
          subitems[i].style.display = 'none';
          $('translucent').style.display = 'none';
        } else {
          subitems[i].style.display = 'block';
          $('translucent').style.display = 'block';
        }
      }
    }
  }

  function hideActiveSubItems(e) {
    var activeSubitem = e.target.parentElement.getElementsByClassName('subitems')[0];
    var subitems = $('items').getElementsByClassName('subitems');
    for (var i = 0; i < subitems.length;  i++) {
      if(subitems[i].style.display === 'block' && subitems[i] !== activeSubitem) {
        subitems[i].style.display = 'none';
      }
    }
  }

  function hideAllSubItems() {
    var items = $('items');
    var subitems = $('items').getElementsByClassName('subitems');
    for (var i = 0; i < subitems.length; i++) {
      subitems[i].style.display = 'none';
    }
    for (var j = 1; j < items.childNodes.length; j++) {
      items.childNodes[j].firstChild.className = 'down';
    }
  }


  function hideTranslucent() {
    $('translucent').style.display = 'none';
  }

  function showTranslucent() {
    $('translucent').style.display = 'block';
  }

  // Attach events and init app
  function attachEvent(o, e, cb) {
    o.addEventListener(e, cb);
  }

  function load() {
    attachEvent($('button-open'), 'click', showNav);
    attachEvent($('button-close'), 'click', hideNav);
    attachEvent($('items'), 'click', function(e) {
      if($('translucent').style.display === 'block') {
        $('translucent').style.display = 'none';
      }
      hideActiveSubItems(e);
      showActiveSubItems(e);
    });
    attachEvent($('translucent'), 'click', function() {
      hideTranslucent();
      hideAllSubItems();
      hideNav();
    });
    init();
  }

  attachEvent(window, 'load', load);

})();
