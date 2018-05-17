module ExcelGrid{
    export class TextCell extends Cell{
        private input: HTMLInputElement;

        constructor(){
            super();

            this.input = document.createElement('input');

            this.bindInput();
        }

        private bindInput(){
            let $this = this;

            this.input.onblur = function(){
                $this.notEditing();
            }
        }

        getEditable(): HTMLElement{
            return this.input;
        }
    }
}