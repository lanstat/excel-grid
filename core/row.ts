module ExcelGrid {
    export abstract class Row extends Element {
        protected cells: Cell[];

        constructor(count: number) {
            super(document.createElement('div'));
            this.element.className = 'grid-row';
            this.cells = [];
            this.height = 25;
        }
    }
}