export interface Booking{
    festival : string,
    tickets : number,
    category: string,
    session: {
        id: number,
        dateStart:Date,
        dateEnd : Date,
        price:{
                Standard : number,
                OneDay: number,
                VIP:number
            }

        }
        
}