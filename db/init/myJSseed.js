//must invoke query when it is being used as a search term!

gearArray = [

    {
        id: 1,
        name: "Roland Juno 106",
        make: "Roland",
        model: "Juno 106",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },

    {
        id: 2,
        name: "Fender Classic Player Jazzmaster",
        condition: "Excellent",
        serial: null,
        reverbCategorySlug: null,
        make: "Fender",
        model: "Classic Player Jazzmaster", 
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 3,
        name: "Native Instruments Komplete Kontrol S61",
        make: "Native Instruments",
        model: "Komplete Kontrol S61",
        serial: null,
        condition: "Excellent",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 4,
        name: "Native Instruments Maschine Mikro",
        make: "Native Instruments",
        model: "Maschine Mikro",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 5,
        name: "Abominable Electronics Sunnbather",
        make: "Abominable Electronics",
        model: "Sunnbather",
        serial: null,
        condition: "Excellent",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 6,
        name: "Electro-Harmonix Cathedral Digital Stereo Reverb",
        make: "Electro-Harmonix",
        model: "Cathedral Digital Stereo Reverb",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 7,
        name: "C&C Drums Player Date I Big Beat 13/16/22",
        make: "C&C Drums",
        model: "Player Date I Big Beat 13/16/22",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
    {
        id: 8,
        name: "Zildjian K Series Dark Thin Crash 19",
        make: "Zildjian",
        model: "Juno 106",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },    {
        id: 9,
        name: "Zildjian K Series Dark Thin Crash 17",
        make: "Zildjian",
        model: "K Series Dark Thin Crash 17",
        serial: null,
        condition: "Good",
        category: null,
        categorySlug: null,
        query: function() {
            return `${this.name} ${this.model}` },
        photoURL: null
    },
]