const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabMe = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let nodeBtn = item;
      let tabId = nodeBtn.getAttribute('data-tab');
      let nodeTab = document.querySelector(tabId);


      if (!nodeBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });
         tabMe.forEach(function (item) {
            item.classList.remove('active');
         })

         nodeBtn.classList.add('active');
         nodeTab.classList.add('active');
      }
   });
});

document.querySelector('.tabs__nav-btn').click();