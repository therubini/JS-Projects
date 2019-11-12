function mood(emotion)  {
    var emotiontype= emotion.getAttribute("data-mood-type");
    alert("This " + emotion.innerHTML + " means you're " + emotiontype + ".");
}