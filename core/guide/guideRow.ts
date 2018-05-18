module ExcelGrid {
    export class GuideRow extends Element {
        private cells: Cell[];

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-row guide';

            this.cells = [];

            for (let i = 0; i < count; i++) {
                let cell = new TextCell();

                cell.setWidth(100);
                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }

            this.setHeight(1);
        }

        setHeight(height: number){
            this.element.style.height = height + 'px';
        }

        getHeight(): number{
            return parseInt(this.element.style.height.replace('px', ''));
        }
    }
}