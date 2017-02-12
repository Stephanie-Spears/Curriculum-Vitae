var bio = {
  "name": "<h1 id='name'>Stephanie Spears</h1>",
  "role": "<span>Programmer/Web Developer</span><hr>",
  "contacts": {
    "mobile": "<li class='flex-item'><span class='blue-text'>mobile</span><span class='white-text'>503-459-5555</span></li>",
    "email": "<li class='flex-item'><span class='blue-text'>email</span><span class='white-text'>Stephanie.Spears1@gmail.com</span></li>",
    "github": "<li class='flex-item'><span class='blue-text'>github</span><span class='white-text'>https://github.com/Stephanie-Spears</span></li>",
    "location": "<li class='flex-item'><span class='blue-text'>location</span><span class='white-text'>Portland, Oregon</span></li>"
  },
  "welcomeMessage": "<blockquote><p>Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p><footer>Pele</footer></blockquote>",
  "skills": [
    "C++", "PHP", "Drupal", "HTML/CSS/JavaScript", "Java", "Visual Basic", "Python", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humor and positive attitude", "Analytical thinking and research ability", "Work effectively as part of a team or independently"
  ],
  "myBioPic": "<img src=img/bioPic.jpg class='biopic'>"
};

// NOTE: ACTUALLY, go back and put the HTML elements in the HTML. duh. 

if (bio.length !== 0)
{
  $("#header").prepend(bio.name, bio.role);
  $("#topContacts").prepend(bio.contacts.mobile, bio.contacts.email, bio.contacts.github, bio.contacts.location);
  $("#header").append(bio.myBioPic, bio.welcomeMessage);

  if (bio.skills.length > 0) {
    $("#header").append('<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>');
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill=HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }

}


var education = {
  "schools": [
    {
      "name": "Epicodus",
      "location": "Portland, Oregon",
      "degree": "graduate",
      "majors": ["PHP", "Drupal", "JavaScript"],
      "dates": "Jan 2017-July 2017",
      "url": "https://www.epicodus.com/"
    },
    {
      "name": "University of Oregon",
      "location": "Eugene, Oregon",
      "degree": "BA",
      "majors": ["Psychology", "Humanities", "English minor"],
      "dates": "Sept 2009-June 2011",
      "url": "http://uoregon.edu/"
    }
  ],
  "Completed Courses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/ud804/lessons/1946788554/concepts/25505685350923"
    },
    {
      "title": "Software Design",
      "school": "Portland Community College",
      "dates": "Sept 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerinformationsystems/#coursestext"
    },
    {
      "title": "Computer Science I",
      "school": "Portland Community College",
      "dates": "Sept 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerscience/#coursestext"
    },
    {
      "title": "Computer Science II",
      "school": "Portland Community College",
      "dates": "Nov 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerscience/#coursestext"
    }
  ]
};

function displayEducation() {
  if (education.schools.length > 0) {
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(formattedSchoolName);
      formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedSchoolDegree);
      formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedSchoolDate);
      formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedSchoolLocation);
      formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
}

displayEducation();


var work = {
  "jobs": [
    {
      "employer": "Kuzuha Language College",
      "title": "English Language Consultant",
      "dates": "Feb 2012-Dec 2015",
      "location": "Hirakata, Japan",
      "description": "English Language Consultant on a variety of technical and academnic materials. Editing, proof-reading, translation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "employer": "Self-Employed",
      "title": "Private Instructor",
      "dates": "April 2012-Dec 2015",
      "location": "Osaka, Japan",
      "description": "I worked as a private English instructor, assisting clients with various English language-related tasks. Tasks were unique to the client’s needs, and largely depended on the client’s profession. Activities ranged from Japanese-English translation, proofreading and helping form or understand articles, essays, scientific or medical studies, conference speeches, legal contracts, and professional correspondences between international colleagues. I continue to work from a distance with several private clients."
    },
    {
      "employer": "Scott T. Bailey, Attorney at Law",
      "title": "Research Assistant",
      "dates": "June 2011-Sept 2011",
      "location": "Florence, Oregon",
      "description": "This was a brief summer-break internship position in which I assisted with researching, organizing, and summarizing medical evidence in support of medical disability claims."
    }
  ]
};

function displayWork() {
  if (work.jobs.length > 0) {
    for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[i].title);
      formattedEmployerTitle= formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates=HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedLocations=HTMLworkLocation.replace("%data%", work.jobs[i].location);
      $(".work-entry:last").append(formattedLocations);
      var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

displayWork();

var projects = {
  "projects": [
    {
      "title": "project title",
      "dates": "project dates",
      "description": "project description",
      "images": [
      ]
    },
    {
      "title": "project title2",
      "dates": "project dates2",
      "description": "project description2",
      "images": [

      ]
    }
  ]
};

function displayProjects() {
  if (projects.projects.length > 0) {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[i].images.length > 0) {
        for (var e = 0; e < projects.projects[i].images.length; e++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[e]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}
displayProjects();


// FUNCTIONS

//takes in a string of two names and capitalizes the last name
function inName(name) {
  name = name.trim().split(" "); //trim will take away the white space in the front and back of the name string. split it at the space char
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase(); //capitalizes first name's first letter, appends it to the remainder of the first name which it ensures is lower case.
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// //displays where the user clicks on webpage--inside inspect
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });

//creates an array of all work locations
function locationizer(work_obj) {
  var locationArray = [];
  for (var i = 0; i < work.jobs.length; i++) {
    var newLocation = work_obj.jobs[i].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
locationizer(work);

//invoke the map in helper.js
$("#mapDiv").append(googleMap);
