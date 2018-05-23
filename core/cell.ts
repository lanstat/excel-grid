module ExcelGrid {
    export abstract class Cell extends Element {
        private active: boolean;

        constructor() {
            super(document.createElement('div'));

            this.element.className = 'grid-cell';
            this.active = false;

            this.bind();
        }

        protected bind() {
            let $this = this;
        }

        set text(text: string){
            this.element.innerText = text;
        }

        get text(): string{
            return this.element.innerText;
        }

        public setActive(active: boolean){
            this.active = active;
            if (active){
                this.element.classList.add('selected');
            } else {
                this.element.classList.remove('selected');
            }
        }

        public isActive(): boolean{
            return this.active;
        }
    }
}