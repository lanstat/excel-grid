module ExcelGrid{
    export class HeaderCell extends Cell{
        constructor(text: string, isColumn:boolean = false){
            super();

            this.setWidth(isColumn? 30: 100);
            this.setText(text);
        }
    }
}