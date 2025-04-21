
/**
 * Modelo para representar un cuerpo en el espacio, en el escenario de la simulación.
 */
export class BodyModel {

    /**
     * Posición en el eje X.
     */
    private _positionX: number;

    /**
     * Posición en el eje Y.
     */
    private _positionY: number;

    /**
     * Varaible para almacenar la posicioón inicial del eje x
     */
    private _beginningX: number;

    /**
     * Varaible para almacenar la posicioón inicial del eje y
     */
    private _beginningY: number;

    private _color: string = "#a52a2a";

    constructor(positionX: number, positionY: number, color?: string) {
        
        // Seteamos la posición
        this._positionX = positionX;
        this._positionY = positionY;
        this._color = color ? color : this._color;

        // Guaradamos las posiciones iniciales para poder resetear el cuerpo si es necesario
        this._beginningX = positionX;
        this._beginningY = positionY;
    }

    /**Getters */
    public get positionX() {
        return this._positionX;
    }

    public get positionY() {
        return this._positionY;
    }

    public get color() {
        return this._color;
    }

    /**
     * Función para llevar a cabo un delay con javascript (typescript)
     * @param ms 
     */
    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    /**
     * Función provisional para mover el cuerpo horizontalmente en el espacio 50 posiciones
     */
    async move() { 

        for(var i = 0; i < 20; i++) {
            this._positionX += i * 2;

            // Hacemos un delay para que el movimiento no sea instantáneo, sino progresivo
            await this.delay(10);
        }

        await this.delay(2000);

        this.resetPosition();
    }

    /**
     * Función para resetear la posición del cuerpo a su posición inicial
     */
    resetPosition() {
        this._positionX = this._beginningX;
        this._positionY = this._beginningY;
    }

}