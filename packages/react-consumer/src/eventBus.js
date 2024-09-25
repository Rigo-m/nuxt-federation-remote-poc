class EventBus {
  events = {};

  /**
   * Register an event listener for a specific event.
   * @param event - The name of the event to listen for.
   * @param fn - The callback function to execute when the event is emitted.
   * @returns A function to unsubscribe from the event.
   */

  $on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(fn);

    // return an unsubscribe function
    return () => {
      this.$off(event, fn);
    };
  }

  /**
   * Emit an event, triggering all registered listeners for that event.
   * @param event - The name of the event to emit.
   * @param data - The data to pass to the event listeners.
   */

  $emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => fn(data));
    }
  }

  /**
   * Unregister a specific event listener for a given event.
   * @param event - The name of the event to stop listening for.
   * @param fn - The callback function to remove from the event listeners.
   */

  $off(event, fnT) {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter(
      (listener) => listener !== fn,
    );
  }

  /**
   * Clear all listeners for a specific event.
   * @param event - The name of the event to clear listeners for.
   */

  $clear(event) {
    if (this.events[event]) {
      delete this.events[event];
    }
  }

  /**
   * Clear all listeners for all events.
   */

  $clearAll() {
    this.events = {};
  }
}

// create a singleton instance of the EventBus
const eventBus = new EventBus();

// attach the event bus to the window object on global scope for global access
export function initializeEventBus() {
  console.log("attaching EventBus to window");
  window.eventBus = eventBus;
}

export default eventBus;
