module ExcelGrid{
    export class HeaderCell extends Cell{
        constructor(text: string){
            super();

            this.setWidth(100);
            this.setText(text);
        }

        getEditable(): HTMLElement{
            return null;
        }
    }
}