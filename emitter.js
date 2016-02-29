class Emitter {
  _emitterEvents = {}

  bind(event, callback) {
    if (this._emitterEvents[event] === undefined) {
      this._emitterEvents[event] = [callback]
    } else {
      this._emitterEvents[event].push(callback)
    }
  }

  unbind(event, callback) {
    if (!(event in this._emitterEvents)) {
      return
    }
    this._emitterEvents[event].splice(this._emitterEvents[event].indexOf(callback), 1)
    if (!this._emitterEvents[event].length) {
      delete this._emitterEvents[event]
    }
  }

  emit(event, ...args) {
    if (!(event in this._emitterEvents)) {
      return
    }
    for (let i = 0; i < this._emitterEvents[event].length; i++) {
      this._emitterEvents[event][i].apply(this, args)
    }
  }
}

export default Emitter
