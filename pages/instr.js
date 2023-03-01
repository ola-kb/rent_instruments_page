
function Instrument(name, family, quantity, brands) {
  this.name = name;
  this.family = family;
  this.quantity = quantity;
  this.brands = brands;
}

let violin = new Instrument("Violin", "strings", 5, "Yamaha-2, Amati-2, Fiddlerman-1");
let cello = new Instrument("Cello", "strings", 3, "Primavera Cellos-1, Merano-2");
let doubleBass = new Instrument("Double Bass", "strings", 1, "Thomann-1");
let guitar = new Instrument("Guitar", "strings", 3, "Martin-1, Fender-2, Ibanez- 1, Yamaha-1");
let flute = new Instrument("Flute", "woodwinds", 5, "Gemeinhardt-2 Yamaha-3");
let clarinet = new Instrument("Clarinet", "woodwinds", 3, "Buffet Crampon-1, Yamaha-1, Selmer-1");
let saxophone = new Instrument("Saxophone", "woodwinds", 4, "Buffet-2, Yamaha-2");
let horn = new Instrument("Horn", "brasswinds", 2, "Paxman-2");
let trumpet = new Instrument("Trumpet", "brasswinds", 4, "Vincent Bach-1, Yamaha-2, King-1");




const violinMore = document.querySelector('#violinMore');
const celloMore = document.querySelector('#celloMore');
const doubleBassMore = document.querySelector('#doubleBassMore');
const guitarMore = document.querySelector('#guitarMore');
const fluteMore = document.querySelector('#fluteMore');
const clarinetMore = document.querySelector('#clarinetMore');
const saxophoneMore = document.querySelector('#saxophoneMore');
const hornMore = document.querySelector('#hornMore');
const trumpetMore = document.querySelector('#trumpetMore');

const details = document.querySelector('#details');

let instrArray = [{ instrument: violin, htmlElement: violinMore }, { instrument: cello, htmlElement: celloMore },
{ instrument: doubleBass, htmlElement: doubleBassMore }, { instrument: guitar, htmlElement: guitarMore },
{ instrument: flute, htmlElement: fluteMore }, { instrument: clarinet, htmlElement: clarinetMore },
{ instrument: saxophone, htmlElement: saxophoneMore }, { instrument: horn, htmlElement: hornMore },
{ instrument: trumpet, htmlElement: trumpetMore }];

instrArray.forEach(function (elem) {
  elem.htmlElement.addEventListener('click', function () {
    if (details.classList.contains('open')) {
      details.classList.remove('open')
      details.innerHTML = '';
    } else {
      details.classList.add('open')
      let name = document.createElement("p")
      name.innerHTML = `Name: ${elem.instrument.name}`;
      let family = document.createElement("p")
      family.innerHTML = ` Family: ${elem.instrument.family}`;
      let quantity = document.createElement("p")
      quantity.innerHTML = `Quantity:${elem.instrument.quantity}`;
      let brands = document.createElement("p")
      brands.innerHTML = ` Brands: ${elem.instrument.brands}`;
      details.append(name, family, quantity, brands);
    }
  })
});


