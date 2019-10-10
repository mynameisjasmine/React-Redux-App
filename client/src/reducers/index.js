import React from 'react';

const initialState = {
data: [
{
 id: 20,
 image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
 title: "Naruto",
 synopsis: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'..."
   }
 ]
};


const reducer = (state=initialState, action) => {
 switch(action.type) {
    default: 
    return state;
 }


}

export default reducer;