module ExcelGrid {
    export class SelectContainer extends Element {
        private selectedBox: HTMLElement;
        
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
                </div>
            `;

            this.bind()
        }

        private bind(){
            let $this = this;

            let topBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('top-border')[0];
            let leftBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('left-border')[0];
            let rightBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('right-border')[0];
            let bottomBorder: HTMLElement = <HTMLElement>this.element.getElementsByClassName('bottom-border')[0];

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

            Globals.DataScroller.addEventListener('scroll', function(evt){
                let top: number = $this.element.offsetTop;
                $this.element.style.top = (101 - evt.srcElement.scrollTop) + 'px';
            });
        }

        public showAtCell(cell: DataCell){
            this.top = cell.offsetTop - Globals.DataScroller.scrollTop - 1;
            this.left = cell.offsetLeft - Globals.DataScroller.scrollLeft - 1;
            this.width = cell.offsetWidth + 1;
            this.height = cell.offsetHeight + 1;

            this.show();
        }
    }
}