module ExcelGrid {
    export class GuideRow extends Row {

        constructor() {
            super();

            this.element.classList.add('guide');

            this.height = 1;
        }

        public initialize(count: number){
            for (let i = 0; i < count; i++) {
                let cell = new GuideColumn();

                cell.width = 100;
                this.element.appendChild(cell.element);
                this.cells.push(cell);
            }
        }
    }
}