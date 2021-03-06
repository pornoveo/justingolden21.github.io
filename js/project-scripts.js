const PROJECT_TYPES = 'web app, chrome extension, website'.split(',');
//todo add: android app, youtube tutorial, program, script, article, graphic design, story

const PROJECTS = [
	{
		'name': 'Desktop Clock',
		'type': 'web app',
		'icon': 'img/projects/desktop-clock-icon.svg',
		'color': '#999',
		'screenshot': 'img/projects/desktop-clock-screenshot.png',
		'link': 'https://chrome.google.com/webstore/detail/fioeniclklclkopakbepllehmbfikpcc',
		'desc': 'is a simple, resizable, customizable, clock app.',
		'features': 'Featuring ticking or sweeping second hand, simple mode, night mode, 12 themes, digital and analog displays, date and battery displays, doubleclick fullscreen, keyboard shortcuts, and always on top mode.',
		'tech': 'The app is written in plain HTML, CSS, and JS, and weighs in at less than 1MB. The app is ad-free, runs offline, and the clock is a vector (SVG) which scales to any screensize without pixelation.',
		'story': 'Desktop Clock was my first Chrome app, and the first project I released. I have since added numerous features per user requests, and maintained and updated it to where it is today. It is currently used weekly by over 20,000 users in over 120 countries, and has been translated into 5 languages.'
	},
	{
		'name': 'Chrome Notes',
		'type': 'chrome extension',
		'icon': 'img/projects/chrome-notes-icon.svg',
		'color': '#f90',
		'screenshot': 'img/projects/chrome-notes-screenshot.png',
		'link': 'https://chrome.google.com/webstore/detail/lnfempckkegmaeleniojhjplemmebgfi',
		'desc': 'is a simple notepad extension for Google Chrome.',
		'features': 'Featuring a resizable notepad, shotcut buttons and keys for cut, copy, paste, and select all, save as txt file, and text-to-speech.',
		'tech': 'The app is written in plain HTML, CSS, and JS, and weighs in at less than 1MB. The app is ad-free, runs offline, and remembers your notes and notepad size between all of your devices.',
		'story': 'Chrome Notes was my first Chrome extension. It is currently used weekly by over 4,000 users in over 97 countries.'
	},
	{
		'name': 'SongsSearcher',
		'type': 'website',
		'icon': 'img/projects/songssearcher-icon.svg',
		'color': '#333',
		'screenshot': 'img/projects/songssearcher-screenshot.png',
		'link': 'https://songssearcher.com',
		'desc': 'is a website where users can search and preview songs and view album art.',
		'features': 'Search songs by title, artist, or album. Find links to the track, artist, and album on Apple Music, as well as song length, release date, and more. View and download full definition album artwork, or listen to a preview of the song. Users can easily print the results, filter by country, and find quick links to search YouTube, the lyrics, or the beats per minute. There is also a night mode, and the logo animates when you search.',
		'tech': 'I designed the website with Bootstrap, jQuery, and FontAwesome. It uses the iTunes API to gather song data.',
		'story': 'I spent a lot of time designing the UI for this website, as well as designing the logo and adding new features. I made the website very lightweight so users can quickly find results for any search and get to exactly what they wanted to find.'
	},
	{
		'name': 'Color Convert',
		'type': 'website',
		'icon': 'img/projects/color-convert-icon.svg',
		'color': '#933',
		'screenshot': 'img/projects/color-convert-screenshot-2.png',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/color-convert',
		'desc': 'is a website where users can quickly pick, convert, and share colors.',
		'features': 'Featuring instant conversion between RGB, CMYK, HSL, and HSB, a graphical color picker, a random color button, hyperlinks to share your color, and quick copy buttons for typing your color in an image editor or code editor.',
		'tech': 'I designed the website with Bootstrap, jQuery, and FontAwesome. It also uses Slick carousels for its mobile implementation and Tiny Color Picker for its graphical color picker.',
		'story': 'I had found plenty of online color pickers and converters, but all of them lacked some basic functionality or looked horrendous on mobile. I wanted to take the time to design a clean, complete color picker and converter, that is built for graphic artists and programmers.'
	},
	{
		'name': 'DnD Dice',
		'type': 'website',
		'icon': 'img/projects/dnd-dice-icon.svg',
		'color': '#339',
		'screenshot': 'img/projects/dnd-dice-screenshot.png',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/dnd-dice',
		'desc': 'is a website where users can quickly roll various polyhedral dice for DnD.',
		'features': 'Roll any number of any size dice and view a list of the results as well as the total. Enter modifiers to add to your rolls, import or export modifiers, and view the history of your rolls. Your modifiers are also stored in the URL. You can also speak the roll results out loud, and there is a night mode as well.',
		'tech': 'I designed the website with Bootstrap, jQuery, and FontAwesome. I designed all dice icons using geometric construction in Adobe Illustrator.',
		'story': 'I have many friends who play DnD, and there are a large number of die rolling websites and mobile apps, however there is a lot of functionality missing from many of these websites. I wanted to make a sleek and easy to use website, so users can focus on the game rather than navigating a confusing website.'
		// I also designed a website where users can search spells by name and find information on the spell such as description, range, and level, and link to the spell to share with others. The website uses an API for the spell data, and Twitter Typeahead for an improved search experience. I also made a quick character roller for new players or DMs who want to create characters quickly. It displays and animates your rolls, as well as the statistics associated with them.
	},
	{
		'name': 'Grade Calc',
		'type': 'website',
		'icon': 'img/projects/grade-calc-icon.svg',
		'color': '#393',
		'screenshot': 'img/projects/grade-calc-screenshot.jpg',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/grade-calc',
		'desc': 'is a grading website for professors, designed around speed and ease of use.',
		'features': 'Enter Assignment names, weights, and maximum scores once, then quickly tab through inputs, entering student scores and names to accumulate a list of student grades. Featuring night mode, a fullscreen button, and a button to make all assignments the same weight. Assignments default to out of 100 points, so entering a percentage works perfectly without needless fiddling. After calculation, each assignment displays its individual grade as well as the percentage of their final grade it accounts for.',
		'tech': 'I designed Grade Calc with Bootstrap, jQuery, and FontAwesome. I found and edited the vector background graphic from Undraw.co, an open-source website for SVG images.',
		'story': 'Teachers often have to use overly complicated grade calculators or overly bare-bones ones. I wanted to make a website that has the all of the necessary features, while still preserving the simplicity of its design. When used optimally, teachers can calculate grades in 3-5 seconds, making hours of grade calculation take mere minutes.'
	},
	{
		'name': 'Binomial Calc',
		'type': 'website',
		'icon': 'img/projects/binomial-calc-icon.svg',
		'color': '#66c',
		'screenshot': 'img/projects/binomial-calc-screenshot.png',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/binomial-calc',
		'desc': 'is a binomial distribution calculator website.',
		'features': 'Enter the probability, number of trials, and successes, and quickly see binomial and cumulative probabilities, as well as your results visualized on charts in real time. Also, read and learn about all formulas used. It is a great tool for statisticians, students in the classroom, or just to determine, "what are the odds of that?"',
		'tech': 'I designed this website using Bootstrap 3 and Material Icons. I am using the Google Charts API to dynamically generate the pie and bar charts, as well as MathJax to display the formulas.',
		'story': 'I was bored in a statistics class when I started doodling the UI for this calculator. I made it the following night and used it for my homework. Since then, I have maintained and improved it, and later made it into my first <a href="https://play.google.com/store/apps/details?id=org.rgbstudios.binomialdistributioncalculator" target="_blank">Android app</a> which now has 5000 downloads.'
	},
	{
		'name': 'Barcode',
		'type': 'website',
		'icon': 'img/projects/barcode-icon.svg',
		'color': '#333',
		'screenshot': 'img/projects/barcode-screenshot.jpg',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/barcode',
		'desc': 'is a website where users can type to generate and download barcodes.',
		'features': 'Users can choose from a wide variety of barcode formats, download their barcode, and share a link to their barcode. There are more settings available such as label, width, height, margin, and colors.',
		'tech': 'This website was made with Bootstrap, jQuery, Popper, JsBarcode, and tinyColorPicker.',
		'story': 'I was browsing through cool Javascript libraries and found JsBarcode, and decided to try my hand at it. That\'s about all I have to say.'
	},
	{
		'name': 'SimpleShot',
		'type': 'chrome extension',
		'icon': 'img/projects/simple-shot-icon.svg',
		'color': '#666',
		'screenshot': 'img/projects/simple-shot-screenshot.png',
		'screenshotIsLong': true,
		'link': 'https://chrome.google.com/webstore/detail/hpnikgbjfhnpcaoicgbkkialbejlecke',
		'desc': 'is a fast, lightweight, and simple screenshot extension for Google Chrome.',
		'features': 'Click the button to take a screenshot of your current tab. Your mouse, taskbar, and other applications are not captured. It will open a new tab with your image where you can download it, or you can set it to download by default. Right click and save the image to name it as you please, otherwise it will be named by date.',
		'tech': 'SimpleShot is just built on plain JS, HTML, and CSS. It uses the image cached in your browser, so it runs lightning fast.',
		'story': 'I was thinking of useful ideas for a Chrome extension, and I wondered if a screenshot extension was possible. I saw other extensions, cluttered with ads and ugly popups. I wanted to make a clean, simple, and fast one, for myself and others.'
	},
	{
		'name': 'Copylink',
		'type': 'chrome extension',
		'icon': 'img/projects/copylink-icon.svg',
		'color': '#f93',
		'screenshot': 'img/projects/copylink-screenshot.png',
		'screenshotIsLong': true,
		'link': 'https://chrome.google.com/webstore/detail/hmbglhnodfegeiemefjoejkkmncdobde',
		'desc': 'is a Chrome extension that lets you copy the link to your tab with the click of a button',
		'features': 'Click to copy the link to your current tab. Great for sharing or saving websites. The link is also shown and highlighted in a textbox upon clicking.',
		'tech': 'This is a very simple project; it\'s just written in Javascript.',
		'story': 'I had an idea for a useful Chrome extension and I made it. That\'s the whole story. I thought I\'d share it here (despite being an extremly small project and not anything to showcase) because it might be useful for people browsing my projects.'
	},
	{
		'name': 'Base Converter',
		'type': 'website',
		'icon': 'img/projects/base-converter-icon.svg',
		'color': '#339',
		'screenshot': 'img/projects/base-converter-screenshot.jpg',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/base-convert/',
		'desc': 'is a website that lets users quickly convert numbers between binary, octal, decimal, and hex.',
		'features': 'Type your number and the other inputs instantly update. You can use the arrow keys in any input. There is a quick reference table, which is available for download, and also highlights with your input. There is a button to print the chart, and the conversion history is displayed below. There is an arithmetic modal that lets users perform mathematical functions and convert bewteen bases, such as adding a base 2 and base 8 number, and getting the result in base 16.',
		'tech': 'The website is made with my usual preference: a mix of jQuery, Bootstrap, and Font Awesome. The website is also available as a PWA (pregressive web app), and features an easy-to-use interface for mobile.',
		'story': 'I was in a computer science class and we kept getting assignments to convert between bases. I developed a utility to aid myself and my peers in learning and quickly double-checking homework.'
	},
	{
		'name': 'Doodle Pad',
		'type': 'website',
		'icon': 'img/projects/doodle-pad-icon.svg',
		'color': '#393',
		'screenshot': 'img/projects/doodle-pad-screenshot.jpg',
		'screenshotIsLong': true,
		'link': 'https://rgbstudios.org/doodle-pad/',
		'desc': 'is a simple and light-weight website where you can doodle in your browser.',
		'features': 'You can choose from an array of beautiful colors and enter your brush size. You can save or load images, print, go fullscreen, and customize your UI. There is a fill mode, and options to edit your image such as greyscale, lighten, darken, and invert.',
		'tech': 'This website was made with just plain JS and some jQuery, and uses Google\'s material icon set. The website uses the HTML canvas to draw and perform image editing.',
		'story': 'A long time ago, I worked on a very simple drawing website using the HTML canvas. Several years later, I came back to it, cleaned up the code and the UI, fixed bugs, and added more features. I don\'t think anyone uses it, but it is a cool little tool I enjoyed designing.'
	}

	// {
	// 	'name': 'Barcode',
	// 	'icon': 'img/projects/barcode-icon.svg',
	// 	'color': '#333',
	// 	'screenshot': 'img/projects/barcode-screenshot.jpg',
	// 	'screenshotIsLong': true,
	// 	'link': '',
	// 	'desc': 'is a ',
	// 	'features': '',
	// 	'tech': '',
	// 	'story': ''
	// }
	
];

