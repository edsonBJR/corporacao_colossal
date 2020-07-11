"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _bodyParser = _interopRequireDefault(require("body-parser"));
var _express = _interopRequireDefault(require("express"));
var _feriadosRoutes = _interopRequireDefault(require("./controllers/feriados-routes"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var server = (0, _express.default)();

server.disable('x-powered-by');
server.use(_bodyParser.default.json());

server.use('/feriados', _feriadosRoutes.default);

server.listen(5000, function () {
  console.log("Server is running ...");
});var _default =

server;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsic2VydmVyIiwiZGlzYWJsZSIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwiZmVyaWFkb3NSb3V0ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoib0dBQUE7QUFDQTtBQUNBLHVGOztBQUVBLElBQU1BLE1BQU0sR0FBRyx1QkFBZjs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWUsY0FBZjtBQUNBRCxNQUFNLENBQUNFLEdBQVAsQ0FBV0Msb0JBQVdDLElBQVgsRUFBWDs7QUFFQUosTUFBTSxDQUFDRSxHQUFQLENBQVcsV0FBWCxFQUF3QkcsdUJBQXhCOztBQUVBTCxNQUFNLENBQUNNLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLFlBQVc7QUFDM0JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0gsQ0FGRCxFOztBQUllUixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZmVyaWFkb3NSb3V0ZXIgZnJvbSAnLi9jb250cm9sbGVycy9mZXJpYWRvcy1yb3V0ZXMnO1xuXG5jb25zdCBzZXJ2ZXIgPSBleHByZXNzKCk7XG5cbnNlcnZlci5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcbnNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG5zZXJ2ZXIudXNlKCcvZmVyaWFkb3MnLCBmZXJpYWRvc1JvdXRlcik7XG5cbnNlcnZlci5saXN0ZW4oNTAwMCwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgcnVubmluZyAuLi5cIilcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7Il19