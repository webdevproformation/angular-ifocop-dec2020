export class DataService {
    getAll<T> (){ // généricité 
        return [
            { 
                id : 1 ,
                nom : "Alain",
                age : 23
            },
            {
                id : 2 ,
                nom : "Béatrice",
                age : 12
            }
        ]        
    }
}