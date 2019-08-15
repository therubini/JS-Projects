function my_Dictionary() {
    var storm = {
        a:"Death Trooper",
        b:"Shadow Trooper",
        c:"Sith Trooper",
        e:"Clone Trooper",
    };
        delete storm.e;
        document.getElementById("Dictionary").innerHTML= storm.e;
}