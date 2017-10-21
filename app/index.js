import TYPES from './model/types';
import storage from './model/storage';
import dispatch from './controller/dispatch';

function test(data) {
    document.body.innerHTML += `<br>${data}`;
}

storage.addListener('new player', test);

function createProfile(name) {
    dispatch(TYPES.ADD_PLAYER, name);
}

createProfile('Timmi');
createProfile('Shrek');
createProfile('Petya');
