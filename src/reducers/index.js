import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macorena', duration: '3:55'},
        {title: 'Beliver', duration: '4:25'},
        {title: 'Muzhusa unakena naa vazhuren', duration: '5:00'},
        {title: 'oh maria', duration: '2:00'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});