module ExcelGrid{
    export class Element{
        public element: HTMLElement;
        private _listeners: any;
        private _height: number;
        private _width: number;
        private _top: number;
        private _left: number;
        private _visible: boolean;

        constructor(root: HTMLElement){
            this.element = root;
            this._listeners = {};
        }

        set width(width: number){
            this._width = width;
            this.element.style.width = width + 'px';
        }

        get width(): number {
            return this._width;
        }

        set height(height: number){
            this._height = height;
            this.element.style.height = height + 'px';
        }

        get height(): number {
            return this._height;
        }

        set top(top: number){
            this._top = top;
            this.element.style.top = top + 'px';
        }

        get top(): number{
            return this._top;
        }

        set left(left: number){
            this._left = left;
            this.element.style.left = left + 'px';
        }

        get left(): number{
            return this._left;
        }

        get offsetTop(): number{
            return this.element.offsetTop;
        }

        get offsetLeft(): number{
            return this.element.offsetLeft;
        }

        get scrollTop(): number{
            return this.element.scrollTop;
        }

        get scrollLeft(): number{
            return this.element.scrollLeft;
        }

        get offsetHeight(): number {
            return this.element.offsetHeight;
        }

        get offsetWidth(): number {
            return this.element.offsetWidth;
        }

        public show(){
            this._visible = true;
            this.element.style.display = 'block';
        }

        public hide(){
            this._visible = false;
            this.element.style.display = 'none';
        }

        public isVisible(): boolean{
            return this._visible;
        }

        public on(evt: string, callback: (data:any)=>void){
            if (typeof this._listeners[evt] === 'string'){
                this._listeners[evt] = [];
            }

            this._listeners[evt].push(callback);
        }

        public remove(evt: string, callback: (data: any)=>void){
            this._listeners[evt].remove(callback);
        }

        public removeAll(evt?: string){
            if(evt){
                this._listeners = [];
            } else {
                this._listeners[evt] = [];
            }
        }

        public emit(evt: string, data: any){
            let listeners = this._listeners[evt];

            if (listeners){
                for (let i=0;i<listeners.length;i++){
                    listeners[i](data);
                }
            }
        }
    }
}