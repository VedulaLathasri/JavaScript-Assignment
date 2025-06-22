/**Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */
const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

for(let i=0; i<arr.length ; i++) {

    switch(true) {
        case (arr[i].localeCompare('December') == 0 ) : console.log('Winter');break;
        case (arr[i].localeCompare('January') == 0 ) : console.log('Winter');break;
        case (arr[i].localeCompare('February') == 0 ) : console.log('Winter');break;
        case (arr[i].localeCompare('March') == 0 ) : console.log('Spring');break;
        case (arr[i].localeCompare('April') == 0 ) : console.log('Spring');break;
        case (arr[i].localeCompare('May') == 0 ) : console.log('Spring');break;
        case (arr[i].localeCompare('June') == 0 ) : console.log('Summer');break;
        case (arr[i].localeCompare('July') == 0 ) : console.log('Summer');break;
        case (arr[i].localeCompare('August') == 0 ) : console.log('Summer');break;
        case (arr[i].localeCompare('September') == 0 ) : console.log('Autumn');break;
        case (arr[i].localeCompare('October') == 0 ) : console.log('Autumn');break;
        case (arr[i].localeCompare('November') == 0 ) : console.log('Autumn');break;
    }
}