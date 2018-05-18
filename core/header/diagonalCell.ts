module ExcelGrid{
    export class DiagonalCell extends Cell{
        constructor(){
            super();

            this.element.className = 'diagonal-cell';

            this.setWidth(30);
            this.setHeight(18);
        }
    }
}