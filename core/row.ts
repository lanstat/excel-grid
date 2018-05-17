module ExcelGrid {
    export class Row extends Element {
        private cells: Cell[];

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-row';

            this.cells = [];

            for (let i = 0; i < count; i++) {
                let cell = new TextCell();

                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }

            this.setHeight(25);
        }

        setHeight(height: number){
            this.element.style.height = height + 'px';
        }

        getHeight(): number{
            return parseInt(this.element.style.height.replace('px', ''));
        }
    }
}