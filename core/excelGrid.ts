module ExcelGrid{
    export class ExcelGrid{
        private root: HTMLDivElement;
        
        private grid: Grid;
        private headerGrid: HeaderGrid;
        private headerColumn: HeaderColumn;
        public scroller: HTMLElement;
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

            this.scroller = document.createElement('div');
            this.scroller.className = 'scroller';
            this.grid = new Grid(this.columnCount);

            this.scroller.appendChild(this.grid.element);
            this.root.appendChild(this.scroller);

            this.createElements();

            this.bindScroller();
        }

        private createElements(){
            let tmp = new SelectContainer();
            this.root.appendChild(tmp.element);
            tmp.bind(this);
        }

        private bindScroller(){
            let $this = this;

            this.scroller.onscroll = function(evt){
                $this.headerGrid.element.style.marginLeft = '-' + evt.srcElement.scrollLeft + 'px';
                $this.headerColumn.column.style.top = '-' + evt.srcElement.scrollTop + 'px';
            }
        }
    }
}