// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs.




function songs(arr){
    class Songs{
        constructor(typeList , name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numOfSOngs = arr.shift(0);
    let songType = arr.pop();
    
    for(let i = 0; i< numOfSOngs ; i++){
        let songData = arr[i].split('_')
       
        songs.push(new Songs(songData[0], songData[1] , songData[2]));
        console.log(Songs.name)
        
        // if(songType === 'all'){
        //     songs.forEach(() => console.log(this.name));
        // }else{
        //    let filtered = songs.filter((i) => i.type === songType);
        //    filtered.forEach((i) => console.log(i.name));
        // }
    }

    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'all']);