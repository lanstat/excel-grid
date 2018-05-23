module ExcelGrid{
    export class HeaderCell extends Cell{
        constructor(text: string,
                    isColumn:boolean = false){
            super();

            this.width = isColumn? 30: 100;
            this.text = text;
        }
    }
}