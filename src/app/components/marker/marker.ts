/**
 * Class Marker
 */
export class Marker {
    /** Database identification. */
    id: number;
    /** Latitute. */
    lat: number;
    /** Longitute. */
    lng: number;
    /** Draggable. */
    draggable: boolean;
    /** Completed. */
    completed?: boolean;
    /** Description of the Marker. */
    label?: string;
    /** Custom icon. */
    icon?: string;
}
