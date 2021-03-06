module ExcelGrid {
    export class SelectContainer extends Element {
        private selectedBox: HTMLElement;
        private boxEditor: HTMLDivElement;
        private selectedCells: DataCell[];
        
        constructor() {
            super(document.createElement('div'));

            this.element.className = 'selected-box';
            this.element.innerHTML = `
                <div style="width: 100%;height: 100%;position: relative">
                    <div class="top-border"></div>
                    <div class="left-border"></div>
                    <div class="right-border"></div>
                    <div class="bottom-border"></div>
                    <div class="box-selector"></div>
                    <div class="box-editor"></div>
                </div>
            `;

            this.selectedCells = [];

            this.bind()
        }

        private bind(){
            let $this = this;

            let topBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('top-border')[0];
            let leftBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('left-border')[0];
            let rightBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('right-border')[0];
            let bottomBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('bottom-border')[0];

            this.boxEditor = <HTMLDivElement>this.element.getElementsByClassName('box-editor')[0];

            topBorder.onclick = function(){
                console.log('top');
            }
            leftBorder.onclick = function(){
                console.log('left');
            }
            rightBorder.onclick = function(){
                console.log('right');
            }
            bottomBorder.onclick = function(){
                console.log('bot');
            }

            $this.element.addEventListener('dblclick', function(evt){
                if ($this.isVisible()){
                    let cell: DataCell = $this.selectedCells[0];
                    let editable: HTMLElement = cell.getEditable();

                    $this.boxEditor.appendChild(editable);
                    editable.focus();
                }
            });

            Globals.DataScroller.addEventListener('scroll', function(evt){
                if ($this.isVisible()){
                    let cell: DataCell = $this.selectedCells[0];
                    $this.element.style.top = (cell.offsetTop - evt.srcElement.scrollTop - 1) + 'px';
                    $this.element.style.left = (cell.offsetLeft - evt.srcElement.scrollLeft - 1) + 'px';
                }
            });
        }

        private inactiveSelected(){
            for(let i=0; i< this.selectedCells.length; i++){
                if (this.selectedCells[i].row.isActive()){
                    this.selectedCells[i].row.setActive(false);
                }
                if (this.selectedCells[i].column.isActive()){
                    this.selectedCells[i].column.setActive(false);
                }
            }
        }

        public showAtCell(cell: DataCell){
            this.inactiveSelected();

            this.selectedCells = [cell];

            this.top = cell.offsetTop - Globals.DataScroller.scrollTop - 1;
            this.left = cell.offsetLeft - Globals.DataScroller.scrollLeft - 1;
            this.width = cell.offsetWidth + 1;
            this.height = cell.offsetHeight + 1;

            cell.row.setActive(true);
            cell.column.setActive(true);

            this.show();
        }

        public moveSingleTo(direction: number){
            let cell = this.selectedCells[0];
            let nextCell = null;
            switch(direction){
                case 0:
                    nextCell = cell.upCell;
                break;
                case 1:
                    nextCell = cell.rightCell;
                break;
                case 2:
                    nextCell = cell.downCell;
                break;
                case 3:
                    nextCell = cell.leftCell;
                break;
            }

            if (nextCell){
                this.showAtCell(nextCell);
            }
        }

        public notEditing(html: string) {
            this.boxEditor.innerHTML = '';
            this.selectedCells[0].element.innerHTML = html;
        }
    }
}