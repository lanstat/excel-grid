module ExcelGrid{
    export class TextCell extends DataCell{
        private input: HTMLInputElement;

        constructor(row: DataRow, column: GuideColumn){
            super(row, column);

            this.input = document.createElement('input');

            this.bindInput();
        }

        private bindInput(){
            let $this = this;
            let disabled = false;

            let lockEvent = function(){
                if (!disabled){
                    disabled = true;
                    Globals.SelectContainer.notEditing($this.input.value);
                    setTimeout(function(){
                        disabled = false;
                    }, 100);
                }                
            };

            this.input.onblur = function(evt){
                lockEvent();
            }

            this.input.onkeypress = function(evt){
                if (evt.keyCode == 13){
                    lockEvent();
                }
            }
        }

        getEditable(): HTMLElement{
            this.input.style.height = this.element.clientHeight + 'px';
            this.input.style.width = this.element.clientWidth + 'px';

            return this.input;
        }
    }
}