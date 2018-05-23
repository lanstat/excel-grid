module ExcelGrid{
    export class ExcelGrid{
        private root: HTMLDivElement;

        private headerGrid: HeaderGrid;
        private headerColumn: HeaderColumn;
        private diagonalCell: DiagonalCell;

        private columnCount: number;

        constructor(element: string){
            this.root = <HTMLDivElement>document.getElementById(element);
            this.root.className = 'excel-grid';
            this.columnCount = 25;

            this.diagonalCell = new DiagonalCell();
            this.root.appendChild(this.diagonalCell.element);

            this.headerColumn = new HeaderColumn(100);
            this.root.appendChild(this.headerColumn.column);

            this.headerGrid = new HeaderGrid(this.columnCount);
            this.root.appendChild(this.headerGrid.element);

            Globals.DataScroller = document.createElement('div');
            Globals.DataScroller.className = 'scroller';

            Globals.DataGrid = new DataGrid(this.columnCount);

            Globals.DataScroller.appendChild(Globals.DataGrid.element);
            this.root.appendChild(Globals.DataScroller);

            Globals.SelectContainer = new SelectContainer();
            this.root.appendChild(Globals.SelectContainer.element);

            this.bindScroller();
        }

        private bindScroller(){
            let $this = this;

            Globals.DataScroller.addEventListener('scroll', function(evt){
                $this.headerGrid.element.style.marginLeft = '-' + evt.srcElement.scrollLeft + 'px';
                $this.headerColumn.column.style.top = '-' + evt.srcElement.scrollTop + 'px';
            });
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