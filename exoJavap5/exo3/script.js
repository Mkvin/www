class animal{
    constructor(name,race,pound,crie){
        this.name = name;
        this.race = race;
        this.pound = pound;
        this.crie = crie;
    }
}
//création instance animal
const chien = new animal("Jack","labrador",20,"ouaf");
const chat = new animal("felix","persan",10,"miaou");
const poisson = new animal("nemo","rouge",1,"bloup");
const oiseau = new animal("gauthier","perroquet",5,"cui cui");

//afficher les animaux
console.log(chien);
console.log(chat);
console.log(poisson);
console.log(oiseau);