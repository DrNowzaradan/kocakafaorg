var sideBar = document.getElementById("sidebar");
var coursecard_extra = document.getElementById("coursecard-extra");
var course_card_img = document.getElementById("coursecard-img");
var extrabutton = document.getElementById("extrabutton");
   
var aboutCourse=document.getElementById("aboutcourse");
var courseContent=document.getElementById("coursecontent");
var courseCost=document.getElementById("coursecost");
var aboutCourseContainer=document.getElementById("aboutcoursecontainer");
var courseContentContainer=document.getElementById("coursecontentcontainer");
var courseCostContainer=document.getElementById("coursecostcontainer");


function toggleSidebar() {
    sideBar.classList.toggle("show");
  }

aboutCourse.addEventListener('click',function(){
    aboutCourse.classList.add("changecolor");
    courseContent.classList.remove("changecolor");
    courseCost.classList.remove("changecolor");
    
    aboutCourseContainer.classList.remove("hide");
    courseContentContainer.classList.add("hide");
    courseCostContainer.classList.add("hide");
}) 
courseContent.addEventListener('click',function(){
    aboutCourse.classList.remove("changecolor");
    courseContent.classList.add("changecolor");
    courseCost.classList.remove("changecolor");

    aboutCourseContainer.classList.add("hide");
    courseContentContainer.classList.remove("hide");
    courseCostContainer.classList.add("hide");
}) 
courseCost.addEventListener('click',function(){
    aboutCourse.classList.remove("changecolor");
    courseContent.classList.remove("changecolor");
    courseCost.classList.add("changecolor");
    
    aboutCourseContainer.classList.add("hide");
    courseContentContainer.classList.add("hide");
    courseCostContainer.classList.remove("hide");
}) 

