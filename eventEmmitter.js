class EventEmitter {
  events = {};
  subscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (fn) => fn !== callback
        );
      },
    };
  }

  emit(eventName, args = []) {
    const result = [];
    if (this.events[eventName]) {
      for (let fn of this.events[eventName]) {
        result.push(fn(...args));
      }
    }
    return result;
  }
}
