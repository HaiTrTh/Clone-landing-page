var faqItemIconList1 = document.querySelectorAll('.FAQ__content__item i:first-child')
var faqItemIconList2 = document.querySelectorAll('.FAQ__content__item i:nth-child(2)')
var fagContentItemList = document.querySelectorAll('.FAQ__content__item p')
faqItemIconList1.forEach((faqItemIcon1,item) => {
  faqItemIcon1.addEventListener('click',function(){
     this.style.display = "none"
     faqItemIconList2[item].style.display ="block"
     fagContentItemList[item].style.display ="block"
  })
})

faqItemIconList2.forEach((faqItemIcon2,item) => {
  faqItemIcon2.addEventListener('click',function(){
     this.style.display = "none"
     faqItemIconList1[item].style.display ="block"
     fagContentItemList[item].style.display ="none"
  })
  
})
