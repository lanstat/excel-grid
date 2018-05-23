module ExcelGrid{
    export class DiagonalCell extends Cell{
        constructor(){
            super(0, 0);

            this.element.className = 'diagonal-cell';

            this.width = 30;
            this.height = 18;
        }
    }
}