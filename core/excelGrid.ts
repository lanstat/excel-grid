module ExcelGrid{
    export class ExcelGrid{
        private root: HTMLDivElement;

        private diagonalCell: DiagonalCell;

        private columnCount: number;
        private rowCount: number;

        constructor(element: string){
            this.root = <HTMLDivElement>document.getElementById(element);
            this.root.className = 'excel-grid';

            this.columnCount = 25;
            this.rowCount = 100;

            this.diagonalCell = new DiagonalCell();
            this.root.appendChild(this.diagonalCell.element);

            Globals.HeaderSide = new HeaderSide(this.rowCount);
            this.root.appendChild(Globals.HeaderSide.column);

            Globals.HeaderTop = new HeaderTop(this.columnCount);
            this.root.appendChild(Globals.HeaderTop.element);

            Globals.DataScroller = document.createElement('div');
            Globals.DataScroller.className = 'scroller';

            Globals.DataGrid = new DataGrid(this.rowCount, this.columnCount);

            Globals.DataScroller.appendChild(Globals.DataGrid.element);
            this.root.appendChild(Globals.DataScroller);

            Globals.SelectContainer = new SelectContainer();
            this.root.appendChild(Globals.SelectContainer.element);

            this.bindScroller();
            this.bind();
        }

        private bindScroller(){
            let $this = this;

            Globals.DataScroller.addEventListener('scroll', function(evt){
                Globals.HeaderTop.element.style.marginLeft = '-' + evt.srcElement.scrollLeft + 'px';
                Globals.HeaderSide.column.style.top = '-' + evt.srcElement.scrollTop + 'px';
            });
        }

        private bind(){

        }

        public addRow(row: any[]){

        }

        public addRows(rows: any[][]){

        }

        public getRow(index: number): DataRow{
            return Globals.DataGrid.getRow(index);
        }
    }
}