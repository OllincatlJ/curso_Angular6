export class DestinoViaje {
    private selected: boolean;
    public servicios: string[];
    constructor(public nombre: string, public u: string ){ 
        this.selected =false;
        this.servicios=['lavanderia','desayuno'];
    }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected =s;
    }
}

