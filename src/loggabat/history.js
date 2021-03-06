/* eslint-disable no-underscore-dangle */

/**
 * History Collector for all contents logged onto the console
 */
class LoggaBatHistory {
  /**
   * Create a new LoggaBatHistory instance
   * @constructor
   */
  constructor() {
    this._queue = [];
  }

  /**
   * Add a new {@link LoggedContent} to history
   * @param {LoggedContent} content - logged item to be added to history
   */
  push(content) {
    this._queue.push(content);
  }

  /**
   * Clear history. Cannot be recovered once cleared
   */
  empty() {
    this._queue = [];
  }

  /**
   * Get all LoggedContents successfully logged into console
   * @return {Array}
   */
  getQueue() {
    return this._queue;
  }
}

module.exports = LoggaBatHistory;
