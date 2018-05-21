module ExcelGrid {
    export class GuideRow extends Row {

        constructor(count: number) {
            super(count);

            this.element.classList.add('guide');

            for (let i = 0; i < count; i++) {
                let cell = new TextCell();

                cell.width = 100;
                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }

            this.height = 1;
        }
    }
}