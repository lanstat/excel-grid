module ExcelGrid{
    export class TextCell extends DataCell{
        private input: HTMLInputElement;

        constructor(){
            super();

            this.input = document.createElement('input');

            this.bindInput();
        }

        private bindInput(){
            let $this = this;

            this.input.onblur = function(){
                $this.notEditing($this.input.value);
            }
        }

        getEditable(): HTMLElement{
            this.input.style.height = this.element.clientHeight + 'px';
            this.input.style.width = this.element.clientWidth + 'px';

            return this.input;
        }
    }
}