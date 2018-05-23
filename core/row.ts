module ExcelGrid {
    export abstract class Row extends Element {
        public cells: Cell[];

        constructor() {
            super(document.createElement('div'));
            this.element.className = 'grid-row';
            this.cells = [];
            this.height = 25;
        }
    }
}