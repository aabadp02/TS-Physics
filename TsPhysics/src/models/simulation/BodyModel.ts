
/**
 * Modelo para representar un cuerpo en el espacio, en el escenario de la simulación.
 * A través de esta clase se gestionará el movimiento de la misma en el espacio.
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
     * Velocidad en el eje x
     */
    private _velocityX: number;

    /**
     * Velocidad en el eje y
     */
    private _velocityY: number;

    /**
     * Masa del cuerpo
     */
    private _mass: number = 1;

    /**
     * Varaible para almacenar la posicioón inicial del eje x
     */
    private _beginningX: number;

    /**
     * Varaible para almacenar la posicioón inicial del eje y
     */
    private _beginningY: number;

    /**
     * Color que tendrá el cuerpo.
     */
    private _color: string = "#a52a2a";

    /**
     * Constructor de la clase BodyModel
     * @param positionX Posición en el eje X
     * @param positionY Posición en el eje Y
     * @param color Color del cuerpo (opcional)
     */    
    constructor(positionX: number, positionY: number, mass: number, velocityX?: number, velocityY?: number, color?: string) {
        
        // Seteamos los atributos del cuerpo
        this._positionX = positionX;
        this._positionY = positionY;

        // Seteamos la velocidad. Si no se especifica será 0
        this._velocityX = velocityX ?? 0;
        this._velocityY = velocityY ?? 0;

        // Seteamos el resto de atributos
        this._color = color ? color : this._color;
        this._mass = mass;

        // Guaradamos las posiciones iniciales para poder resetear el cuerpo si es necesario
        this._beginningX = positionX;
        this._beginningY = positionY;
    }

    /**
     * Getters 
     * */
    public get positionX() {
        return this._positionX;
    }

    public get positionY() {
        return this._positionY;
    }

    public get mass() {
        return this._mass;
    }

    public get color() {
        return this._color;
    }

    public get velocityX() {
        return this._velocityX;
    }

    public get velocityY() {
        return this._velocityY;
    }

    /**
     * Setters
     */
    public set positionX(position : number) {
        this._positionX = position;
    }

    public set positionY(position: number) {
        this._positionY = position;
    }

    public set velocityX(velocity : number) {
        this._velocityX = velocity;
    }

    public set velocityY(velocity: number) {
        this._velocityY = velocity;
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