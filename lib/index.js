import {Control} from "delta-lib/src/control";
import $ from "jquery";

/**
 * Class representing DeltaJS control with jQuery possibilities
 */
export class JQueryControl extends Control {
    get context() {
        return $(this.originalContext);
    }
    get scope() {
        return $(super.scope);
    }
    wrapIndexedElement(item) {
        return $(item);
    }

    /**
     * List of events to which the control should subscribe
     * @return {Object} Should return POJO in which the string
     * keys represent one or more space-separated event types
     * and optional namespaces, and the values represent a handler function to be called for the event(s)
     * @see {@link http://api.jquery.com/on/#on-events-selector-data}
     */
    get events() {
        return {};
    }
    on() {
        this.context.on(this.events);
        return super.on();
    }
}
