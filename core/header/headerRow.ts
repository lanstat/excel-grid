module ExcelGrid {
    export class HeaderRow extends Element {
        private cells: Cell[];
        private chars: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        constructor(count: number,
                    values: string[] = null,
                    isColumnRow: boolean = false) {
            super(document.createElement('div'));

            this.element.className = 'grid-row header';

            this.cells = [];

            let prefix: string = '';
            let pivot: number = -1;
            let index: number = 0;
            let cache: string[] = values? values: this.chars;

            for (let i = 0; i < count; i++) {
                if (i >= cache.length) {
                    pivot++;
                    prefix = cache[pivot];
                    index = 0;
                }

                let cell = new HeaderCell(prefix + cache[index], isColumnRow);

                this.cells.push(cell);
                this.element.appendChild(cell.element);

                index++;
            }
        }
    }
}