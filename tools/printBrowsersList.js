import browserslist from 'browserslist';

// prints to terminal list of browsers that matches browserlist config file
console.log(browserslist());

// prints to terminal total users coverage for selected browsers
console.log(`coverage: ${browserslist.coverage(browserslist())}%`);
