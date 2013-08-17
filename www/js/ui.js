(function (window) {

  // Action overflow
  var checkActionOverflow = function () {

    var actionBars = document.querySelectorAll('.action-bar'),
        a = actionBars.length,
        cleanUp = document.querySelectorAll('.action-overflow'),
        c = cleanUp.length;

    // Clean up the existing action overflows
    while (cleanUp && c--) cleanUp[c].parentNode.removeChild(cleanUp[c]);

    // Do this only when the screen width is below or equal to 480 pixels
    if (window.innerWidth <= 480) {
      
      // Iterate over all action bars
      while (a--) {
        var actions = actionBars[a].querySelector('.actions'),
            actionButtons = actionBars[a].querySelectorAll('.actions .action');
      
        if (actionButtons.length > 2 && actions.getAttribute('data-overflow') !== "false") {

          // Maintain the first item then replace the rest with an action overflow
          var first = actionButtons[0],
              i = actionButtons.length,
              overflowList = document.createElement('ol'), // This goes inside overflowListItem
              overflowListItem = document.createElement('li'),
              overflowButton = document.createElement('a'),
              overflowIcon = document.createElement('i');

          // Reverse the list since we're iterating it backwards
          overflowList.setAttribute('reversed', 'reversed');

          overflowList.classList.add('action-overflow-list');
          overflowList.classList.add('spinner');

          // Hide the overflow, previously `1` on initial value of x 
          for (var x = 2; x < i; x++) {
            actionButtons[x].parentNode.classList.add('action-overflow-hidden');

            var li = document.createElement('li'),
                anchor = document.createElement('a');

            anchor.innerHTML = actionButtons[x].getAttribute('title');
            
            /*var evt = document.createEvent('Event');
            evt.initEvent("customnavigation",true,true); 

            anchor.onclick = function(){
              evt.transition = {
                type : 'stack',
                path : '/' + anchor.innerHTML.toLowerCase()
              };
              document.dispatchEvent(evt);
            }*/

            // Copy over all stack-related data attributes
            li.classList.add('spinner-item');
            li.appendChild(anchor);
            overflowList.appendChild(li);
          }

          // Add the action overflow button
          overflowButton.classList.add('action');
          overflowButton.classList.add('action-overflow-icon');
          overflowButton.classList.add('toggle-spinner');
          overflowButton.appendChild(overflowIcon);

          overflowListItem.classList.add('action-overflow');
          overflowListItem.appendChild(overflowButton);
          overflowListItem.appendChild(overflowList);

          actionBars[a].querySelector('.actions').appendChild(overflowListItem);
        }
      }
      
    }
    else {
      // Iterate over all action bars
      while (a--) {
        var actionButtons = actionBars[a].querySelectorAll('.actions .action')
            i = actionButtons.length;

        // Un-overflow the action buttons
        while (i--) {
          actionButtons[i].parentNode.classList.remove('action-overflow-hidden');
        }
      }
    }
  }

  window.checkActionOverflow = checkActionOverflow

  window.addEventListener('load', checkActionOverflow, false);
  window.addEventListener('resize', checkActionOverflow, false);
  window.addEventListener('popstate', checkActionOverflow, false);

})(window);

(function(window){

  // Checks whether the event target is a .toggle-spinner button
  var findTarget = function (target) {
    var i, toggles = document.querySelectorAll('.toggle-spinner');
    for (; target && target !== document; target = target.parentNode) {
      for (i = toggles.length; i--;) { if (toggles[i] === target) return target; }
    }
  };

  // Returns the event target if it's a .toggle-spinner button
  var getTarget = function (e) {
    var target = findTarget(e.target);
    if (!target) return;
    return target;
  };

  // Checks whether the event target is a .toggle-spinner button
  var findSpinnerTarget = function (target) {
    var i, toggles = document.querySelectorAll('.spinner-item');
    for (; target && target !== document; target = target.parentNode) {
      for (i = toggles.length; i--;) { if (toggles[i] === target) return target; }
    }
  };

  // Returns the event target if it's a spinner item
  var getSpinnerTarget = function (e) {
    var target = findSpinnerTarget(e.target);
    if (!target) return;
    return target;
  }

  // Event handler to show/hide the spinner
  var handleTouch = function (e) {
    var target = getTarget(e);
    if (!target) return; //target = document.querySelectorAll('.spinner')[0];//return;
    showSpinner(target);
  };

  var showSpinner = function(target) {
    var spinner = target.parentNode.querySelectorAll('.spinner')[0];
    
    if (!spinner.classList.contains('active')) spinner.style.display = 'block';

    setTimeout(function () { 
      spinner.classList.toggle('active');
      spinner.addEventListener('webkitTransitionEnd', popEnd);
    }, 20); // Might be better to get the timeout from the CSS transition
    
    function popEnd () {
      if (!spinner.classList.contains('active')) spinner.style.display = 'none';
    };
  }

  // Attach event handler to close the spinner unless target is a spinner item
  var eventType = navigator.userAgent.indexOf('Mac') > -1 ? 'click' : 'touchend'
  var eventItem = document.createEvent("Event")
  eventItem.initEvent("customnavigation",true,true); 

  document.addEventListener(eventType, function (e) {
    if (!getSpinnerTarget(e) && !getTarget(e)) {
      var spinners = document.querySelectorAll('.spinner'),
          i = spinners.length;
      while (i--) {
        spinners[i].classList.remove('active');
      }
    }else{
      var item = getSpinnerTarget(e)
      if(item){
        var next = '/' + item.querySelector('a').innerHTML.toLowerCase().split(' ').join('-')
        eventItem.transition = {
          type : 'stack',
          path : next
        }
        document.dispatchEvent(eventItem)
      }
    }
  });

  // Attach the event handler
  window.addEventListener(eventType, handleTouch, false);

})(window);