let browser = prompt('What browser are you using?');
if(browser === 'Edge'){
    alert('You are using Edge');
}   else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Okay ,we support these browsers too');
}   else {
    alert('We hope that this page looks ok!');
}
