module ExcelGrid{
    export class ExcelGrid{
        private root: HTMLDivElement;
        
        private grid: Grid;
        private headerGrid: HeaderGrid;
        private scroller: HTMLElement;

        private columnCount: number;

        constructor(element: string){
            this.root = <HTMLDivElement>document.getElementById(element);
            this.root.className = 'excel-grid';
            this.columnCount = 25;

            this.headerGrid = new HeaderGrid(this.columnCount);
            this.root.appendChild(this.headerGrid.element);

            this.scroller = document.createElement('div');
            this.scroller.className = 'scroller';
            this.grid = new Grid(this.columnCount);

            this.scroller.appendChild(this.grid.element);
            this.root.appendChild(this.scroller);

            this.bindScroller();
        }

        private bindScroller(){
            let $this = this;

            this.scroller.onscroll = function(evt){
                $this.headerGrid.element.style.left = '-' + evt.srcElement.scrollLeft + 'px';
            }
        }
    }
}