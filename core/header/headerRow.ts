module ExcelGrid {
    export class HeaderRow extends Element {
        private cells: Cell[];
        private chars: string = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';

        constructor(count: number) {
            super(document.createElement('div'));

            this.element.className = 'grid-row header';

            this.cells = [];

            let prefix: string = '';
            let pivot: number = -1;
            let index: number = 0;

            for (let i = 0; i < count; i++) {
                if (i >= this.chars.length) {
                    pivot++;
                    prefix = this.chars[pivot];
                    index = 0;
                }

                let cell = new HeaderCell(prefix + this.chars[index]);

                this.cells.push(cell);
                this.element.appendChild(cell.element);

                index++;
            }
        }
    }
}