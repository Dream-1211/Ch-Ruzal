var changeLinkModule = (function() {
    var oList = document.querySelector('.item');
    var listH = oList.offsetHeight * 6;
    var oItemOut = document.querySelector('.item-out');
    var itemOutH = oItemOut.offsetHeight;
    var oA = document.querySelector('.change-link a');
    var clickCount = 0;
    var changeList = function () {
      oA.addEventListener('click', function() {
        console.log('点击');
        clickCount++;
        if (clickCount == 5) {
          clickCount = 0;
        }
        oItemOut.style.top = -126 * clickCount + 'px';
      })
    };
    return {
      changeList: changeList
    }
  })();
  changeLinkModule.changeList();
  