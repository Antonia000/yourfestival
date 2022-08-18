import { Injectable } from "@angular/core";


@Injectable()

export class FestivalService{
    getFestivals(){
        return [
            {
                name: "Neversea Festival",
                sessions: 
                [
                    { 
                        id:1,
                        dateStart: '06/07/2022',
                        dateEnd : '06/11/2022',
                        price:{
                            Standard : 200,
                            OneDay: 130,
                            VIP:340
                        }

                    },
                    {
                        id:2,
                        dateStart: '08/23/2022',
                        dateEnd : '08/25/2022',
                        price:{
                            Standard : 200,
                            OneDay: 100,
                            VIP:300
                        }
                    }

                ],
                artists : "Alan Walker, Alesso, Arias Azteck, BJones, Balck Eyed Peas,Charla's Dreams, Delia",
                specialGuest:"Alexandra Stan",
                ticketPrice : 200,
                image : "../../assets/images/festival1.jpg",
                location : {
                    city : "Constanta",
                    country : "Romania",
                    coordinates :{
                        lat: 44.1, 
                        lng: 28.6
                    }
                }
            },
        
            {
                name: "TommorowLand",
                sessions:
                [
                    {   
                        id:1,
                        dateStart: '07/15/2022',
                        dateEnd : '07/17/2022',
                        price:{
                            Standard: 320,
                            OneDay: 190,
                            VIP:500
                        }
                    },
                    {
                        id:2,
                        dateStart: '09/02/2022',
                        dateEnd : '09/04/2022',
                        price:{
                            Standard : 310,
                            OneDay: 180,
                            VIP:450
                        }
                    }
                ],
                artists : "Tiesto, Dimitri Vegas, JANEE",
                specialGuest:"Dua Lipa",
                ticketPrice : 310,
                image : "../../assets/images/festival2.jpg",
                location : {
                    city : "Boom, Antwerp",
                    country : "Belgium",
                    coordinates :{
                        lat: 28.4177 , 
                        lng: -81.5742

                    }
                }
            },
            {
                name: "Coachella Music & Arts Festival",
                sessions:[
                    {
                        id:1,
                        dateStart: '04/22/2022',
                        dateEnd : '04/24/2022',
                        price:{
                            Standard : 200,
                            OneDay: 130,
                            VIP:340
                        }
                    },
                    {
                        id:2,
                        dateStart: '06/22/2022',
                        dateEnd : '06/24/2022',
                        price:{
                            Standard: 180,
                            OneDay: 100,
                            VIP:290
                        }
                    }
                ],
                artists : "Billie Eilish, The Weekend, Harry Styles, Swedish House Mafia, Lil Baby",
                specialGuest:"Sean Paul",
                image : "../../assets/images/festival3.jpg",
                ticketPrice : 200,
                location : {
                    city : "Indio",
                    country : "California",
                    coordinates :{
                        lat: 33.680302 , 
                        lng: -116.173897

                    }
                }
            },
            {
                name: "Primavera Sound",
                sessions:[
                    {
                        id:1,
                        dateStart: '07/08/2022',
                        dateEnd : '07/11/2022',
                        price:{
                            Standard : 250,
                            OneDay: 180,
                            VIP:380
                        }
                    },
                    {
                        id:2,
                        dateStart: '09/08/2022',
                        dateEnd : '09/11/2022',
                        price:{
                            Standard : 200,
                            OneDay: 130,
                            VIP:340
                        }
                    }

                ],
                artists : "JBalvin, Andra, Michael L., Jay Z, Jessie J.",
                specialGuest:"Inna",
                ticketPrice : 200,
                image : "../../assets/images/festival4.jpg",
                location : {
                    city : "Barcelona",
                    country : "Spain",
                    coordinates :{
                        lat: 41.410666,
                        lng: 2.226342

                    }
                }
            },
            {
                name: "UNTOLD",
                sessions:[

                    {
                        id:1,
                        dateStart: '07/08/2022',
                        dateEnd : '07/10/2022',
                        price:{
                            Standard : 240,
                            OneDay: 160,
                            VIP:310
                        }
                    },
                    {
                        id:2,
                        dateStart: '09/04/2022',
                        dateEnd : '09/07/2022',
                        price:{
                            Standard : 160,
                            OneDay: 100,
                            VIP:300
                        }
                    }
                ],
                artists : "Alan Walker, Alesso, Arias Azteck, BJones, Balck Eyed Peas,Charla's Dreams, Delia",
                specialGuest:"Alexandra Stan",
                ticketPrice : 200,
                image : "../../assets/images/festival1.jpg",
                location : {
                    city : "Cluj",
                    country : "Romania",
                    coordinates :{
                        lat: 46.768453,
                        lng: 23.572372

                    }
                }
            },
            
        
        
        ]
    }

    getFestival(name:any){
       let festivals=this.getFestivals();
       console.log()
       return  festivals.find(festival=>{
            return name === festival.name ? festival : ''
        })
    }

    getSession(festival:any, id:any){
        let returnedSession={};

        const sessions= festival.sessions.map( (session:any) => {
            if(session.id ==id){
                return session
            }
            else{
                return null
            }
        })
        returnedSession = sessions.find( (session:any) =>{
            return session !== null
        })
        return returnedSession
    }
}