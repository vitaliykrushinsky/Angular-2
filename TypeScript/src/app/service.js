var Service = (function () {
    function Service() {
        this.info = ['Angular2', 'jQuery', 'JavaScript'];
    }
    Service.prototype.addInfo = function (value) {
        this.info.push(value);
    };
    return Service;
})();
exports.Service = Service;
//# sourceMappingURL=service.js.map