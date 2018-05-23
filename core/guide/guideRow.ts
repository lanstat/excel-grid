module ExcelGrid {
    export class GuideRow extends Row {

        constructor() {
            super();

            this.element.classList.add('guide');

            this.height = 1;
        }

        public initialize(columnCount: number){
            for (let i = 0; i < columnCount; i++) {
                let cell = new GuideColumn();

                cell.width = 100;
                this.element.appendChild(cell.element);
                this.cells.push(cell);

                if (i > 0){
                    let prevCell = <GuideColumn>this.cells[i-1];

                    cell.leftCell = prevCell;
                    prevCell.rightCell = cell;
                }
            }
        }
    }
}