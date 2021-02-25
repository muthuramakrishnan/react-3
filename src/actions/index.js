//action creator
export const selectSong = (song) => {

    //this needs to return a POJO which is an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//payload is optional but type is required for an action
//named export allows to return many different functions from a single file