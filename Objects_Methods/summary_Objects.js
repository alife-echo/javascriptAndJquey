//Criando objetos é adicionando propriedades é metodos
let hotel  = {}  //-Notação Literal
hotel.name = 'Qualy'         
hotel.rooms = 40
hotel.booked = 25
hotel.checkAvailability = function ()  {
    console.log(this.rooms - this.booked)
}
hotel.checkAvailability()

//Criando objetos é adicionando propriedades é metodos

let hotel_Two = new Object() //Notação Construtor de objetos
hotel_Two.nameTwo = 'Quay'
hotel_Two.roomsTwo = 40       
hotel_Two.bookedTwo = 25
hotel_Two.checkAvailabilityTwo = function () {
     console.log(this.roomsTwo - this.bookedTwo)
}
hotel_Two.checkAvailabilityTwo()

//Criando um Objeto com Propriedades e Métodos
let hotel_Three = { // Notação Literal
   name:'Quay',
   rooms:40,
   booked:25,
   checkAvailability : function () {
      console.log(this.rooms - this.booked)
   }
}
hotel_Three.checkAvailability()

function hotelFour (name,rooms,booked) {
    this.name = name
    this.rooms = rooms
    this.booked = booked
    this.checkAvailability  = function () {
         console.log(this.rooms - this.booked)
    } 
    this.checkAvailability()
}
let hotelQuay = hotelFour('Quay',40,25)
let hotelPark = hotelFour('Park',120,77)