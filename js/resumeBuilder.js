
var bio ={

	"name": "Yen-An Chen",
	"role": "Back-End Developer",
	"contacts": {
		"mobile": "(646)-667-5210",
		"email": "yenan.chen@gmail.com",
		"github": "yen168",
		"location": "New York City"
	}, 
	"welcomeMessage": "",
	"skills": [
		"Web UI application design","Script programming","Data mining and analysis"
	],
	"bioPic": "images/yen2.png"

}

var education = {
	"schools": [
	{
		"name": "Baruch College, City University of New York",
		"location": "New York, New York",
		"degree": "Bachelor of Business Administration",
		"majors": ["Finance"],
		"dates": 2014,
		"url": "http://www.baruch.cuny.edu/"
	},
	{
		"name": "Soochow University",
		"location": "Taipei, Taiwan",
		"degree": "Bachelor of Science",
		"majors": ["Psychology, minor in Law"],
		"dates": 2008,
		"url": "http://www-en.scu.edu.tw/"
	}
	],

	"researches": [
	{
		
		"name": "Emotion Regulation Questionnaire Tradition Chinese Version",
		"location": "Taipei, Taiwan.",
		"dates": "2007",
		"url": "http://spl.stanford.edu/pdfs/ERQ/Taiwanese.pdf"

	},
	{
		
		"name": "The effect on homepage evaluation with the consistency between product color selection and color perceptual space. (in Chinese).",
		"location": "Taiwanese Psychological Association, Tainan, Taiwan.",
		"dates": "2007",
		"url": "#"

	},{
		
		"name": "Wang, M.Y., Chen, Y.A., & Cho, S.L. (May, 2005). Inversion effects for Chinese characters,objects and faces. Paper presented at the 10th Conference on Attention & Perception.",
		"location": "National Taiwan University, Taipei, Taiwan.",
		"dates": "2005",
		"url": "http://tci.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclret&s=id=%22TCI0002097665%22.&searchmode=basic&tcihsspage=tcisearch_opt2_search"

	}

		

	]
}

var work = {
	"jobs": [
	{
		"employer": "Baruch Computing and Technology Center",
		"title": "Tech Support Assistant",
		"dates": "Sept. 2012 - Mar. 2015",
		"location": "New York, New York",
		"url": "http://www.baruch.cuny.edu/bctc/",
		"description": "As a self-driven employee at Baruch Computing and Technology Center, \
		I have assumed a vast variety of important responsibilities other than \
		the regular maintenance of the computer lab and printers. In particulars, \
		I assisted my supervisor instituted a much more efficient and systematic \
		approach to the imaging process. We adopted the open source computer cloning \
		solution - FOG, the Free OpenSource Ghost. I initiated and maintained FOG imaging \
		cluster servers in Linux systems, thus reducing image distribution process \
		times by 60% as compared to previous method. Furthermore, I also developed \
		Rails web UI application with Bootstrap to facilitate non-Linux users familiarize \
		control image distribution function. Along with using VirtualBox to test configurations, \
		our imaging approach significantly expedite imaging, system reparation and \
		new equipment installations."

		/*[
		"Set up and maintained FOG imaging servers in Linux systems, reducing image distribution process times by 60%.",
		"Developed Rails web UI application with Bootstrap to facilitate non-Linux users familiarize control image distribution function.",
		"Simulated system configuration by using VirtualBox to test development and production environments.",
		"Established imaging systems for desktop and laptop to improve system repairs and new equipment distributions.",
		"Troubleshooted connection issues between network printers and Pharos print management system.",
		"Daily maintenance of desktop systems and enhancing, especially in desktop and laptop hardware."
		]*/

	},{
		"employer": "A & G International Trade Inc.",
		"title": "Business Informatics and eCommerce",
		"dates": "May 2014 - Feb. 2015",
		"location": "New York, New York",
		"url": "http://www.shopgemnyc.com/",
		"description": "With 10 months of IT experience in A & G International Trade Inc., \
		I maintained the company’s information system, my interests in relational \
		database management and programming also led me to coordinate with both the warehouse \
		and marketing departments to streamline product sales, communications, and work flow. \
		More specifically, I analyzed over 20,000+ jewelry product information including sales \
		quantity, purchase details and transition quality to forecast customers' activity for \
		real-time inventory control. Google Analytics was adopted to research and predict consumer \
		behavior. By utilizing Python to design and program customizable catalog application to \
		showcase wholesale jewelry items and auto-retouch photographs, I managed to increase \
		productivity by 90% compared to using Photoshop only. I also applied Ruby and Liquid \
		templates to create a new company website. Lastly, I integrated and implemented a new \
		ERP system to execute database immigration from DB2 to SQL Server. "

		/*[
		"Analyzed over 20,000+ jewelry product information including sales quantity, purchase details and transition quality to forecast customers' activity for real-time inventory control.",
		"Utilized Python to design and program customizable catalog application to showcase wholesale jewelry items, thus increasing productivity by 90% compared to using Photoshop.",
		"Developed an application using Python Imaging Library to auto-retouch photographs, decreasing labor outsourcing costs by 40%.",
		"Integrated and implemented new ERP system to execute database immigration from DB2 to SQL Server. Developed data cleansing tools by using Python, MS Access and SQL.",
		"Coordinated with sales and warehouse department to streamline communications and work flow.",
		"Implemented eCommerce projects for both wholesale and retail business, applying Ruby and Liquid templates to manage company websites.",
		"Adopted Google Analytics to research and predict consumer behavior."
		]*/
	}

	]
}

