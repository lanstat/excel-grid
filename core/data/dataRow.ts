module ExcelGrid {
    export class DataRow extends Row {

        constructor(count: number) {
            super(count);

            for (let i = 0; i < count; i++) {
                let cell = new TextCell();

                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }
        }
    }
}