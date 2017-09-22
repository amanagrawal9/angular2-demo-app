"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'Smart Phone', code: 'AB04587', description: 'SmartPhone', price: 200 },
            { id: 1, name: 'Printer', code: 'AB04789', description: 'Printer', price: 100 },
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map