var projects = {
	"projects": [
	{
		"title": "ServerKids (Demo app on Heroku)",
		"dates": "2015",
		"description": ["Developed Rails web UI application with Bootstrap to facilitate non-Linux users familiarize control image distribution function.","Note: Here is a Demo app on Heroku. It would not be fully functional because it adopted SSH protocol. Authentication keys are required between servers. Please download PDF file to see full Demo."],
		"url": "https://nameless-lowlands-1773.herokuapp.com/",
		"images": ["images/sk4.png","images/sk2.png","images/sk3.png"]
	},{
		"title": "ShopGem",
		"dates": "2014",
		"description": ["Implemented eCommerce projects for both wholesale and retail business, applying Ruby and Liquid templates to manage company websites."],
		"url": "http://www.shopgemnyc.com",
		"images": ["images/shopgem.png"]
	},{
		"title": "CatalogMaker",
		"dates": "2014",
		"description": ["Utilized Python to design and program customizable catalog application to showcase wholesale jewelry items, thus increasing productivity by 90% compared to using Photoshop."],
		"url": "https://github.com/Yen168/Python/tree/master/CATA",
		"images": ["images/shopgem.png"]
	}

	]
}

if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);

	for(var i = 0;i < bio.skills.length ;i++){

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);

	}



}



function displayWork() {

	for(job in work.jobs){

	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer).replace("%url%",work.jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLoca = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLoca);

	var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDesc);



	/*for(desc in work.jobs[job].description){

		var formattedDesc = HTMLprojectDescription.replace("%data%",work.jobs[job].description[desc]);
		$(".work-entry:last").append(formattedDesc);
	}*/

}


} 

displayWork();

function locationizer(work_obj){

	var locationArray = [];

	for (job in work_obj.jobs){

		var newLocation = work_obj.jobs[job].location;

		locationArray.push(newLocation);

	}

	return locationArray;

}

console.log(locationizer(work));

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPhoto = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").prepend(formattedBioPhoto);



for(x in bio.contacts){
	
	
		var formattedContactGen = HTMLcontactGeneric.replace("%contact%",x).replace("%data%",bio.contacts[x]);

	
	
	$("#footerContacts").append(formattedContactGen);


}



/*$("#mapDiv").append(googleMap);

function inName(name){
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

  return name[0] +" "+ name[1];

}

$("#main").append(internationalizeButton);*/

projects.display = function() {

	for(project in projects.projects){

	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title).replace("%url%",projects.projects[project].url);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	for(desc in projects.projects[project].description){

		var formattedDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description[desc]);
		$(".project-entry:last").append(formattedDesc);
	}

	if(projects.projects[project].images.length > 0){

		for(image in projects.projects[project].images){

		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
	}


	}

}

} 

education.display = function() {

	for(school in education.schools){

	$("#education").append(HTMLschoolStart);
	
	var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("%url%",education.schools[school].url);
	$(".education-entry:last").append(formattedName);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);
	var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedLoca = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	$(".education-entry:last").append(formattedLoca);
	var formattedaMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
	$(".education-entry:last").append(formattedaMajor);
	

	}


	$("#education").append(HTMLresearchStart);
	
	for(research in education.researches){

		var formattedResearchName = HTMLresearchTitle.replace("%data%",education.researches[research].name).replace("%url%",education.researches[research].url);
		$(".research-entry").append(formattedResearchName);
	
		var formattedResearchDates = HTMLresearchDates.replace("%data%",education.researches[research].dates);
		$(".research-entry").append(formattedResearchDates);
		
		var formattedResearchLoca = HTMLresearchLocation.replace("%data%",education.researches[research].location);
		$(".research-entry").append(formattedResearchLoca);
	

	}



} 



projects.display();
education.display();