$( ()=> {
	// rand img
	$('#profile-img').prop('src', 'img/profile/' + Math.ceil(Math.random()*4) + '.png');

	for(let i=0; i<PROJECTS.length; i++) {
		let tmpHTML = '<div class="project-div col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal-'+i+'">'+
			'<div class="project-div-inner">'+
			
			'<div class="project-div-front">'+
			'<img class="project-icon" src="'+PROJECTS[i].icon+'">'+
			'<h3 class="project-title">'+PROJECTS[i].name+'</h3>'+
			'</div>'+

			'<div class="project-div-back" style="background-color:'+PROJECTS[i].color+';">'+
			'<img class="project-icon" src="'+PROJECTS[i].icon+'">'+
			'<p class="project-desc"><a class="project-desc-link" href="'+PROJECTS[i].link+'" target="_blank" tabindex="-1">'+PROJECTS[i].name+'</a> '+PROJECTS[i].desc+'</p>'+
			'</div>'+

			'</div>'+
			'</div>';
		tmpHTML += '<div class="modal fade" id="modal-'+i+'">' +
			'<div class="modal-dialog modal-lg">' +
			'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h4 class="modal-title">'+'<img class="project-icon" src="'+PROJECTS[i].icon+'">'+' '+ PROJECTS[i].name+'</h4>' +
				'<button type="button" class="close" data-dismiss="modal">&times;</button>' +
			'</div>' +
			'<div class="modal-body">' +
				'<h3 class="text-center">Overview<br></h3>' +
				(!PROJECTS[i].screenshotIsLong ? 
					'<div class="row">' +
						'<div class="col-lg-7 col-md-6">' +
						'<img class="project-screenshot" src="'+PROJECTS[i].screenshot+'">' +
						'</div><div class="col-lg-5 col-md-6">' +
						'<h3 class="text-center">Features</h3>' +
						'<p class="project-details">'+PROJECTS[i].features+' <a href="'+PROJECTS[i].link+'" target="_blank">View this project </a>'+'</p>' +
						'</div>' +
					'</div>' +
					'<br>'
					: 
					'<img class="project-screenshot" src="'+PROJECTS[i].screenshot+'">' +
					'<br><br><h3 class="text-center">Features</h3>' +
					'<p class="project-details">'+PROJECTS[i].features+' <a href="'+PROJECTS[i].link+'" target="_blank">View this project </a>'+'</p>'
				) +
				'<h3 class="text-center">Story</h3>' +
				'<p class="project-features">'+PROJECTS[i].story+'</p>' +
				'<h3 class="text-center">Tech</h3>' +
				'<p class="project-tech">'+PROJECTS[i].tech+'</p>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';
		$('#'+PROJECTS[i].type.replace(' ', '-')+'-div').append(tmpHTML);
	}
});