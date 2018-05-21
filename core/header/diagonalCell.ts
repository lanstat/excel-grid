module ExcelGrid{
    export class DiagonalCell extends Cell{
        constructor(){
            super();

            this.element.className = 'diagonal-cell';

            this.width = 30;
            this.height = 18;
        }
    }
}