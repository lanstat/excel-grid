module ExcelGrid{
    export class ExcelGrid{
        private root: HTMLDivElement;
        
        private grid: Grid;
        private headerGrid: HeaderGrid;

        private columnCount: number;

        constructor(element: string){
            this.root = <HTMLDivElement>document.getElementById(element);
            this.root.className = 'excel-grid';
            this.columnCount = 25;

            this.headerGrid = new HeaderGrid(this.columnCount);
            this.root.appendChild(this.headerGrid.element);

            let scroller = document.createElement('div');
            scroller.className = 'scroller';
            this.grid = new Grid(this.columnCount);

            scroller.appendChild(this.grid.element);
            this.root.appendChild(scroller);
        }
    }
}